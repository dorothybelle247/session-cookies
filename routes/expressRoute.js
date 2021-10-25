// auth routes
// post routes
// dashboard
// home

const express = require('express')
const router = express.Router()

// @description    Login/LandingPage
// @route  GET/

router.get('/', (req, res) => {
    res.send('Login')
})


// @dashboard
router.get('/dashboard', (req, res) => {
    res.send('Dashboard')
})

module.exports = router