const express=require('express');
const router=express.Router();
const marketController=require('../controllers/market.controller');
router.get('/',marketController.index);
router.get('/productos/:id',marketController.getProductById);
router.post('/productos',marketController.createProduct);
router.put('/productos/:id',marketController.updateProduct);
router.delete('/productos/:id',marketController.deleteProduct);
module.exports=router;