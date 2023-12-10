const path = require( 'path' );module.exports = {
    context: __dirname,
   
    entry: {
     index: './src/app.js',
    },
   
    output: {
     path: path.resolve( __dirname, 'dist' ),
     filename: 'index.js',
    }, module: {
     rules: [
      {
       test: /\.js$/,
       use: 'babel-loader',
      }
     ]
    },
    plugins: []
   };