import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'staging', 'production']).default('development'),
  },
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().default('http://localhost:3000'),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
})

export const siteMeta = {
  title: "Al-Qur'an",
  description: "Al-Qur'an Online",
  baseUrl: env.NEXT_PUBLIC_SITE_URL,
}
