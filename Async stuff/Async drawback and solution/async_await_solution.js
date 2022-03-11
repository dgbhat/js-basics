let bodyText = '<p>Nukes are ready.</br> Calling agent to deploy in 3,2,1 ..</p>'
document.body.innerHTML = bodyText;

const readyNukes = [];

function deploy() {
    // deploying will take 3 sec
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            readyNukes.push('Nuke1', 'Nuke2', 'Nuke3');
            bodyText += `deploying ${readyNukes} </br>`;
            document.body.innerHTML = bodyText;
            const err = false
            if (!err)
                resolve('Success');
            else
                reject('Error')
        }, 3000);
    }))
}

function trigger() {
    // triggering will take 1 sec
    setTimeout(() => {
        bodyText += `<p>All nukes are deployed. Launching >>  ***Boom*** </p>`;
        document.body.innerHTML = bodyText;
    }, 1000);
}

// console.log(deploy()) // op-> Promise <pending>

async function init() {
    await deploy();
    trigger();
}

init();

/*
* Now lets resolve the async issue with help of 3 different ways
* 1. Callbacks
* 2. Promises
* 3. async/await <--HERE
* */

/*
* Using async/await inorder to make trigger() execute after deploy() is completed!

Output ->
Nukes are ready.
Calling agent to deploy in 3,2,1 ..
deploying Nuke1
deploying Nuke2
deploying Nuke3
All nukes are deployed. Launched >> ***Boom***
* */

// ABOUT ASYNC/AWAIT -------------------

/*
* 1. Promise Object creation --> new Promise(((resolve, reject) => {}
* 2. Callback parameters in promise --> resolve() and reject()
* 3. Handlers for promise --> async/await
* */

/*
* 1. async/await are only HANDLERS for promise.
* 2. They work only when a Promise is returned
* 3. await needs a wrapper function to be async
* */