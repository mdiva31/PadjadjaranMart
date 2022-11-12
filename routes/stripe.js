const router = require("express").Router();
 //const stripe = require("stripe")(process.env.STRIPE_KEY);
//const KEY = process.env.STRIPE_KEY
//const stripe = require("stripe")(KEY);
const Stripe = require('stripe');
const stripe = Stripe("sk_test_51M26rQE3uMtN1RvwpW3tF8PW3vkLz5oT49j6c5OAv5ovNRhUGDeAhrZ8Vg35RyzsIjJRUX00LSFk2FhXwkRFLJPE00PIjI1PbH");

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "IDR",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
