# InvoiceDesk for GenLayer

InvoiceDesk is the browser workflow for `InvoiceProof`: a wallet-connected agent-payment control that submits a canonical invoice claim, waits for consensus finality, reads the stored receipt back, and only then permits one-time receipt consumption.

It does not calculate a local verdict. The page calls the deployed `InvoiceProof` contract for every lifecycle transition and rejects non-final, non-approved, expired, used, or unreadable receipts.

## Run the static check
`node scripts/check-site.mjs`

## Deployment
Publish the `docs/` folder with GitHub Pages. The live app defaults to the deployed Studio `InvoiceProof` contract at `0x98c5c2972AE8D4d1Dd49c558d8B24AA55432f580` and requires GenLayer Studio (chain ID `61999`) before enabling a transaction.
