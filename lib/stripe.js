// backend/lib/stripe.js

import Stripe from 'stripe';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

// Initialize Stripe with the secret key
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-04-10', // always specify a version to avoid future breaking changes
});
