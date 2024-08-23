const UserService = require("../services/user-service");

const userService = new  UserService();

const create = async(req,res)=>{
    try {
        const response = await userService.create({
            email:req.body.email,
            password:req.body.password
        }); 
        return res.status(201).json({
            data:response,
            err:{},
            success:true,
            message:"successfully created a new user"
        })

    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            data:[],
            err:error.explanation,
            success:false,
            meassage:error.meassage
        })
        
    }
}

const signIn = async (req, res) => {
  try {
    const response = await userService.signIn(req.body.email, req.body.password);
    return res.status(200).json({
      data: response,
      err: null,
      success: true,
      message: 'Sign in successful',
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({
        data: {},
        err: error.explanation || 'An unexpected error occurred',
        success: false,
        message: error.message || 'Sign in failed',
    });
    
  }
};

const isAuthenticated = async (req,res)=>{
    try {
        const token = await req.headers['x-access-token'];
        const response = await  userService.isAuthenticated(token);
        return res.status(200).json({
            data:response,
            err:{},
            success:true,
            message:"user is authenticated and token is valid"
        });        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:[],
            err:error,
            success:false,
            meassage:"something went wrong while signing In"
        })
        
    }
}

const isAdmin = async (req,res)=>{
    try {
        const response =await userService.isAdmin(req.body.id);
        return res.status(200).json({
            data:response,
            err:{},
            success:true,
            message:"Successfully fetched whether useer is admin or not"
        });        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:[],
            err:error,
            success:false,
            meassage:"something went wrong"
        })
        
    }
}



module.exports={
    create,
    signIn,
    isAuthenticated,
    isAdmin
}