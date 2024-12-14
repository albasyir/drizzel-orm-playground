# Drizzel ORM Playground

just playground to test drizzel orm with mysql

## Why MySQL as Subject?

because this database is used by low letency DBMS because of that MySQL is lightweight which means MySQL is not powerfull as PG
for example, means we have to carefully about data changes on that DB, even this DB is really fast however 

- can't transaction with ALTER things only data
- when you change table name, FK name is not changes, means if there's other table use same FK, it will be breaking


## Pro, Cons and Netral

### Pro

- auto migration with `npx drizzle-kit generate`
    - developer can focus on development instead thinking hard to make migration script
    - great strategy to generate
        - try to re-index FK and Primary Key, proof `0001_simple_marrow.sql` 


### Netral

- migrate using `npx drizzle-kit migrate`


### Cons

- there's no rollback strategy