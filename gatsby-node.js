const path = require(`path`);
const kebabCase = require(`lodash/kebabCase`);

// load all content items
const data = require(`./src/data/content.json`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const template = path.resolve(`src/templates/itemTemplate.tsx`);

  // create page for every item
  data.forEach(item => {
    createPage({
      path: kebabCase(item.name),
      component: template,
      context: item,
    });
  });
};
