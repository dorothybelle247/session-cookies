// auth routes
// post routes
// dashboard
// home

const express = require('express')
const router = express.Router()

// @description    Login/LandingPage
// @route  GET/

router.get('/', (req, res) => {
    res.render('login', {
        layout: "loggin"
    })
})


// @dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = router