// DO NOT EDIT THIS FILE
// This file is automatically generated from the webgme-setup-tool.
"use strict";

var config = require("webgme/config/config.default"),
  validateConfig = require("webgme/config/validator"); 

config.visualization.panelPaths.push(__dirname + "/../src/visualizers/panel");
// visualizer descriptors
config.visualization.visualizerDescriptors.push(
  __dirname + "/../src/visualizers/Visualizers.json"
);
// Add requirejs paths
config.requirejsPaths = {
  panels: "./src/visualizers/panel",
  widgets: "./src/visualizers/widget",
  "petri-net": "./src/common",
};

config.plugin.basePaths.push(__dirname + "/../src/plugins");
config.seedProjects.basePaths.push("src/seeds");

config.mongo.uri = "mongodb://127.0.0.1:27017/petri_net";
validateConfig(config);
module.exports = config;
