const router = require('express').Router();

router.get('/getSportData', (request, response) => {
    response.send(require('../sport-data.json'))
})

router.get('/getBus', (request, response) => {
    response.send(require('../transport/bus-numbers.json'))
})

router.get('/getTral', (request, response) => {
    response.send(require('../transport/tral-numbers.json'))
})

router.get('/getInfoAboutTransportPage', (request, response) => {
    response.send(require('../transport/info-about-page.json'))
})

router.get('/getInfoAboutKFU', (request, response) => {
    response.send(require('../education/info-about-kfu.json'))
})

module.exports = router;

