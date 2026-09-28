export function isJsonString(value:unknown,options?:{requireObject?:boolean}):boolean;
export type TryParseJsonResult = {ok:true;value:unknown}|{ok:false;error:Error};
export function tryParseJson(value:unknown):TryParseJsonResult;
