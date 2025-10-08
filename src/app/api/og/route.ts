// src/app/api/og/route.ts
import React from 'react';
import { ImageResponse } from '@vercel/og'

// Edge runtime specify karna mandatory
export const runtime = 'edge'

// GET request handle karne ke liye function
export async function GET() {
  return new ImageResponse(
    React.createElement(
      'div',
      {
        style: {
          fontSize: 60,
          background: 'linear-gradient(90deg, #0ff, #0af)',
          width: '1200px',
          height: '630px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }
      },
      'Mukesh Lilawat'
    ),
    { width: 1200, height: 630 }
  )
}
