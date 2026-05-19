#!/bin/bash
unset CLOUDFLARE_API_TOKEN
echo "Deploying /Users/hoa/Desktop/Claude CoWork/droptimize to Cloudflare Pages project: droptimize"
npx wrangler pages deploy . --project-name droptimize
echo "Done."
