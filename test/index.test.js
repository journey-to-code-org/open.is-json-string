import test from "node:test";
import assert from "node:assert/strict";
import { isJsonString, tryParseJson } from "../src/index.js";
test("validates JSON",()=>{assert.equal(isJsonString('{"a":1}'),true);assert.equal(isJsonString("{bad}"),false);});
test("can require objects/arrays",()=>{assert.equal(isJsonString("1",{requireObject:true}),false);assert.equal(isJsonString("[]",{requireObject:true}),true);});
test("returns parse results",()=>{assert.deepEqual(tryParseJson('{"a":1}'),{ok:true,value:{a:1}});assert.equal(tryParseJson("{").ok,false);});
