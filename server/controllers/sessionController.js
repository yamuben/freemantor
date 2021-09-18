import SessionInfo from "../models/session";


class SessionController {


    static sessionRequest = async (req, res) => {
        console.log(req.user);
        req.body.user= req.user.id;
        const session = await SessionInfo.create(req.body);

        if (!session) {
            return res.statu(400).json({
                status: 400,
                message: "failed to make request"
            })
        }

        return res.status(200).json({
            statu: 200,
            message: "success",
            data: session
        })
    }

    static getAllSessions = async (req, res) => {
        const sessions = await SessionInfo.find();

        if (!sessions) {
            return res.status(404).json({
                status: 404,
                message: "failed to get all sessions"
            })
        }

        return res.status(200).json({
            status: 200,
            message: "success",
            data: sessions
        })
    }
    static getAllSessionsUser = async (req, res) => {
        const id = req.params.id;
        const sessions = await SessionInfo.find({user:id});

        if (!sessions) {
            return res.status(404).json({
                status: 404,
                message: "failed to get all sessions"
            })
        }

        return res.status(200).json({
            status: 200,
            message: "success",
            data: sessions
        })
    }

    static getOneSession = async (req, res) => {
        const session = await SessionInfo.findById(req.params.id);
        if (!session) {
            return res.status(404).json({
                status: 404,
                message: "session not found"
            })
        }

        return res.status(200).json({
            status:200,
            message:"Success",
            data: session
        })

    }

    static acceptOneSession = async (req, res) => {
        const session = await SessionInfo.findByIdAndUpdate(req.params.id,{status:"accept"});
        if (!session) {
            return res.status(404).json({
                status: 404,
                message: "session not found"
            })
        }

        const updatesession = await SessionInfo.findById(req.params.id);
        return res.status(200).json({
            status:200,
            message:"Success",
            data: updatesession
        })

    }
    static declineOneSession = async (req, res) => {
        const session = await SessionInfo.findByIdAndUpdate(req.params.id,{status:"decline"});
        if (!session) {
            return res.status(404).json({
                status: 404,
                message: "session not found"
            })
        }

        const updatesession = await SessionInfo.findById(req.params.id);
        return res.status(200).json({
            status:200,
            message:"Success",
            data: updatesession
        })

    }


    static updateOneSession = async (req, res) => {
        const session = await SessionInfo.findByIdAndUpdate(req.params.id,req.body);
        if (!session) {
            return res.status(404).json({
                status: 404,
                message: "session not found"
            })
        }

        const updatesession = await SessionInfo.findById(req.params.id);
        return res.status(200).json({
            status:200,
            message:"Success",
            data: updatesession
        })

    }


    static deleteOneSession = async (req, res) => {
        const session = await SessionInfo.findByIdAndDelete(req.params.id);
        if (!session) {
            return res.status(404).json({
                status: 404,
                message: "session not found"
            })
        }

        return res.status(200).json({
            status:200,
            message:"Success deleted",
            data: session
        })

    }




}

export default SessionController; 