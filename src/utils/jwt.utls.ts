import jwt from 'jsonwebtoken';


const privateKey = process.env.PRIVATE_KEY
const publicKey = process.env.PUBLIC_KEY

export const singToken = async (payload: Object, options?: jwt.SignOptions | undefined) => {
    return jwt.sign(
        payload,
        privateKey,
        {
            ...(options && options),
            algorithm: "RS256"
        }
    );
}

export const verifyToken = async (token: string) => {
    try {
        const decoded: any = await jwt.verify(token, publicKey);

        return (
            {
                valid: true,
                expired: false,
                decoded
            }
        )
    } catch (e: any) {
        return (
            {
                valid: false,
                expired: e.message === "jwt expired",
                decoded: null
            }
        )
    }
}