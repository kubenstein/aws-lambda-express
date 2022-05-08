
# AWS lambda express
Ongoing skills expansion to world of lambdas and AWS in general.

## Development
Local dev env (bypassing lambda infra):

```bash
nvm use
yarn run dev

# navigate to http://localhost:3000/
```

Local sam dev env (execute requests in SAM-based dev lambda context):
```bash
./scripts/run-dev-env-docker.sh

# navigate to http://localhost:3000/
```

## Deployments
Deployments are done via GH Actions, GH deploys to AWS. `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` secret are needed.