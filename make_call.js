const accountSid = "AC1a49525455b1d17d064aa5f34a7e4764";
const authToken = "4628234bc03cef7a1258687794220a45";
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+918767885028',
         from: '+918767885028'
       })
      .then(call => console.log(" Hello ",call.sid));
