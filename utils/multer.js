import multer from "multer";

//config storage
const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname);
    },
    destination: (req, file, cb) => {

      if(file.fieldname === "logo") {

          cb(null, "public/brands");
      }

      if(file.fieldname === "photo"){
        cb(null, "public/category")
      }
    }
});

// export storage
export default storage;