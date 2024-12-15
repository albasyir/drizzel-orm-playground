CREATE TABLE `transaction` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`price` int NOT NULL,
	`created_by_user_id` bigint unsigned,
	CONSTRAINT `transaction_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`age` int NOT NULL,
	`email` varchar(255) NOT NULL,
	CONSTRAINT `user_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `transaction` ADD CONSTRAINT `transaction_created_by_user_id_user_id_fk` FOREIGN KEY (`created_by_user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;