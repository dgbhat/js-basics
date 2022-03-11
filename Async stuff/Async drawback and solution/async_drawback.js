let bodyText = '<p>Nukes are ready.</br> Calling agent to deploy in 3,2,1 ..</p>'
document.body.innerHTML = bodyText;

const readyNukes = [];
function deploy() {
    // deploying will take 3 sec
    setTimeout(() => {
        readyNukes.push('Nuke1', 'Nuke2', 'Nuke3');
        bodyText += `deploying ${readyNukes} </br>`;
        document.body.innerHTML = bodyText;
    }, 3000);
}

function trigger() {
    // triggering will take 1 sec
    setTimeout(() => {
        bodyText += `<p>All nukes are deployed. Launching >>  ***Boom*** </p>`;
        document.body.innerHTML = bodyText;
    }, 1000);
}

deploy();
trigger();

/* Asynchronous program's drawback
Trigger is pulled without waiting for deploy to complete, that is bcs prior takes less time

Output ->
Nukes are ready.
Calling agent to deploy in 3,2,1 ..
All nukes are deployed. Triggered >> ***Boom***
deploying Nuke1
deploying Nuke2
deploying Nuke3
* */

/*
* Now lets resolve this with help of 3 different ways
* 1. Callbacks
* 2. Promises
* 3. async/await
* */