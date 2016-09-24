var socket;

function connect(url){

socket = new WebSocket(url);

// callback-Funktion wird gerufen, wenn die Verbindung erfolgreich aufgebaut werden konnte
socket.onopen = function () {
    console.log("Verbindung wurde erfolgreich aufgebaut");
};

// callback-Funktion wird gerufen, wenn eine neue Websocket-Nachricht eintrifft
socket.onmessage = function (messageEvent) {
    console.log(messageEvent.data);
};

// callback-Funktion wird gerufen, wenn eine Fehler auftritt
socket.onerror = function (errorEvent) {
    console.log("Error! Die Verbindung wurde unerwartet geschlossen");
};

socket.onclose = function (closeEvent) {
    console.log('Die Verbindung wurde geschlossen --- Code: ' + closeEvent.code + ' --- Grund: ' + closeEvent.reason);
};
};




$("#connectButton").click(function() {
  connect($("#webURL").val());
});

$("#Send").click(function (){
socket.send($("#Message").val());
});
