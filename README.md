# InvoiceDesk for GenLayer

InvoiceDesk is the browser workflow for `InvoiceProof`: a wallet-connected agent-payment control that submits a canonical invoice claim, waits for consensus finality, reads the stored receipt back, and only then permits one-time receipt consumption.

It does not calculate a local verdict. The page calls the deployed `InvoiceProof` contract for every lifecycle transition and rejects non-final, non-approved, expired, used, or unreadable receipts.

## Run the static check
`node scripts/check-site.mjs`

## Deployment
Publish the `docs/` folder with GitHub Pages. Before a production workflow, deploy `InvoiceProof` on Studio and paste its contract address in the app.
