
import { omit } from "lodash";
import sequelize_instance from "../../models/index";
import log from "../../funct/logger";
import { generateUUID } from "../../funct/generateId"
import { hashPassword } from "../../funct/password";
import axios from "axios";
const ConsumerKey = process.env.ConsumerKey
const ConsumerSecret = process.env.ConsumerSecret
const BusinessShortCode = process.env.BusinessShortCode
const Timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3)
const Password = Buffer.from(`${BusinessShortCode}${ConsumerSecret}${Timestamp}`).toString('base64')

class PaymentService {
    static MpesaExpress = async (phone: string, amount: number, transactionDesc: string, token: string) => {
        try {
            axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
                // "BusinessShortCode": 174379,
                // "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQwMzE4MTgzMTI5",
                // "Timestamp": "20240318175225",
                // "TransactionType": "CustomerPayBillOnline",
                // "Amount": amount,
                // "PartyA": phone,
                // "PartyB": 174379,
                // "PhoneNumber": phone,
                // "CallBackURL": "https://4115-102-0-6-134.ngrok-free.app", 
                // "AccountReference": "Agriflexpay",
                // "TransactionDesc": "Payment of Farming products" 
                "BusinessShortCode": 174379,
                "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQwMzE4MTgzMTI5",
                "Timestamp": "20240318183129",
                "TransactionType": "CustomerPayBillOnline",
                "Amount": 1,
                "PartyA": phone,
                "PartyB": 174379,
                "PhoneNumber": phone,
                "CallBackURL": "https://4115-102-0-6-134.ngrok-free.app",
                "AccountReference": "CompanyXLTD",
                "TransactionDesc": "Payment of X" 
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(responce=>{
                console.log(responce.data)
                return responce.data
            })
        }
        catch (error) {
            log.error(error)
            return error
        }
    }

static  gethMpesaAuth =async() => {
    const auth = Buffer.from(`${ConsumerKey}:${ConsumerSecret}`).toString('base64')
    const token = await axios.get(
        'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
        {
            headers: {
                Authorization: `Basic ${auth}`
            }
        }
    ).then((response) => {
      
        return  response.data.access_token
    }
    ).catch((err) => {
        console.log(err)
        return err
    })
  return token

}
}
export default PaymentService