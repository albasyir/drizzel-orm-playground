RENAME TABLE `user_identities` TO `user`;--> statement-breakpoint
ALTER TABLE `user` DROP INDEX `user_identities_email_unique`;--> statement-breakpoint
ALTER TABLE `user` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `user` ADD PRIMARY KEY(`id`);--> statement-breakpoint
ALTER TABLE `user` ADD CONSTRAINT `user_email_unique` UNIQUE(`email`);