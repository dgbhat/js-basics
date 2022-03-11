const fs = require('fs')

var counter = 0;
async function run(){
    await setTimeout(() => {
        writeToFS('This is the raw data for counter: ' + counter++ + '\n');
    }, 500);
}

async function writeToFS(data) {
    console.log(data);
    fs.appendFileSync('./Jobstore_stats.txt', data);
}

async function init(){
    await setInterval(run, 100);
}

init();