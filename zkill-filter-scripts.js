function runKillstream() {
    console.log("Starting killstream, please wait")
    var npc = document.getElementById("npc").value;
    var solo = document.getElementById("solo").value;
    var minIsk = document.getElementById("min-isk").value;
    var maxIsk = document.getElementById("max-isk").value;
    alert(minIsk)
    var sub = {"action":"sub","channel":"killstream"}
    websocket = new WebSocket("wss://zkillboard.com/websocket/")

    websocket.onopen = function (event) {
        console.log("Connecting to websocket...")
        websocket.send(JSON.stringify(sub)); 
    }

    websocket.onmessage = function (event) {
        console.log("Grabbing kill report");
        console.log(event.data);
        addKillReport(event.data);
    }

// https://www.reddit.com/r/Eve/comments/84ebp7/zkillboard_url_tricks_how_to_advanced_search/
// determine pure npc kills by npc:true and no players involved.
}

function addKillReport(data){
    var report = document.createElement("p");
    report.setAttribute("class", "killreport")
    report.innerText = data;
    document.getElementById("killstream").appendChild(report);
}
