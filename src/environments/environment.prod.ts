// `.env.ts` is generated by the `npm run env` command
import env from './.env';

export const environment = {
  production: true,
  version: env.npm_package_version,
  serverUrl: 'http://188.130.168.104:9000/api',
  defaultLanguage: 'sr-RS',
  supportedLanguages: ['en-US', 'sr-RS']
};
