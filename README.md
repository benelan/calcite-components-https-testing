# Calcite Components HTTPS Testing

This repo is to help test HTTPS specific issues with Calcite Components.

## Steps

1. Make sure the [calcite-components](https://github.com/Esri/calcite-components) branch you want to test is pushed to origin
2. Set the name of your branch to the `CC_BRANCH` environment variable, e.g. `CC_BRANCH="benelan/testing-https"`
3. Run `npm test`
4. Open the browser and go to [`https://localhost:8443`](https://localhost:8443) for HTTPS and/or [`https://localhost:8080`](https://localhost:8080) for HTTP 

### DO NOT USE THE UNSIGNED CERT IN THIS REPO FOR ANYTHING EXCEPT TESTING
