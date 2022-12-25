<<<<<<< HEAD
import webpack from "webpack-stream";
import { webpackConfig } from "../../webpack.config.js";
=======
import webpack from 'webpack-stream'
import { webpackConfig } from '../../webpack.config.js'
>>>>>>> 95d2c130db5d58edede516c68958cd74e6b5ec34

export const js = () =>
  app.gulp
    .src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
<<<<<<< HEAD
          title: "JS",
          message: "Error: <%= error.message %>",
=======
          title: 'JS',
          message: 'Error: <%= error.message %>',
>>>>>>> 95d2c130db5d58edede516c68958cd74e6b5ec34
        })
      )
    )
    .pipe(webpack({ config: webpackConfig(app.isDev) }))
    .pipe(app.gulp.dest(app.path.build.js))
<<<<<<< HEAD
    .pipe(app.plugins.browserSync.stream());
=======
    .pipe(app.plugins.browserSync.stream())
>>>>>>> 95d2c130db5d58edede516c68958cd74e6b5ec34
