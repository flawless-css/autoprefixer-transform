# Autoprefixer-transform [[![Build Status](https://img.shields.io/travis/hocss/autoprefixer-transform/master.svg?style=flat-square)](https://travis-ci.org/hocss/autoprefixer-transform)](https://travis-ci.org/hocss/autoprefixer-transform)

> Autoprefixer transform stream

```
npm i -D autoprefixer-transform
```

```
import fs from 'fs'
import autoprefixer from 'autoprefixer-transform'

fs.createReadStream( 'styles.css' )
  .pipe( autoprefixer({ browsers: [ 'last 2 versions' ] } ) )
  .pipe( fs.createWriteStream( 'main.css' ) )
```
