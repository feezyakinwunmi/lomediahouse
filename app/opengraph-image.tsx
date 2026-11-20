import { ImageResponse } from 'next/og';

export const alt = 'LO Media House - Media, Marketing & Technology';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #111827 0%, #09090b 70%, #7f1d1d 100%)',
          color: 'white',
        }}
      >
        <div style={{ color: '#f87171', fontSize: 28, fontWeight: 700, letterSpacing: 8 }}>
          LO MEDIA HOUSE
        </div>
        <div style={{ marginTop: 32, fontSize: 66, lineHeight: 1.1, fontWeight: 700 }}>
          Media that moves
        </div>
        <div style={{ marginTop: 24, color: '#d4d4d8', fontSize: 30 }}>
          Publishing | Marketing | Creative | Technology
        </div>
      </div>
    ),
    size,
  );
}
