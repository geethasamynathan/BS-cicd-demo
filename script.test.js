const test=require("node:test");
const assert =require("node:assert/strict");

const {getMessage}=require("./script.js");

test("Application should return the correct deployment message",()=>{
    const expected = "Build Pipeline is working fine. Application is deployed successfully.";
    const actual = getMessage();
    assert.strictEqual(actual, expected);
});