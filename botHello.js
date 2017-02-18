const builder = require('botbuilder');

const connector = new builder.ConsoleConnector().listen();
const bot = new builder.UniversalBot(connector);

bot.dialog('/', [ 
    session => 
        builder.Prompts.text(session, "Hi. What's your name/"),
    (session, results) => 
        session.send(`hello ${results.response}`)
]);
