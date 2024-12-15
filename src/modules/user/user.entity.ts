import { relations } from 'drizzle-orm';
import { int, mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';
import { transaction } from '../transaction/transaction.entity';

export const user = mysqlTable('user', {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  age: int().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const userRelations = relations(user, (relation) => {
    return {
        transactions: relation.many(transaction)
    }
})