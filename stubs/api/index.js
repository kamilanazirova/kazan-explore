const router = require('express').Router();

router.get('/getSportData', (request, response) => {
    response.send(require('../json/sport-data.json'))
})

router.get('/getBus', (request, response) => {
    response.send(require('../json/transport/bus-numbers.json'))
})

router.get('/getTral', (request, response) => {
    response.send(require('../json/transport/tral-numbers.json'))
})

router.get('/getInfoAboutTransportPage', (request, response) => {
    response.send(require('../json/transport/info-about-page.json'))
})

router.get('/getInfoAboutKFU', (request, response) => {
    response.send(require('../json/education/info-about-kfu.json'))
})



router.get('/getEvents', (request, response) => {
    response.send(require('../json/transport/events-calendar.json'))
})

router.get('/getPlacesData', (request, response) => {
    response.send(require('../json/places/places-data.json'))
})

module.exports = router;

