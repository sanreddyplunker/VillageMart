var webpack = require('webpack');
var path = require('path')

module.exports = {
    entry : './src/main.ts',
    output:{
        path:path.join(__dirname, '/src/dist'),
        filename:'app.bundle.js'
    },
    module:{ 
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
              },
              {
                test: /\.css$/,
                loaders: 'style-loader!css-loader'
              }
        ]
},
resolve:{
    extensions:['.js','.ts']
}
};