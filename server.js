onst express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Мидлвары
app.use(bodyParser.json());

// Тестовый маршрут
app.get('/', (req, res) => {
    res.send('Altegio integration server is running!');
});

// Вебхук для Altegio
app.post('/webhook', (req, res) => {
    console.log("Получены данные от Altegio:", req.body);

    // Здесь позже добавим обработку, уведомления и логику
    res.status(200).send({ status: "ok" });
});

// Запуск
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
