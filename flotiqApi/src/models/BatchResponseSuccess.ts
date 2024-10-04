/* tslint:disable */
/* eslint-disable */
/**
 * Flotiq User API
 * ## Getting started  This API Documentation reflects the endpoints defined in your [Flotiq](https://flotiq.com) account. The documentation is generated using an OpenAPI schema describing the API, which can be obtained in several flavors:  - [OAS 3.0](https://api.flotiq.com/api/v1/open-api-schema.json?auth_token=REPLACE_KEY_VALUE)   - without hydration, will not expand relations between content types (this is the default version which provides maximum compatibility with downstream systems)   - with hydration, pass [hydrate=1](https://api.flotiq.com/api/v1/open-api-schema.json?auth_token=REPLACE_KEY_VALUE&amp;hydrate=1) - use this for a better type support in exported OpenAPI schemas   - without system endpoints, pass [user_only=1](https://api.flotiq.com/api/v1/open-api-schema.json?auth_token=REPLACE_KEY_VALUE&amp;hydrate=1&amp;user_only=1) - use this to only include your endpoints, without system ones - [OAS 2.0](https://api.flotiq.com/api/v1/open-api-schema.json?auth_token=REPLACE_KEY_VALUE&amp;version=2) - provided for compatibility with several older systems  Check Flotiq documentation for more information about [Flotiq OpenAPI capabilities](https://flotiq.com/docs/API/open-api-schema/), instructions how to generate code and other useful tips.  ### Access to data  There are several methods that you can use to access your data:  * Live API docs - available via &lt;code&gt;Try it out&lt;/code&gt; button available next to each endpoint   * Copying example code on the right side of each endpoint  * By downloading the SDKs available in mulitple languages.  * By downloading the Postman collection and importing it into Postman.    Each of these methods is described in length in the [user documentation](https://flotiq.com/docs/).   ### Authorization   In order to make use of the provided documentation, example code, SDKs and so on - you will need to pull out your API key. We recommend that you start with the ReadOnly API Key which will allow you to make all the `GET` requests but will error-out when you try to modify content. Please remember to replace the key for `POST`, `PUT` and `DELETE` calls.   It&#039;s also possible to use scoped API keys - you can create those in the API keys section of the Flotiq user interface. This will allow you to create a key that only authorizes access to a specific content type (or a set of content types, if you choose so). Read more about how to use and create API keys in the [API keys documentation](https://flotiq.com/docs/API/).   ## Object access   Once you define a Content Type it will become available in your Content API as a set of endpoints that will allow you to work with objects:   * create  * list  * update  * delete  * batch create  * retrieve single object.  ### Hydration   When you build Content Types that have relation to others your objects will optionally support hydration of related entities. The endpoints that support object retrieval accept a `hydrate` parameter, which can be used to easily fetch hydrated objects. Since this breaks the standard REST concepts - it&#039;s not enabled by default, but it&#039;s a very handy feature that allows to reduce the amount of HTTP requests sent over the wire and we strongly recommend to use it.
 *
 * The version of the OpenAPI document: 2.0.1
 * Contact: hello@flotiq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BatchResponseSuccess
 */
export interface BatchResponseSuccess {
    /**
     * 
     * @type {number}
     * @memberof BatchResponseSuccess
     */
    batch_total_count?: number;
    /**
     * 
     * @type {number}
     * @memberof BatchResponseSuccess
     */
    batch_success_count?: number;
    /**
     * 
     * @type {number}
     * @memberof BatchResponseSuccess
     */
    batch_error_count?: number;
    /**
     * 
     * @type {Array<object>}
     * @memberof BatchResponseSuccess
     */
    errors?: Array<object>;
}

/**
 * Check if a given object implements the BatchResponseSuccess interface.
 */
export function instanceOfBatchResponseSuccess(value: object): value is BatchResponseSuccess {
    const flotiqContentType = (value as { internal?: { contentType?: string } }).internal?.contentType;
    if (flotiqContentType) {
        const typeSlug = flotiqContentType.split('_')
            .filter(Boolean)
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join('');
        return 'BatchResponseSuccess' === typeSlug;
    }
    return true;
}

export function BatchResponseSuccessFromJSON(json: any): BatchResponseSuccess {
    return BatchResponseSuccessFromJSONTyped(json, false);
}

export function BatchResponseSuccessFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchResponseSuccess {
    if (json == null) {
        return json;
    }
    return {
        
        'batch_total_count': json['batch_total_count'] == null ? undefined : json['batch_total_count'],
        'batch_success_count': json['batch_success_count'] == null ? undefined : json['batch_success_count'],
        'batch_error_count': json['batch_error_count'] == null ? undefined : json['batch_error_count'],
        'errors': json['errors'] == null ? undefined : json['errors'],
    };
}

export function BatchResponseSuccessToJSON(value?: BatchResponseSuccess | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'batch_total_count': value['batch_total_count'],
        'batch_success_count': value['batch_success_count'],
        'batch_error_count': value['batch_error_count'],
        'errors': value['errors'],
    };
}

