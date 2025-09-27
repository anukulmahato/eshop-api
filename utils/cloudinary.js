import cloudinary from "cloudinary";

//cloudinary config
cloudinary.v2.config({
    cloud_name: "dqm2c3om0",
    api_key: "433946938753738",
    api_secret: "lGJTo3VnBckm4z60c1F8KeXhy0w"
});


//file upload
export const cloudUpload = async(path) => {
   const data = await cloudinary.v2.uploader.upload(path);

   
   return data;
}