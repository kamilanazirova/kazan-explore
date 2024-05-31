const router = require('express').Router();

// Sport page
router.get('/getSportData', (request, response) => {
    response.send(require('../json/sport-data.json'))
})

// Places page
router.get('/getPlacesData', (request, response) => {
    response.send(require('../json/places/places-data.json'))
})

// Transport page
router.get('/getInfoAboutTransportPage', (request, response) => {
    response.send(require('../json/transport/info-about-page.json'))
})

router.get('/getBus', (request, response) => {
    response.send(require('../json/transport/bus-numbers.json'))
})

router.get('/getTral', (request, response) => {
    response.send(require('../json/transport/tral-numbers.json'))
})

router.get('/getEvents', (request, response) => {
    response.send(require('../json/transport/events-calendar.json'))
})

// Education page
router.get('/getInfoAboutKFU', (request, response) => {
    response.send(require('../json/education/info-about-kfu.json'))
})

module.exports = router;

