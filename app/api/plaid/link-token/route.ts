import { NextResponse } from 'next/server'

export async function GET() {
  const r = await fetch('https://production.plaid.com/link/token/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: '69dfca624f4141000dc0a788',
      secret: 'e11f5a08ebf988d1a8764053a97680',
      client_name: 'Dream Rentals Dashboard',
      country_codes: ['US'],
      language: 'en',
      user: { client_user_id: 'josh-dream-rentals' },
      products: ['transactions', 'auth'],
      redirect_uri: 'https://thedreamrentals.com/connect-pnc',
    })
  })
  const data = await r.json()
  return NextResponse.json(data)
}
