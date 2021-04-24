
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['nTYjxJ5fEqcmLQHmhBe6Hg'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  