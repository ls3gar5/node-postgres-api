import Product from "../models/Product";
import '../config/log';

export async function createProduct(req, res) {

    try {
        const { name, category, price, imgUrl } = req.body;

        let newProduct = await Product.create({
            name: name,
            category: category,
            price, price,
            imgUrl: imgUrl
        });

        if (newProduct) {
            res.json({
                data: newProduct
            });
        }

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: 'Something goes wrong'
        });
    }
}

export async function getProducts(req, res) {

    try {
        let products = await Product.find();
        if (products) {
            res.json({
                products
            });
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: 'Something goes wrong id mismacth'
        })
    }

}

export async function getProductById(req, res) {

    const { productId } = req.params;

    try {
        let prodictById = await Product.findById(productId, { "_id": 1, "name": 1 }); //6221f9b6c0c77a7e898f2a4e
        if (prodictById) {
            winston.info('Mensaje Info');
            winston.error('Error');
            res.json({
                data: prodictById
            })
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: 'Something goes wrong id mismacth'
        })
    }
}

export async function updateProductById(req, res) {

    const { productid, name, category, price, imgUrl } = req.body;

    try {

        let productUpdated = await Product.findByIdAndUpdate(productid,
            {
                name,
                category,
                price,
                imgUrl
            }, {new: true});

        if (!productUpdated) {
           return res.status(404).json({ message: 'Not Found' });
        }

        return res.status(204).json(productUpdated);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong'
        });

    }
}


export function deleteProductById(req, res) {

    const { productId } = req.param;

    return res.json({
        message: 'get Products'
    });
}