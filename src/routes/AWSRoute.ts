import AWSController from '../controllers/AWSController';
import ExpressService from '../services/ExpressService';
import MulterService from '../services/MulterService';

// Get the express router instance.
const router = ExpressService.router;

// Get the multer memory storage instance.
const multer = MulterService.memoryStorage;

router.post('/s3/url', multer.fields([]), AWSController.s3Url);
router.post('/s3/upload', multer.single('file'), AWSController.s3Upload);
router.post('/s3/delete', multer.fields([]), AWSController.s3Delete);

export default router;
