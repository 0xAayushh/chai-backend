import { v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name:env.process.CLOUDINARY_CLOUD_NAME,
    api_key:env.process.CLOUDINARY_API_KEY,
    api_secret:CLOUDINARY_API_SECRET
})

const uploadOnCloudinary =async (localFilePath) =>{
    try{
        if(!localFilePath) return null

         const response =await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        console.log("file upload on cloudinary",response.url)
        return response
    }
    catch(error){
        fs.unlinkSync(localFilePath) //remove the local saved temp file
        return null 

    }
}

// cloudinary.v2.uploader.upload("/home/my_image.jpg", {upload_preset: "my_preset"}, (error, result)=>{
//   console.log(result, error);
// });