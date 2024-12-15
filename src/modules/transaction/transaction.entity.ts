import { One, relations } from 'drizzle-orm';
import { bigint, int, mysqlTable, serial } from 'drizzle-orm/mysql-core';
import { user } from '../user/user.entity';

export const transaction = mysqlTable('transaction', {
  id: serial().primaryKey(),
  price: int().notNull(),
  createdByUserId: bigint({ unsigned: true, mode: 'number' }).references(
    /**
     * this not good since we already define on "relation"
     * however we have to make sure this defined as this as `transactionRelations`
     * 
     * so we have to maintain 2 place, this and on `transactionRelations.createBy`
     * 
     * if we have many relation, it's might be forget
     */
    () => user.id
  ).notNull()
});

export const transactionRelations = relations(transaction, (relation) => {
    return {
        createBy: relation.one(user, {
            fields: [transaction.createdByUserId],

            // we also have to makesure on this
            references: [user.id]
        })
    }
})