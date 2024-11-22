const express = require("express");
const yaml = require("js-yaml");
const fs = require("fs/promises");
const router = express.Router();

router.post("/config", async (req, res) => {
  try {
    // Get JSON config from request body
    const jsonConfig = req.body;

    // Convert JSON to YAML
    const yamlConfig = yaml.dump(jsonConfig, {
      indent: 2,
      lineWidth: -1, // Disable line wrapping
      noRefs: true, // Don't output YAML references
      noCompatMode: true, // Use clean YAML output
    });

    // Write YAML to config.yaml file
    await fs.writeFile(
      `data_folders/${req.query.username}/config.yaml`,
      yamlConfig,
      "utf8"
    );

    res.status(200).json({
      message: "Config successfully converted and saved to config.yaml",
      yaml: yamlConfig,
    });
  } catch (error) {
    console.error("Error converting config:", error);
    res.status(500).json({
      error: "Failed to convert and save config",
      details: error.message,
    });
  }
});

module.exports = router;
