import { drizzle } from "drizzle-orm/mysql2";
import { user, userRelations } from "./modules/user/user.entity";
import { eq } from "drizzle-orm";
import { generateRandomString } from "./infrastructure/helpers/generate-random-string.helper";
import { titleMaker } from "./infrastructure/helpers/title-maker.helper";
import { transaction } from "./modules/transaction/transaction.entity";

const mysql = drizzle({ 
    casing: 'snake_case',
    connection: { 
        uri: "mysql://root:kb23ufg294vbojnsl@localhost:3306/example",
    },
});

// ==============================================================================
// Insert SQL Query
// ==============================================================================
titleMaker("Insert SQL Query");

const simpleInsertData = mysql.insert(user).values(
    // ITS GREAT!, id is optional but other required field is type-safe
    // for this case typesafe is 100% accurate
    {
        name: 'Aziz',
        email: generateRandomString(10) + 'aziz@albasyir.net',
        age: 15,
    },
);

let result = await simpleInsertData.execute()
console.log("[simpleInsertData] result", result[0].insertId);

// ==============================================================================
// Multi Insert SQL Query
// ==============================================================================
titleMaker("Multi Insert SQL Query");
const simpleMultiInsertData = mysql.insert(user).values([
    {
        name: 'Aziz',
        email: generateRandomString(10) + 'aziz@albasyir.net',
        age: 15,
    },
    {
        name: 'Istha',
        email: generateRandomString(10) + 'istha@albasyir.net',
        age: 13,
    },
]);

const results = await simpleMultiInsertData.execute()
console.log("[simpleMultiInsertData] result", results)


// ==============================================================================
// Normal SQL Query
// ==============================================================================
titleMaker("Normal SQL Query");

// the syntax
const simpleQueryBuilder = mysql.select().from(user).where(eq(user.age, 15));

// query is good
console.log('[simpleQueryBuilder] Will be', simpleQueryBuilder.toSQL());

// return type is great []
console.log('[simpleQueryBuilder] Result', await simpleQueryBuilder.execute());


// ==============================================================================
// User Join Transaction
// ==============================================================================
titleMaker("User Join Transaction");

const userJoinTransaction = mysql.select().from(transaction)
    .leftJoin(user, eq(transaction.id, user.id))

const resultUserJoinTransaction = await userJoinTransaction.execute();

// this has good auto completion they can detect relation correctly
console.log("result", resultUserJoinTransaction.map(transaction => {
    // can access transaction.user
    // if we using without join transaction.user can't be acess by typing

    // BUT, user can NULL, however on my schema it's impossible
    // kysely is best for this

    // its not 100% typesafe

    transaction.user?.age;

    // and what i dont like is this, to get transaction we have to access
    transaction.transaction;
    // what the hack!
    // from this (my intuision) i think typeorm is better than this

    return transaction;
}))