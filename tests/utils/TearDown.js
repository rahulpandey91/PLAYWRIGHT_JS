const fs = require('fs');
const xml2js = require('xml2js');
const srcDir = './tests/utils';
const destDir = `./allure-results`

async function tearDownSetup() {
    console.log("Tearing down: ", process.env.testEnv);
    var parser = new xml2js.Parser();
    fs.readFile(srcDir + '/environment.xml', function (err, data) {
        parser.parseString(data, function (err, result) {
            var currentEnv = process.env.testEnv;
            result.qa.parameter[0].value[0] = currentEnv.toUpperCase();
            var builder = new xml2js.Builder();
            var xml = builder.buildObject(result);
            fs.writeFileSync(destDir + '/environment.xml', xml, function (err, data) {
            })
        })
    })

}
module.exports = tearDownSetup;