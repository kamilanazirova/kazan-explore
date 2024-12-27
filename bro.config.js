const pkg = require("./package");

module.exports = {
  apiPath: "stubs/api",
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`,
    },
  },
  /* use https://admin.bro-js.ru/ to create config, navigations and features */
  navigations: {
    "kazan-explore.master": "/kazan-explore",
    "kazan-explore.places": "/interesting-places",
    "kazan-explore.transport": "/transport-and-infrastructure",
    "kazan-explore.sport": "/sport-and-entertainment",
    "kazan-explore.history": "/history-and-culture",
    "kazan-explore.education": "/science-and-education",
    "kazan-explore.entrance": "/entrance",
    "kazan-explore.registration": "/registration",
    "kazan-explore.recover": "/recover",
    "kazan-explore.trip.number": "/transport-and-infrastructure/trip/:id",
    "kazan-explore.profile": "/profile/:userId"
  },
  features: {
    "kazan-explore": {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    "kazan-explore.api": "/api",
    "kazan-explore.users.api": "https://antd-table-v2-backend.onrender.com/api"
  },
};
