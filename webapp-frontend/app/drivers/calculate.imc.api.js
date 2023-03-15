function createRequest() {
    const req = new XMLHttpRequest();

    return req;
}

function prepareAndFireRequest(person, req, callback) {
    req.open("POST", "http://localhost:3000/imc/calculate");
    req.setRequestHeader("Content-Type", "application/json");
    req.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                callback(JSON.parse(this.responseText));
            }
        }
    }.bind(req);
    req.send(JSON.stringify({
        "height": person.height,
        "weight": person.weight
    }));
}

export function calculateImcAPI(person, callback) {
    const req = createRequest();
    prepareAndFireRequest(person, req, callback);
}