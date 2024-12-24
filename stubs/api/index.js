const router = require('express').Router();


// First page
router.get('/getInfoAboutKazan', (request, response) => {
    response.send(require('../json/first/info-about-kazan/success.json'))
})

router.get('/getNews', (request, response) => {
    const lang = request.query.lang || 'en'; // Получаем язык из параметров запроса
    try {
        const data = require(`../json/first/news/${lang}/success.json`);
        response.send(data);
    } catch (error) {
        response.status(404).send({ message: 'Language not found' });
    }
})

// Sport page
router.get('/getSportInfo', (request, response) => {
    response.send(require('../json/sport/info/success.json'))
})
router.get('/getSportData', (request, response) => {
    response.send(require('../json/sport-list/success.json'))
})

// Places page
router.get('/getPlacesData', (request, response) => {
    response.send(require('../json/places/places-data.json'))
})

// Transport page
router.get('/getInfoAboutTransportPage', (request, response) => {
    response.send(require('../json/transport/info-about-page/success.json'))
})

router.get('/getBus', (request, response) => {
    response.send(require('../json/transport/bus-numbers/success.json'))
})

router.get('/getTral', (request, response) => {
    response.send(require('../json/transport/tral-numbers/success.json'))
})

router.get('/getEvents', (request, response) => {
    response.send(require('../json/transport/events-calendar/success.json'))
})

router.get('/getTripSchedule', (request, response) => {
    response.send(require('../json/transport/trip-schedule/success.json'))
})

// Education page
router.get('/getInfoAboutKFU', (request, response) => {
    response.send(require('../json/education/info-about-kfu.json'))
})

// Login
router.post('/entrance', (request, response) => {
    const { email, password } = request.body.entranceData;
   
    try {
     const users = require('../json/users-information/success.json');
     const user = users.data.find(user => user.email === email && user.password === password);
   
     if (!user) {
       return response.status(401).send('Неверные учетные данные'); 
     } 
   
     const responseObject = {
       email: user.email,
     }
   
     return response.json(responseObject);
    } catch (error) {
       console.error('Ошибка чтения файла:', error);
       response.status(500).send('Внутренняя ошибка сервера');
    }
   })
   
   router.post('/registration', async (request, response) => {
     const { email, password, confirmPassword } = request.body.registerData;
   
     try {
         if (password !== confirmPassword) {
             return response.status(400).send('Пароли не совпадают!');
         }
         const users = require('../json/users-information/success.json');
   
         const existingUser = users.data.find(user => user.email === email);
   
         if (existingUser) {
             return response.status(400).send('Пользователь с такой почтой уже существует!');
         }
   
         return response.json({ email: email});
     } catch (error) {
         console.error('Ошибка регистрации пользователя:', error);
         response.status(500).send('Внутренняя ошибка сервера');
     }
   });

module.exports = router;
