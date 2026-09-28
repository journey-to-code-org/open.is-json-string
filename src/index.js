export function isJsonString(value, options={}) {
  if(typeof value!=="string")return false;
  const { requireObject=false }=options;
  if(typeof requireObject!=="boolean")throw new TypeError("Expected requireObject to be a boolean");
  try {
    const parsed=JSON.parse(value);
    return !requireObject || (parsed!==null && typeof parsed==="object");
  } catch { return false; }
}
export function tryParseJson(value) {
  if(typeof value!=="string")return {ok:false,error:new TypeError("Expected value to be a string")};
  try{return {ok:true,value:JSON.parse(value)};}catch(error){return {ok:false,error};}
}
