const express = require('express')
const router = express.Router()
ejs = require('ejs')
const Product = require('./product')

router.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        ejs.renderFile(
            __dirname + '/list_product.ejs',
            { products },
            (err, data) => {
                if (err) {
                    res.status(500).json({ message: err.message })
                } else {
                    res.send(data)
                }
            }
        )
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.delete('/delete', async (req, res) => {
    try {
        const { buttonValue } = req.body
        await Product.findByIdAndDelete(buttonValue)

        res.status(201).json({
            message: 'Produit Supprimer'
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router
