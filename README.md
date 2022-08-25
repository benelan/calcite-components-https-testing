# Calcite Components HTTPS Testing

This repo is for testing HTTPS specific issues with Calcite Components.

## Steps

1. Make sure the [calcite-components](https://github.com/Esri/calcite-components) branch you want to test is pushed to origin
2. Set the name of your branch in [`.gitmodules`](https://github.com/benelan/calcite-components-https-testing/blob/master/.gitmodules#L4), e.g. `branch = benelan/testing-https`
3. Run `npm i && npm run build && npm start`
4. Open the browser and go to [`https://localhost:8443`](https://localhost:8443) for HTTPS and/or [`https://localhost:8080`](https://localhost:8080) for HTTP

If you get a build error in the Calcite Components git submodule when making changes, do a clean install:

```bash
npm run install:clean
```

### DO NOT USE THE UNSIGNED CERT IN THIS REPO FOR ANYTHING EXCEPT TESTING
