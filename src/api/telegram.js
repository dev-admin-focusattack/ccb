const express = require('express');
const { Telegraf } = require('telegraf');


const token = '6221218651:AAE7ggEpI6MiRN78Z_HKYRCNkbdIOhHY5F0';
const bot = new Telegraf(token);


const router = express.Router();


router.post('/sendToTelegram', (req, res) => {
  // chatId could be a single chat id, or an array of chat ids
  const chatId = "-916475589"; // You can send chatId in request body
  // text is the message you want to send
  const text = req.body.words + " -- " + req.ip; // You can send text in request body

  bot.telegram.sendMessage(chatId, text)
      .then(() => {
          res.status(200).send('Message sent');
      })
      .catch((err) => {
          console.log(err);
          res.status(500).send('An error occurred while trying to send the message');
      });
});



router.get('/', (req, res) => {
  res.json(['😀', '😳', '🙄']);
});

module.exports = router;
