import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method !== 'GET') return res.status(405).json({ success: false, message: 'Method not allowed' });

    const { amount } = req.query;

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: 'Don pour Lily',
                    },
                    unit_amount: amount * 100,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${process.env.HOST}?success=1`,
        cancel_url: `${process.env.HOST}?success=0`,
        metadata: { firstname: 'Prénom' },
    });

    res.status(200).json({ success: true, data: session.url });
}
