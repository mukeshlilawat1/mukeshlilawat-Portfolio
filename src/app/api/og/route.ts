// src/app/api/og/route.ts
import React from 'react';
import { ImageResponse } from '@vercel/og'

export const config = { runtime: 'edge' }

export default function handler() {
  return new ImageResponse(
    React.createElement(
      "div",
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
      "Mukesh Lilawat"
    ),
    { width: 1200, height: 630 }
  )
}
