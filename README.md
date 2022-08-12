# Calcite Components HTTPS Testing

This repo is to help test HTTPS specific issues with Calcite Components.

## Steps

1. Create a branch on [calcite-components](https://github.com/Esri/calcite-components) with the changes you want to test
2. Set the name of your branch to the `CC_BRANCH` environment variable
3. Run `npm test`
4. Open the browser and go to [`https://localhost:8443`](`https://localhost:8443`)



### DO NOT USE THE UNSIGNED CERT IN THIS REPO FOR ANYTHING EXCEPT TESTING