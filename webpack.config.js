module.exports = {
  entry : './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve:{
    root: __dirname,
    alias:{
    },
    extensions: ['','.js','.jsx']
  },
  module:{
    loaders:[
      {
        loader:'babel-loader', //use babel-loader as webpack cannot process jsx
        query:{
          presets: ['react','es2015','stage-0'] //tells to compile code for react and es2015
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
