/* tslint:disable */
/* eslint-disable */
/* Flotiq customised */
export * from './runtime';
export * from './apis/index';
export * from './models/index';

import * as runtime from './runtime';
import * as Api from './apis/index';
import type { RequestContext }  from "./runtime";

declare const process: any;

const hydrateMiddleware = async (ctx: RequestContext) => {

    if(ctx.init.method == 'GET'){

      const url = new URL(ctx.url);
      if(!url.searchParams.has('hydrate')) {
        if (ctx.url.indexOf('?') > 0) {
          ctx.url = ctx.url + '&hydrate=1';
        } else {
          ctx.url = ctx.url + '?hydrate=1';
        }
      }

    }

    return {
        ...ctx,
        init: {
            ...ctx.init,
        }
    }
};

export class FlotiqApi {
    public BlogPostAPI : Api.BlogPostAPI;
    public MediaInternalAPI : Api.MediaInternalAPI;
    public ProductAPI : Api.ProductAPI;
    public TagInternalAPI : Api.TagInternalAPI;

    constructor(key: string | undefined = undefined){

        const envApiKey = process.env.FLOTIQ_API_KEY;

        if (envApiKey) {
            key = envApiKey;
        }

        if(!key) {
          throw new Error("FLOTIQ_API_KEY must be passed to the FlotiqAPI constructor.");
        }

        const configParameters: runtime.ConfigurationParameters = {
          apiKey: key
        };
        const configuration = new runtime.Configuration(configParameters);
        this.BlogPostAPI = new Api.BlogPostAPI(configuration);
        this.BlogPostAPI = this.BlogPostAPI.withPreMiddleware( hydrateMiddleware );
        this.MediaInternalAPI = new Api.MediaInternalAPI(configuration);
        this.MediaInternalAPI = this.MediaInternalAPI.withPreMiddleware( hydrateMiddleware );
        this.ProductAPI = new Api.ProductAPI(configuration);
        this.ProductAPI = this.ProductAPI.withPreMiddleware( hydrateMiddleware );
        this.TagInternalAPI = new Api.TagInternalAPI(configuration);
        this.TagInternalAPI = this.TagInternalAPI.withPreMiddleware( hydrateMiddleware );
    }
}