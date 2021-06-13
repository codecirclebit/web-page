const webpack = require('webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      CF_ENDPOINT: 'https://codeforces.com/api/user.info?handles=',
      CC_ENDPOINT:
        'https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/web-backend-vxvhh/service/web-page-backend/incoming_webhook/code-camp-get?handle=',
    }),
  ],
}
