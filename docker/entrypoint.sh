#!/bin/sh
# Change to the correct directory
cd /usr/src/app;
# Run hardhat  node in background
npx hardhat node &

sleep 10

npm run deploy:local


# Keep node alive
set -e
if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ]; then
  set -- node "$@"
fi
exec "$@"