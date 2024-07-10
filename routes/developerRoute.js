const express = require('express')
const Developer = require('../../models/developerModel')
const {createDeveloper,getSingleDeveloper} =require ('../../controller/developerController')
const {getDeveloper} =require ('../../controller/developerController')
const router = express.Router()

//get
router.get('/', getDeveloper)

//single get
router.get('/:id', getSingleDeveloper)

//post 
router.post('/', createDeveloper)

//delete
router.delete('/:id', (req, res)=>{
    res.send({massage:"delete"})
})

//update
router.patch('/:id', (req, res)=>{
    res.send({massage:"update"})
})


router.get('/*', (req, res)=>{
    res.status(400).send ('400 not found')
} )

module.exports = router