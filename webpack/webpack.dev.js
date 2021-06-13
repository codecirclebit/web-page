const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      CF_ENDPOINT: 'https://codeforces.com/api/user.info?handles=',
      CC_ENDPOINT:
        'https://webhooks.mongodb-realm.com/api/client/v2.0/app/db-jiqkf/service/code-camp/incoming_webhook/code-camp-get?handle=',
    }),
  ],
}
