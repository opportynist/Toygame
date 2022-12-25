<<<<<<< HEAD
import * as pathNode from "path";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
const srcFolder = "src";
const builFolder = "dist";
=======
import * as pathNode from 'path'

const srcFolder = 'src'
const builFolder = 'dist'
>>>>>>> 95d2c130db5d58edede516c68958cd74e6b5ec34

const path = {
  src: pathNode.resolve(srcFolder),
  build: pathNode.resolve(builFolder),
<<<<<<< HEAD
};

export const webpackConfig = (isMode) => ({
  entry: ["@babel/polyfill", `${path.src}/js/app.js`],
  mode: isMode ? "development" : "production",
  cache: {
    type: "filesystem", // По умолчанию 'memory'
=======
}

export const webpackConfig = (isMode) => ({
  entry: ['@babel/polyfill', `${path.src}/js/app.js`],
  mode: isMode ? 'development' : 'production',
  cache: {
    type: 'filesystem', // По умолчанию 'memory'
>>>>>>> 95d2c130db5d58edede516c68958cd74e6b5ec34
    cacheDirectory: `${path.src}/.temporary_cache`,
  },
  output: {
    path: `${path.build}/js`,
<<<<<<< HEAD
    filename: "app.min.js",
    publicPath: "/",
=======
    filename: 'app.min.js',
    publicPath: '/',
>>>>>>> 95d2c130db5d58edede516c68958cd74e6b5ec34
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
<<<<<<< HEAD
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
=======
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
>>>>>>> 95d2c130db5d58edede516c68958cd74e6b5ec34
          },
        },
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
<<<<<<< HEAD
});
=======
})
>>>>>>> 95d2c130db5d58edede516c68958cd74e6b5ec34
