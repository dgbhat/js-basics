let bodyText = '<p>Nukes are ready.</br> Calling agent to deploy in 3,2,1 ..</p>'
document.body.innerHTML = bodyText;

const readyNukes = [];
function deploy(callbackFn) {
    // deploying will take 3 sec
    setTimeout(() => {
        readyNukes.push('Nuke1', 'Nuke2', 'Nuke3');
        bodyText += `deploying ${readyNukes} </br>`;
        document.body.innerHTML = bodyText;
        callbackFn();
    }, 3000);
}

function trigger() {
    // triggering will take 1 sec
    setTimeout(() => {
        bodyText += `<p>All nukes are deployed. Launching >>  ***Boom*** </p>`;
        document.body.innerHTML = bodyText;
    }, 1000);
}

deploy(trigger);


/*
* Now lets resolve the async issue with help of 3 different ways
* 1. Callbacks <--HERE
* 2. Promises
* 3. async/await
* */

/*
* Using Callback fn inorder to make trigger() execute after deploy() is completed!

Output ->
Nukes are ready.
Calling agent to deploy in 3,2,1 ..
deploying Nuke1
deploying Nuke2
deploying Nuke3
All nukes are deployed. Launched >> ***Boom***
* */
