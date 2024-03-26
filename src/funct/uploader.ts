import { ifError } from 'assert';
import { v2 as cloudinary } from 'cloudinary';
import log from './logger';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

type upload_type = {
    file: any,
}


export const uploader = async ({ file }: upload_type) => {

    return cloudinary.uploader.upload(file,
        { public_id: file.split('/')?.[2] ?? "" },
        (error: any, result: any) => {
            if (error) {
                log.error(error);
            }

            return {
                secure_url: result?.secure_url,
                image_url: result?.url
            };
        });
}