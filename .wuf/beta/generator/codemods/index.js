// Here we reuse codemods of non beta components
// only configure to output files in beta folder

module.exports = [
  {
    codemod: "../../../generator/codemods/stories-file.js",
    dist: "stories/index.js",
    description: "Add story to the stories file"
  },

  {
    codemod: "../../../generator/codemods/testkit-definitions.js",
    dist: ".wuf/beta/testkits/definitions.js",
    description: "Update testkit-definitions.js file"
  },

  {
    codemod: "../../../generator/codemods/testkit-exports.js",
    dist: "testkit/beta/protractor.js",
    description: "Add Protractor testkit export"
  },

  {
    codemod: "../../../generator/codemods/testkit-exports.js",
    dist: "testkit/beta/puppeteer.js",
    description: "Add Puppeteer testkit export"
  }
];
