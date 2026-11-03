import { readFileSync } from "node:fs"; import assert from "node:assert/strict";
const site=readFileSync(new URL("../docs/index.html",import.meta.url),"utf8");
for(const marker of ["request_invoice_receipt","consume_approved_receipt","get_receipt","tx.wait()","final.used","two independent readable sources","A GenLayer-compatible wallet"]){assert.ok(site.includes(marker),`missing ${marker}`)}
assert.ok(!site.includes("mock verdict"),"site must not present a mock verdict"); console.log("InvoiceDesk contract-readback checks passed.");
