import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          primary: '#009028',
          dark:    '#00601B',
          deep:    '#0c1f0e',
          hero:    '#1a3d21',
          light:   '#1FD75C',
          bg:      '#EAF7EE',
          muted:   '#DDF3E2',
          pale:    '#BFF3CE',
        },
        neutral: {
          page:   '#F4F6F4',
          border: '#DCE2DC',
          muted:  '#5C615C',
          subtle: '#9A9797',
          ink:    '#0E120E',
        },
        error: '#E5484D',
      },
      fontFamily: {
        display: ['var(--font-bricolage)', 'sans-serif'],
        body:    ['var(--font-inter)',     'sans-serif'],
        label:   ['var(--font-saira)',     'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.2em',
        logo:    '-0.02em',
      },
      borderRadius: {
        card:  '26px',
        chip:  '999px',
        input: '13px',
        badge: '13px',
      },
      boxShadow: {
        card:        '0 28px 60px -28px rgba(14,18,14,0.35), 0 2px 0 rgba(255,255,255,0.6) inset',
        'card-hover':'0 32px 64px -24px rgba(14,18,14,0.45)',
        btn:         '0 12px 30px -8px rgba(0,144,40,0.5)',
        'btn-hover': '0 16px 36px -8px rgba(0,144,40,0.6)',
        nav:         '0 6px 16px rgba(0,144,40,0.28)',
        slider:      '0 24px 50px -30px rgba(14,18,14,0.4)',
      },
    },
  },
  plugins: [],
}

export default config
