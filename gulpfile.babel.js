/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

import gulp from 'gulp';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';
import flow from 'gulp-flowtype';
import mocha from 'gulp-mocha';
import del from 'del';
import webpack from 'webpack-stream';
import commonjsWrap from 'gulp-wrap-commonjs';
import webpackConfig from './webpack.config.babel';

const paths = {
  allSrcJs: 'src/**/*.js?(x)',
  serverSrcJs: 'src/server/**/*.js?(x)',
  sharedSrcJs: 'src/shared/**/*.js?(x)',
  allLibTests: 'lib/test/**/*.js',
  clientEntryPoint: 'src/client/app.js',
  clientBundle: 'dist/client-bundle.js?(.map)',
  gulpFile: 'gulpfile.babel.js',
  webpackFile: 'webpack.config.babel.js',
  libDir: 'lib',
  distDir: 'dist',
  moduleDir: 'dist/module',
};

gulp.task('lint', () =>
  gulp.src([
    paths.allSrcJs,
    paths.gulpFile,
    paths.webpackFile,
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(flow({ abort: true })),
);

gulp.task('clean', () => del([
  paths.libDir,
  paths.distDir,
]));

gulp.task('commonjs', ['clean'], () =>
  gulp.src(paths.allSrcJs)
    .pipe(commonjsWrap({
      autoRequire: true,
    }))
    .pipe(gulp.dest(paths.moduleDir)),
);

gulp.task('transpile', ['clean'], () =>
    gulp.src(paths.allSrcJs)
        .pipe(babel({
          presets: ['es2015'],
        }))
        .pipe(gulp.dest(paths.libDir)),
);

gulp.task('build', ['lint', 'clean', 'transpile', 'commonjs'], () =>
  gulp.src(paths.allSrcJs)
    .pipe(babel())
    .pipe(gulp.dest(paths.libDir)),
);

gulp.task('test', ['build'], () =>
  gulp.src(paths.allLibTests)
    .pipe(mocha()),
);

gulp.task('main', ['build'], () =>
  gulp.src(paths.clientEntryPoint)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.distDir)),
);

gulp.task('watch', () => {
  gulp.watch(paths.allSrcJs, ['main']);
});

gulp.task('default', ['watch', 'main']);
