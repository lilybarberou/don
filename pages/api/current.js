import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method !== 'GET') return res.status(405).json({ success: false, message: 'Method not allowed' });

    // GET LAST PAYMENT INFO
    const sessions = await stripe.checkout.sessions.list({ limit: 1 });
    const lastSession = sessions.data[0];
    const donationName = lastSession.metadata.firstname;
    const donationAmount = lastSession.amount_subtotal / 100;

    // GET TOTAL AMOUNT RECEIVED
    const payments = await stripe.charges.list();
    let totalAmount = 0;

    payments.data.forEach((payment) => {
        totalAmount += payment.amount;
    });

    totalAmount = totalAmount / 100;

    res.status(200).json({ success: true, data: { donationName, donationAmount, totalAmount } });
}
