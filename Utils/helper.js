import multer from 'multer';
import path from "path"
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
})

// Check for file type
const fileFilter = (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);
    
    if (extname && mimeType) {
      return cb(null, true);
    } else {
      cb('Error: Images Only!');
    }
  };
  
  // Set multer upload configuration
  const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 },  // Limit: 10MB
    fileFilter: fileFilter
  });
  

export default upload;