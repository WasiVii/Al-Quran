import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

import { type Config } from 'tailwindcss'

export default {
  content: ['src/**/*!(*.stories|*.spec).{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['var(--jetbrains-mono-font)', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        black: '#121314',
        gray: colors.gray,
        primary: colors.blue,
        secondary: colors.indigo,
        cream: '#FFF3DA',
        sky: '#83A2FF',
        sky2: '#687EFF',
      },
    },
    debugScreens: {
      position: ['bottom', 'right'],
      ignore: ['dark'],
      prefix: '',
      style: {
        backgroundColor: '#f9fafb',
        borderTopLeftRadius: '4px',
        color: 'black',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
    iconsPlugin({ collections: getIconCollections(['heroicons', 'lucide']) }),
  ],
} satisfies Config
