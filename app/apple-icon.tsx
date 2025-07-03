import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleTouchIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 130,
          background: '#000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontWeight: '900',
          borderRadius: '24px',
          fontFamily: 'monospace',
        }}
      >
        S
      </div>
    ),
    {
      ...size,
    }
  )
}
