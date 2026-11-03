import { readFileSync } from "node:fs"; import assert from "node:assert/strict";
const site=readFileSync(new URL("../docs/index.html",import.meta.url),"utf8");
for(const marker of ["request_invoice_receipt","consume_approved_receipt","get_receipt","tx.wait()","final.used","two independent readable sources","A GenLayer-compatible wallet","0x98c5c2972AE8D4d1Dd49c558d8B24AA55432f580","studioChainId","eth_chainId"]){assert.ok(site.includes(marker),`missing ${marker}`)}
assert.ok(!site.includes("mock verdict"),"site must not present a mock verdict"); console.log("InvoiceDesk contract-readback checks passed.");
