const { fullConfig } = require("@playwright/test");
const dotenv = require("dotenv").config({ path: `config/env/.env.${process.env.testEnv}`, override: true });


async function GlobalSetup(fullConfig) {
    console.log("Test environment running: ", process.env.testEnv);

};
module.exports = GlobalSetup;