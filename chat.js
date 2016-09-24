var socket;


function antwort(message){
  var para = $("<p>"+message+"</p>");
  $("#Antwort").append(para);
}


function connect(url){

socket = new WebSocket(url);

// callback-Funktion wird gerufen, wenn die Verbindung erfolgreich aufgebaut werden konnte
socket.onopen = function () {
antwort("Status: Verbindung wurde erfolgreich aufgebaut");
};

// callback-Funktion wird gerufen, wenn eine neue Websocket-Nachricht eintrifft
socket.onmessage = function (messageEvent) {
    antwort("Server: "+messageEvent.data);
};

// callback-Funktion wird gerufen, wenn eine Fehler auftritt
socket.onerror = function (errorEvent) {
  antwort("Error: Die Verbindung wurde unerwartet geschlossen");
};

socket.onclose = function (closeEvent) {
    antwort('Status: Die Verbindung wurde geschlossen --- Code: ' + closeEvent.code + ' --- Grund: ' + closeEvent.reason);
};
};




$("#connectButton").click(function() {
  connect($("#webURL").val());
});

$("#Send").click(function (){
  var msg = $("#Message").val();
  antwort("Ich: "+ msg);
socket.send(msg);
});
