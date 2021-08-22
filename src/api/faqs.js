const express  = require('express');

const router = express.Router();

//read all
router.get('/' , (req, res, next) => {
    res.json({
        message: 'READ ONE',
    });
})

//read one
router.get('/:id', (req, res, next) => {
    res.json(
        {
            message: 'Hello READ ALL',
        });
})

//create one
router.post('/', (req, res, next) => {
        res.json({
            message: 'POST one',
        })
    });

//update one
router.put('/:id', (req, res, next) => {
        res.json({
            message: "Hello UPDATE one"
        })
    });
    
//delete one
router.delete('/:id', (req, res, next)=>{
    res.json({
        message:"Hello DELETE one"
    })
})    

module.exports('faqs');