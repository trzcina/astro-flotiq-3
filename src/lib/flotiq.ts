// import { FlotiqApi } from "flotiq-api-ts";
// export const flotiq = new FlotiqApi(import.meta.env.FLOTIQ_API_KEY);

import { FlotiqAPI } from "@flotiq/flotiq-api-sdk";
export const flotiq = new FlotiqAPI({apiKey: import.meta.env.FLOTIQ_API_KEY});

