const sharp = require('sharp');
const {width, INPUT_DIRECTORY, OUTPUT_DIRECTORY} = require("./config");

const convertImage = async (fileName) => await sharp(`${INPUT_DIRECTORY}/${fileName}`)
    .resize(width)
    .toFile(`${OUTPUT_DIRECTORY}/${fileName}`)
    .catch(err => console.error(`${err}: ${INPUT_DIRECTORY}/${fileName}`));


module.exports = {
    convertImage
}