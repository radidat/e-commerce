const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51JT929At2KnlK2OKpNmWyMwGBOAvqzooUzGTR6r5AryenLAb4PM5tRPu6JL8Ey3tH6x3D9QYtSDwqcaSlJzY1Taz00Md9SfKoN')
const app = express();

app.use(cors({
  origin: true
}));
app.use(express.json());

app.post('/payments/create', async (req, res) => {
  try {
    const { amount} = req.body;
 const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd'
    });
    
    res
      .status(200)
      .send(paymentIntent.client_secret);

  } catch (err) {
    res
      .status(500)
      .json({
        statusCode: 500,
        message: err.message
      });
  }
})

app.get('*', (req, res) => {
  res
    .status(404)
    .send('404, Not Found.');
});

exports.api = functions.https.onRequest(app);
