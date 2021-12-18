const {readdir} = require('fs/promises');

const listOfFiles = async path => (await readdir(path, {withFileTypes: true})
    .catch(err => console.error(err)))
    .filter(item => item.isFile());

module.exports = {
    listOfFiles
}