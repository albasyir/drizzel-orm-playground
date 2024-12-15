import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  casing: 'snake_case',
  out: './src/infrastructure/database/migrations',
  schema: './src/modules/**/*.ts',
  dialect: 'mysql',
  dbCredentials: {
    url: "mysql://root:kb23ufg294vbojnsl@localhost:3306/example",
  },
});
