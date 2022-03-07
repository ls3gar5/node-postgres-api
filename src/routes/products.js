import { Router } from "express";
import * as productCtrl from "../controllers/product";

const router = Router();

router.get('/', productCtrl.getProducts);
router.post('/', productCtrl.createProduct);
router.get('/:productId', productCtrl.getProductById);
router.put('/', productCtrl.updateProductById);
router.delete('/:productId', productCtrl.deleteProductById);

export default router;