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

deploy()
    .then((message) => {
        trigger();
    })
    .catch((err) => {
        console.log(err);
    })

/*
* Now lets resolve the async issue with help of 3 different ways
* 1. Callbacks
* 2. Promises <--HERE
* 3. async/await
* */

/*
* Using Promises inorder to make trigger() execute after deploy() is completed!

Output ->
Nukes are ready.
Calling agent to deploy in 3,2,1 ..
deploying Nuke1
deploying Nuke2
deploying Nuke3
All nukes are deployed. Launched >> ***Boom***
* */

// ABOUT PROMISE --------------
/*
* Error check to reject is imp in Promise while demonstrating
* */

/*
* 1. Promise Object creation --> new Promise(((resolve, reject) => {}
* 2. Callback parameters in promise --> resolve() and reject()
* 3. Handlers for promise --> .then() and .catch()
* */