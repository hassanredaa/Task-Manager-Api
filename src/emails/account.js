const mailgun = require("mailgun-js");
const mg = mailgun({apiKey: process.env.APIKEY, domain: process.env.DOMAIN});


const sendWelcomeEmail = (email, name) =>{
    const data = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: email,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    };
    
    mg.messages().send(data, function (error, body) {
        //console.log(body);
    });
}

const sendCancelEmail = (email, name) =>{
    const data = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: email,
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. Let me know why you left`
    };
    
    mg.messages().send(data, function (error, body) {
        //console.log(body);
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}