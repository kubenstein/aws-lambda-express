
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
./scripts/run-dev-env.sh

# or
./scripts/run-dev-env-docker.sh

# then navigate to http://localhost:3000/
```

## Deployments
Deployments are manually triggered via GH Actions.

## Production logs
Production logs can be obtained by using command below:
```bash
AWS_ACCESS_KEY_ID=*** AWS_SECRET_ACCESS_KEY=*** ./scripts/production-logs.sh
```

`AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` will be displayed during deployment, those are keys for a secial user with logs readonly permissions.