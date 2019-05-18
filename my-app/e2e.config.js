
module.exports = {
  params: {
    projects: {
      'my-app': {}
    }
  },
  lookupConfig({
    config,
    tag
  }) {
    return config.params.projects[tag.project];
  },
};