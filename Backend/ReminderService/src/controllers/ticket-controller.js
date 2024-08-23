const TicketService =require('../services/email-service');

const create = async (req,res)=>{
    try {
        const response =await TicketService.createNotification(req.body);
        return res.status(201).json({
            success:true,
            err:{},   
            data:response,
            message:"Successfully registered an email reminder"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            err:error,
            data:[],
            message:"unable to  register an email reminder"
        })
    }
}

module.exports={
    create
}