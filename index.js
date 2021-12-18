const {INPUT_DIRECTORY} = require("./config");
const {listOfFiles} = require("./files");
const {convertImage} = require("./convert");

const cliProgress = require('cli-progress');

// create new progress bar
const b1 = new cliProgress.SingleBar({
    format: 'CLI Progress |{bar}| {percentage}% || {value}/{total} Chunks',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true
});


listOfFiles(INPUT_DIRECTORY)
    .then(async files => {
        b1.start(files.length, 0);
        for(let i = 0; i < files.length; i++) {
            await convertImage(files[i].name)
            b1.update(i)
        }

        return files.length
    }).then(total => {
        // stop the bar
        b1.update(total)
        b1.stop();
    })
    .catch(err => console.error(err))