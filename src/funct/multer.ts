import { Request } from "express";
import multer from "multer";
import path from "path"
const Path = path.join(__dirname, '../../uploads');
type params = {
    req: Request,
    file: any,
    cb: () => {}
}


export const storage = multer.diskStorage({
    destination: (req: Request, file: any, cb: any) => {
        cb(null, Path); // Destination folder for uploaded images
    },
    filename: (req: Request, file: any, cb: any) => {
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext); // Unique filename for each image
    },
});
