import { v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name:env.process.CLOUDINARY_CLOUD_NAME,
    api_key:env.process.CLOUDINARY_API_KEY,
    api_secret:CLOUDINARY_API_SECRET
})