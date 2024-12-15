# Drizzel ORM Playground

just playground to test drizzel orm with mysql with DDD pattern "like" make sure DDD can implement with this

## Why?

TypeORM is best for me and i'm the one who contributor there (small but yea no have time to do a lot) 
so i just try to research competitors and get drizzel is one that i think yea good to try


## Pro, Cons and Netral

### Netral

i expect it's same like others

- migrate using `npx drizzle-kit migrate`
- query builder experience was great
- there's option to change naming strategy
- can DDD, easy to configure
- can use Node (of course) and BUN

### Pro

- auto migration with `npx drizzle-kit generate`
    - developer can focus on development instead thinking hard to make migration script
    - great strategy to generate
        - try to re-index FK and Primary Key, proof `0001_simple_marrow.sql`, so it make sure all metadata will resolved prefectly for default meta data
- AIPK by default always unsigned, best practice!
    - other than drizzel somehow they dont make unassigned as default for AIPK
    - auto AIPK bigint!, nice!
    - this really safe space for bigger data

### Cons

- Entity / Schema is not using class
- because auto migration it's hard to control when you got wrong with your schema and end the end you have to code by your self with "SQL" hufffff
- there's no rollback strategy, when app fail to migrate sometimes optimization solution is 'rollback'
    - as my experience rollback is no need (most likely) when our development stage is quite clear
    - if we are not clear yet or not organized yet, migration strategy maybe fail and rollback sometimes need, it's good to having this i think
    - it's really power full when our db using `Postgresql` however rollback is not applicable
- data of `infrastructure/database/migrations/meta` will huge
- when wanna define relation, a bit confused because that pattern is not common
    - have to maintence 2 place of relation data type see on `modules/transaction/transaction.entity.ts`


## My Person Conclusion

not wanna use that, i better using MikroORM, it's hard but has good pattern than this (i think), this about prespective