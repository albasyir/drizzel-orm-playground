CREATE TABLE `user_identities` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`age` int NOT NULL,
	`email` varchar(255) NOT NULL,
	CONSTRAINT `user_identities_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_identities_email_unique` UNIQUE(`email`)
);
