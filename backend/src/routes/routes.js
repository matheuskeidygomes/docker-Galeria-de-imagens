import { Router } from 'express';                                   
import * as ApiController from '../controllers/ApiController.js';     
import multer from 'multer';                              

const upload = multer({
    dest: './temporaryfiles',                
    fileFilter: (req, file, cb) => {          

        const allowed = [ 'image/jpg', 'image/jpeg', 'image/png' ];
        cb(null, allowed.includes ( file.mimetype )); 
    },
    limits: { fieldSize: 100000000000 }         
});

const router = Router(); 
 
router.get('/images', ApiController.GetAll);    
router.get('/images/:id', ApiController.GetOne); 
router.delete('/images/:id', ApiController.Delete);             
router.post('/upload', upload.single('file'), ApiController.uploadFile); 

export default router;      

