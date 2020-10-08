#!/usr/bin/env bash

set -e
set -o pipefail
set -v

curl -s -X POST https://api.stackbit.com/project/5f7f74f0e67ba7001cbf25bb/webhook/build/pull > /dev/null
npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://api.stackbit.com/pull/5f7f74f0e67ba7001cbf25bb
curl -s -X POST https://api.stackbit.com/project/5f7f74f0e67ba7001cbf25bb/webhook/build/ssgbuild > /dev/null
gatsby build
curl -s -X POST https://api.stackbit.com/project/5f7f74f0e67ba7001cbf25bb/webhook/build/publish > /dev/null
