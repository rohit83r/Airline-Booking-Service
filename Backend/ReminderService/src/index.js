const express=require('express');
const bodyParser = require('body-parser');

const {PORT,REMINDER_BINDING_KEY} =require('./config/serverConfig')
const {createChannel,subscribeMessage}=require('./utils/messageQueue');
const TicketController = require('./controllers/ticket-controller');
const jobs = require('./utils/job')

const EMAILSERVICE =require('./services/email-service');

const setUpStartServer =async ()=>{
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    const channel= await createChannel();
    subscribeMessage(channel,EMAILSERVICE.subscribeEvents,
        REMINDER_BINDING_KEY
    );


    app.post('/api/v1/tickets',TicketController.create);
    app.listen(PORT ,()=>{
        console.log(`Server Started at:${PORT}`);
        // jobs();
       
    })

}

setUpStartServer();