import { int, mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

export const userIdentitiesTable = mysqlTable('user', {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  age: int().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});
