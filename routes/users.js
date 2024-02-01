const express = require('express')
const router = express.Router()




router.get('/', (req, res) =>{
    res.send('User')
})

router.get('/new', (req, res) =>{
    res.send('New User')
})

router.get('/', (req, res) =>{
    res.send("Create User")
})


router.route('/:id')
.get((req, res) =>{
    res.send(`Get user with ID ${req.params.id}`)
    console.log(req.user)
})
.put((req, res) =>{
    res.send(`Update user with ID ${req.params.id}`)
})
.delete((req, res) =>{
    res.send(`Delete user with ID ${req.params.id}`)
})
 
// The code below is the same as the code above but with different methods
router.get('/:id', (req, res) =>{
    res.send(`Get user with ID ${req.params.id}`)
})

const users = [{name: 'Joe'}, {name:'Kwesi'}]
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router