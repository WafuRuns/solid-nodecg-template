# solid-nodecg-template

NodeCG template using [Solid](https://solidjs.com) and [vite-nodecg-plugin](https://github.com/dan-shields/vite-plugin-nodecg)

## Usage

Clone this repository into your NodeCG instance's bundles folder. Adjust package.json according to [NodeCG's package.json Manifest](https://www.nodecg.dev/docs/manifest).

```bash
git clone https://github.com/WafuRuns/solid-nodecg-template
```

## Available scripts

```bash
yarn       # Installs Node packages
yarn dev   # Starts the bundle in dev mode with HMR
yarn build # Builds the bundle for production
yarn clean # Cleans up the project structure
```

You can also use `npm`, but `yarn` is recommended for its faster package installation.

While it's possible to run this bundle standalone, it's recommended to run it in the NodeCG instance.

## Notes

-   Inside of vite.config.mts, there's a port option for the server. This is because NodeCGPlugin doesn't have the correct default port,
-   createReplicant (in src/common/) allows you to access NodeCG replicants inside of the Solid app. It behaves very similarly to a regular createSignal except changing the value also changes the replicant and reading it also gets the most up to date replicant value
-   It's recommended to use pretter to format your code. Applying it to the entire project can be done by using `prettier --write .`, assuming you installed prettier globally.
