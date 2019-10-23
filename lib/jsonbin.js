//=============================================================================
// create/get/update data in jsonbin.io
//=============================================================================

function createBin(apiKey, collectionId, json, cb) {
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        cb(req.responseText);
      }
    };

    req.open("POST", "https://api.jsonbin.io/b", true);
    req.setRequestHeader("Content-type", "application/json");
    req.setRequestHeader("secret-key", apiKey);
    req.setRequestHeader("collection-id", collectionId);
    req.send(json);
}

function getBin(binId, apiKey, cb) {
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        console.log('JsonBin response: ' + req.responseText);
        cb(req.responseText);
      }
    };

    req.open("GET", "https://api.jsonbin.io/b/" + binId, true);
    req.setRequestHeader("secret-key", apiKey);
    req.send();
}

function updateBin(binId, apiKey, json, cb) {
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        cb(req.responseText);
      }
    };

    req.open("PUT", "https://api.jsonbin.io/b/" + binId, true);
    req.setRequestHeader("Content-type", "application/json");
    req.setRequestHeader("secret-key", apiKey);
    req.setRequestHeader("versioning", "false");
    req.send(json);
}
