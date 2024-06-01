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

router.get('/getInfoAboutKazan', (request, response) => {
    response.send(require('../json/first/info-about-kazan/success.json'))
})

router.get('/getNews', (request, response) => {
    response.send(require('../json/first/news/success.json'))
})

router.get('/getInfoAboutInstitutions', (request, response) => {
    response.send(require('../json/transport/info-about-institutions.json'))
})

module.exports = router;

