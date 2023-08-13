const stripe = require("stripe")("sk_test_YFN5WClz2bGCVdcFi7K3QMlh00RFo5jpbA")
const { v4: uuid } = require("uuid")

exports.makepayment = (req, res) => {
    const { token, amount } = req.body
    console.log("Amount", amount)

    const idempotencyKey = uuid()

    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: amount * 100,
            currency: 'inr',
            customer: customer.id,
            receipt_email: token.email,
            description: `Purchased the product`,
            shipping: {
                name: token.card.name,
                address: {
                    line1: token.card.address_line1,
                    line2: token.card.address_line2,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    postal_code: token.card.address_zip,
                }
            }
        }, { idempotencyKey })
            .then(result => res.send({ message: 'successfull' }))
            .catch(err => console.log(err))
    })
}