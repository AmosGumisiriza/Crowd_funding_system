// const axios = require('axios');
const axios = require('axios')
const { v4: uuid } = require('uuid')

exports.makepayment = (req, res) => {
  try {
  const { token, amount } = req.body;
  console.log("Amount", amount);

  const paymentData = {
    amount: amount,
    //  email: token.email,
    //  tx_ref: uuid(),
    currency: "UGX",
    redirect_url: () => {
      this.router.navigate(["/success"]);
    },
    meta: {
      consumer_id: token.id
    },
    customer: {
      // email: any,
      phone_number: any,
      name: any,
    },
    customizations: {
      title: 'CCDG',
      description: 'Make Payment',
      // logo: '#',
    },
  };

  axios.post('https://api.flutterwave.com/v3/payments', paymentData, {
    headers: {
      Authorization: `Bearer ${process.env.FLWSECK_TEST-bb06bf42029cde5d98c4faa3ce2fd2cf-X}`,
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      // Handle the response from Flutterwave's API
      res.json({ redirect_url: response.data.data.link });
    })
  
  .catch((error) => {
      // Handle the error
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    });
  } catch (error) {
    // Handle the error
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
