import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method !== 'GET') return res.status(405).json({ success: false, message: 'Method not allowed' });

    // GET LAST PAYMENT INFO
    const sessions = await stripe.checkout.sessions.list();

    if (!sessions.data.length) return res.status(200).json({ success: false });

    const successfulSessions = sessions.data.filter((session) => session.payment_status === 'paid');

    if (!successfulSessions.length) return res.status(200).json({ success: false });

    const lastSuccessfulSession = successfulSessions[0];
    const donationName = lastSuccessfulSession.metadata.name;
    const donationAmount = lastSuccessfulSession.amount_subtotal / 100;

    // GET TOTAL AMOUNT RECEIVED
    const payments = await stripe.charges.list();
    let totalAmount = 0;

    payments.data.forEach((payment) => {
        totalAmount += payment.amount;
    });

    totalAmount = totalAmount / 100;

    res.status(200).json({ success: true, data: { donationName, donationAmount, totalAmount } });
}
