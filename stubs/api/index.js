const router = require('express').Router();
const { ResultsModel } = require('./model/results')


///// не класть в multy-stabs!!!
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Kazan-explore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});
/////

router.get('/getQuizResults/:userId', async (request, response) => {
    const { userId } = request.params;

    try {
        const results = await ResultsModel.findOne({ userId : userId }).exec();

        if (!results) {
            return response.status(404).send({ message: 'Quiz results not found' });
        }

        response.send(results.items);
    } catch (error) {
        response.status(500).send({ message: 'An error occurred while fetching quiz results' });
    }
});

router.post('/addQuizResult', async (request, response) => {
    const { userId, quizId, result } = request.body;

    if (!userId || !quizId || !result) {
        return response.status(400).send({ message: 'Invalid input data' });
    }
    try {
        let userResults = await ResultsModel.findOne({ userId : userId }).exec();
        if (!userResults) {
            userResults = new ResultsModel({ userId, items: [] });
        }
        userResults.items.push({ quizId, result });
        await userResults.save();

        response.status(200).send({ message: 'Quiz result added successfully', data: userResults });
    } catch (error) {
        response.status(500).send({ message: 'An error occurred while adding quiz result' });
    }
});


// First page
router.get('/getInfoAboutKazan', (request, response) => {
    const lang = request.query.lang || 'ru'; // Получаем язык из параметров запроса
    try {
        const data = require('../json/first/info-about-kazan/success.json'); // Загружаем весь JSON
        const translatedData = data[lang] || data['ru']; // Выбираем перевод по языку или дефолтный
        response.send(translatedData); // Отправляем перевод клиенту
    } catch (error) {
        response.status(500).send({ message: 'Internal server error' }); // Ошибка в случае проблем с JSON
    }
});

router.get('/getServices', (request, response) => {
    const lang = request.query.lang || 'ru';
    try {
        const data = require(`../json/first/services/${lang}/success.json`);
        response.send(data);
    } catch (error) {
        response.status(404).send({ message: 'Language not found' });
    }
})

router.get('/getNews', (request, response) => {
    const lang = request.query.lang || 'ru';
    try {
        const data = require(`../json/first/news/${lang}/success.json`);
        response.send(data);
    } catch (error) {
        response.status(404).send({ message: 'Language not found' });
    }
})

// Sport page
router.get('/getFirstText', (request, response) => {
    const lang = request.query.lang || 'ru'; // Получаем язык из параметров
    try {
        const data = require('../json/sport/first-text/success.json'); // Загружаем JSON
        const translatedData = data[lang] || data['ru']; // Берём перевод или дефолтный
        response.send(translatedData);
    } catch (error) {
        response.status(404).send({ message: 'Language not found' }); // Обработка ошибки
    }
});

router.get('/getSecondText', (request, response) => {
    const lang = request.query.lang || 'ru';
    try {
        const data = require('../json/sport/second-text/success.json');
        const translatedData = data[lang] || data['ru'];
        response.send(translatedData);
    } catch (error) {
        response.status(404).send({ message: 'Language not found' });
    }
});

router.get('/getSportData', (request, response) => {
    const lang = request.query.lang || 'ru';
    try {
        const data = require(`../json/sport/sport-list/${lang}/success.json`);
        response.send(data);
    } catch (error) {
        response.status(404).send({ message: 'Language not found' });
    }
})

router.get('/getSportQuiz', (request, response) => {
    const lang = request.query.lang || 'ru';
    try {
        const data = require(`../json/sport/quiz/${lang}/success.json`);
        response.send(data);
    } catch (error) {
        response.status(404).send({ message: 'Language not found' });
    }
})

// Places page
router.get('/getPlacesData', (request, response) => {
    const lang = request.query.lang || 'ru';
    try {
        const data = require(`../json/places/${lang}/success.json`);
        response.send(data);
    } catch (error) {
        response.status(404).send({ message: 'Language not found' });
    }
})

// Transport page
router.get('/getInfoAboutTransportPage', (request, response) => {
    const lang = request.query.lang || 'ru';
    try {
        const data = require('../json/transport/info-about-page/success.json');
        const translatedData = data[lang] || data['ru'];
        response.send(translatedData);
    } catch (error) {
        response.status(404).send({ message: 'Language not found' });
    }
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
    const lang = request.query.lang || 'ru';
    try {
        const data = require(`../json/transport/trip-schedule/${lang}/success.json`);
        response.send(data);
    } catch (error) {
        response.status(404).send({ message: 'Language not found' });
    }
})

// History page
router.get('/getHistoryText', (request, response) => {
    const lang = request.query.lang || 'ru';
    try {
        const data = require(`../json/history/text/${lang}/success.json`);
        response.send(data);
    } catch (error) {
        response.status(404).send({ message: 'Language not found' });
    }
})
router.get('/getHistoryList', (request, response) => {
    const lang = request.query.lang || 'ru';
    try {
        const data = require(`../json/history/list/${lang}/success.json`);
        response.send(data);
    } catch (error) {
        response.status(404).send({ message: 'Language not found' });
    }
})

// Education page
router.get('/getInfoAboutEducation', (request, response) => {
    const lang = request.query.lang || 'ru';
    try {
        const data = require('../json/education/text/success.json');
        const translatedData = data[lang] || data['ru'];
        response.send(translatedData);
    } catch (error) {
        response.status(404).send({ message: 'Language not found' });
    }
})
router.get('/getEducationList', (request, response) => {
    const lang = request.query.lang || 'ru';
    try {
        const data = require(`../json/education/cards/${lang}/success.json`);
        response.send(data);
    } catch (error) {
        response.status(404).send({ message: 'Language not found' });
    }
})
router.get('/getInfoAboutKFU', (request, response) => {
    const lang = request.query.lang || 'ru';
    try {
        const data = require('../json/education/kfu/success.json');
        const translatedData = data[lang] || data['ru'];
        response.send(translatedData);
    } catch (error) {
        response.status(404).send({ message: 'Language not found' });
    }
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

        return response.json({ email: email });
    } catch (error) {
        console.error('Ошибка регистрации пользователя:', error);
        response.status(500).send('Внутренняя ошибка сервера');
    }
});

module.exports = router;
