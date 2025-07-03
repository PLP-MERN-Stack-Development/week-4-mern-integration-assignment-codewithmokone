const multer = require('multer');

// Set storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now()) 
    }
});

const upload = multer({ storage: storage });

module.exports = upload;