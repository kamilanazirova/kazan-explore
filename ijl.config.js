const pkg = require('./package')

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
    }
  },
  /* use https://kc.admin.inno-js.ru/ to create config, navigations and features */
  navigations: {
    "kazan-explore.master": "/kazan-explore",
    "kazan-explore.places": "/places",
    "kazan-explore.transport": "/transport",
    "kazan-explore.sport": "/sport",
    "kazan-explore.history": "/history",
    "kazan-explore.education": "/education",
    "kazan-explore.entrance": "/entrance",
    "kazan-explore.registration": "/registration"
  },
  features: {
    'kazan-explore': {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    key: 'value'
  }
}
