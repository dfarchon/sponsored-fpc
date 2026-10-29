import assert from "node:assert/strict";
import test from "node:test";
import { resolveConfigValue } from "../src/config.js";

test("resolveConfigValue resolves env references", () => {
  assert.equal(resolveConfigValue("env:TARGET", { TARGET: "0x123" }), "0x123");
  assert.equal(resolveConfigValue("literal", {}), "literal");
  assert.throws(() => resolveConfigValue("env:MISSING", {}), /MISSING/);
});
