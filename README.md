# webpack-commons-chunk
Webpack config to see incremental build in action taking into consideration the 3rd party libraries

## Usage

Once the repository is cloned, install the required npm modules by running following command in the root folder

```
npm install
```

This will get all the required modules i.e. webpack, jquery and all the required webpack loaders and plugins.

Now, bundle and watch the source files using following command

```
./node_modules/.bin/webpack --watch
```

Open chrome and load the `dist/index.html`. It should properly show that the jquery is workign as expected. Nothing much to see there.

To **really** verify it works : Make note of the file modified/created timestamps of bundled output files under `dist` folder. Let few seconds pass by. Go ahead and edit the `src/app.js`. Any change will do. Webpack will detect the change and bundle the main.js file alone. You can verify that by making sure that the `dist/manifest.js` and `dist/vendor.js` are with old timestamp.
