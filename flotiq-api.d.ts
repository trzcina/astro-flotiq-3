import {
  ApiRequest,
  BaseObject,
  InternalMedia,
  InternalMediaFilterableFields,
  InternalMediaHydrated,
  InternalMediaHydratedTwice,
  InternalPluginSettings,
  InternalPluginSettingsFilterableFields,
  InternalPluginSettingsHydrated,
  InternalPluginSettingsHydratedTwice,
  InternalTag,
  InternalTagFilterableFields,
  InternalTagHydrated,
  InternalTagHydratedTwice,
  InternalWebhooks,
  InternalWebhooksFilterableFields,
  InternalWebhooksHydrated,
  InternalWebhooksHydratedTwice,
  DataLink,
} from "@flotiq/flotiq-api-sdk";

type StringWithAutocomplete<T> = T | (string & Record<never, never>);

declare module "@flotiq/flotiq-api-sdk" {
  export type BlogpostFilterableFields = StringWithAutocomplete<
    | "id"
    | "internal"
    | "slug"
    | "title"
    | "content"
    | "header_image"
    | "header_image[*].type"
    | "header_image[*].dataUrl"
  >;

  /**
   * Flotiq CTD: blogpost
   */
  export interface BlogpostBase extends BaseObject {
    slug: string;
    title: string;
    content: string;
    header_image?:
      | DataLink[]
      | InternalMedia[]
      | InternalMediaHydrated[]
      | InternalMediaHydratedTwice[];
  }

  /**
   * Flotiq CTD: blogpost
   */
  export interface Blogpost extends BlogpostBase {
    header_image?: DataLink[];
  }

  /**
   * Flotiq CTD: blogpost
   */
  export interface BlogpostHydrated extends BlogpostBase {
    header_image?: InternalMedia[];
  }

  /**
   * Flotiq CTD: blogpost
   */
  export interface BlogpostHydratedTwice extends BlogpostBase {
    header_image?: InternalMediaHydrated[];
  }

  export type ProductFilterableFields = StringWithAutocomplete<
    | "id"
    | "internal"
    | "name"
    | "slug"
    | "price"
    | "description"
    | "productImage"
    | "productImage[*].type"
    | "productImage[*].dataUrl"
    | "productGallery"
    | "productGallery[*].type"
    | "productGallery[*].dataUrl"
  >;

  /**
   * Flotiq CTD: product
   */
  export interface ProductBase extends BaseObject {
    name: string;
    slug: string;
    price: number;
    description?: string;
    productImage?:
      | DataLink[]
      | InternalMedia[]
      | InternalMediaHydrated[]
      | InternalMediaHydratedTwice[];
    productGallery?:
      | DataLink[]
      | InternalMedia[]
      | InternalMediaHydrated[]
      | InternalMediaHydratedTwice[];
  }

  /**
   * Flotiq CTD: product
   */
  export interface Product extends ProductBase {
    productImage?: DataLink[];
    productGallery?: DataLink[];
  }

  /**
   * Flotiq CTD: product
   */
  export interface ProductHydrated extends ProductBase {
    productImage?: InternalMedia[];
    productGallery?: InternalMedia[];
  }

  /**
   * Flotiq CTD: product
   */
  export interface ProductHydratedTwice extends ProductBase {
    productImage?: InternalMediaHydrated[];
    productGallery?: InternalMediaHydrated[];
  }

  export interface FlotiqAPI {
    _media: ApiRequest<
      InternalMedia,
      InternalMediaHydrated,
      InternalMediaHydratedTwice,
      InternalMediaFilterableFields
    >;
    _plugin_settings: ApiRequest<
      InternalPluginSettings,
      InternalPluginSettingsHydrated,
      InternalPluginSettingsHydratedTwice,
      InternalPluginSettingsFilterableFields
    >;
    _tag: ApiRequest<
      InternalTag,
      InternalTagHydrated,
      InternalTagHydratedTwice,
      InternalTagFilterableFields
    >;
    _webhooks: ApiRequest<
      InternalWebhooks,
      InternalWebhooksHydrated,
      InternalWebhooksHydratedTwice,
      InternalWebhooksFilterableFields
    >;
    blogpost: ApiRequest<
      Blogpost,
      BlogpostHydrated,
      BlogpostHydratedTwice,
      BlogpostFilterableFields
    >;
    product: ApiRequest<
      Product,
      ProductHydrated,
      ProductHydratedTwice,
      ProductFilterableFields
    >;
  }
}
