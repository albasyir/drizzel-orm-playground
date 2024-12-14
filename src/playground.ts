import { drizzle } from "drizzle-orm/mysql2";
import { userIdentitiesTable } from "./modules/user/user";

const mysql = drizzle({ 
    connection: { 
        uri: "mysql://root:kb23ufg294vbojnsl@localhost:3306/example"
    }
});

