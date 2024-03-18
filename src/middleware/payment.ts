import axios from "axios";
import { NextFunction, Response, Request } from "express";

const ConsumerKey = process.env.ConsumerKey
const ConsumerSecret = process.env.ConsumerSecret
export const gethMpesaAuth = async (req: Request, res: Response, next: NextFunction) => {
    const auth = Buffer.from(`${ConsumerKey}:${ConsumerSecret}`).toString('base64')
    await axios.get(
        'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
        {
            headers: {
                Authorization: `Basic ${auth}`
            }
        }
    ).then((response) => {
        res.locals.token = response.data.access_token
        return next(
            req,
        )
    }
    ).catch((err) => {
        console.log(err)
        res.status(500).json({ message: 'Error in getting access token' })
    })
  

}