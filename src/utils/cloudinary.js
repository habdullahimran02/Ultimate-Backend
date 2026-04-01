import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });


    const uploadOnCloudinary = async (localFilePath)=>{

        try
        {
            if (!localFilePath) return new Error("No file path provided");
            const response =  await cloudinary.uploader.upload(localFilePath,{
                resource_type: "auto",
            })
            // file has been `uploaded` and its `url` is returne
            console.log("file uploaded to Cloudinary successfully: ", response.url);
                return response.url;
        }
        
        catch
        {
            fs.unlinkSync(localFilePath);
            return new Error("Error uploading file to Cloudinary");
        }

    }
    
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
 

    
    console.log(autoCropUrl);    
})();