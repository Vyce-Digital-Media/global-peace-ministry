import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with the secret key from environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(request: Request) {
  try {
    const { amount } = await request.json();

    // 1. Validation
    if (!amount || typeof amount !== 'number' || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid donation amount. Must be a positive number.' },
        { status: 400 }
      );
    }

    // 2. Fetch Stripe Config from environment
    const currency = (process.env.NEXT_PUBLIC_STRIPE_CURRENCY || 'USD').toLowerCase();

    // Convert amount to the smallest unit (cents/pence)
    const amountInSmallestUnit = Math.round(amount * 100);

    // 3. Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: currency,
            product_data: {
              name: 'Donation to Global Peace Ministry',
              images: ['https://globalpeaceministry.vercel.app/GPC%20Logo.png'], // Optional: Add a real URL to your logo if hosted
            },
            unit_amount: amountInSmallestUnit,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      // Get the origin dynamically from the request headers to support both localhost and production
      success_url: `${request.headers.get('origin')}/donate/success`,
      cancel_url: `${request.headers.get('origin')}/donate`,
    });

    // 4. Return the session URL back to client
    return NextResponse.json({
      url: session.url,
    });
  } catch (error: any) {
    console.error('Error creating Stripe session:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error while initiating payment.' },
      { status: 500 }
    );
  }
}
