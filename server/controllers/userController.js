import UserInfo from "../models/userModel";
import TokenAuth from "../helpers/TokenAuth";
import bcrypt from "bcrypt";

class UserController {

    static signinUser = async (req, res) => {

       

        const { email, password } = req.body;


        const user = await UserInfo.findOne({ email: email});

        if (!user) {
            return res.status(404).json({
                status: 404,
                message: "user not exist"

            })
        }

        if(bcrypt.compareSync(password,user.password)){

            const token = TokenAuth.tokenGenerator({
                id: user._id,
                email: user.email,
                status: user.status,
                role: user.role
            })
            return res.status(200).json({
                status: 200,
                message: "Success login",
                token:token,
                data: user
            })
        }

        return res.status(404).json({
            status: 404,
            message: "Password is incorrect, Please try again.."

        })

    }
    //function to register users /signup

    static signupUser = async (req, res) => {
        const saltRound =10;
        console.log("yup")
        const hashPassword = bcrypt.hashSync(req.body.password,saltRound);
        console.log(hashPassword)
        req.body.password= hashPassword;
        
        const user = await UserInfo.create(req.body);

        if (!user) {
            return res.status(400).json({
                status: 400,
                message: "failed to register"
            })
        }

        return res.status(200).json({
            statu: 200,
            message: "success",
            data: user
        })
    }

    

    static getAllMentors = async (req, res) => {
        const users = await UserInfo.find({role:"mentor"});

        if (!users) {
            return res.status(404).json({
                status: 404,
                message: "failed to get all users"
            })
        }

        return res.status(200).json({
            status: 200,
            message: "success",
            dat: users
        })
    }

    static getAllUsers = async (req, res) => {
        const users = await UserInfo.find();

        if (!users) {
            return res.status(404).json({
                status: 404,
                message: "failed to get all users"
            })
        }

        return res.status(200).json({
            status: 200,
            message: "success",
            dat: users
        })
    }

    static getOneUser = async (req, res) => {
        const user = await UserInfo.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                status: 404,
                message: "user not found"
            })
        }

        return res.status(200).json({
            status: 200,
            message: "Success",
            data: user
        })

    }

      //update role informations of user
      static updateOneUserRole = async (req, res) => {

        const data = await UserInfo.findById(req.params.id);
       let role ;

       if(data.role=="user")
       role="mentor";
       else
       role= "user";

        const user = await UserInfo.findByIdAndUpdate(req.params.id,{role:role});
        if (!user) {
            return res.status(404).json({
                status: 404,
                message: "user not found"
            })
        }

        const updateUser = await UserInfo.findById(req.params.id);
        return res.status(200).json({
            status: 200,
            message: "Success",
            data: updateUser
        })

    }


    //update all informations of user
    static updateOneUser = async (req, res) => {
        const user = await UserInfo.findByIdAndUpdate(req.params.id, req.body);
        if (!user) {
            return res.status(404).json({
                status: 404,
                message: "user not found"
            })
        }

        const updateUser = await UserInfo.findById(req.params.id);
        return res.status(200).json({
            status: 200,
            message: "Success",
            data: updateUser
        })

    }



    static deleteOneUser = async (req, res) => {
        const user = await UserInfo.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({
                status: 404,
                message: "user not found"
            })
        }

        return res.status(200).json({
            status: 200,
            message: "Success deleted",
            data: user
        })

    }




}

export default UserController;