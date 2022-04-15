var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", 'puzzle', false); // false for synchronous request
xmlHttp.send(null);
window.waffle = JSON.parse(xmlHttp.responseText);


