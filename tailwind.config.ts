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
          hover:   '#00781F',
          dark:    '#00601B',
          bg:      '#EAF7EE',
        },
        neutral: {
          page:     '#F8F7EC',
          alt:      '#F9F9FA',
          ink:      '#1F1F1F',
          charcoal: '#222222',
          muted:    '#646464',
          light:    '#AFAFAF',
          border:   '#E7E5DC',
          link:     '#333333',
        },
        error: '#BA361C',
      },
      fontFamily: {
        display: ['var(--font-bricolage)', 'sans-serif'],
        body:    ['var(--font-inter-tight)', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.14em',
      },
      borderRadius: {
        badge: '5px',
      },
    },
  },
  plugins: [],
}

export default config
