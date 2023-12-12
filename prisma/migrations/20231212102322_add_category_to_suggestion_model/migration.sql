-- AlterTable
ALTER TABLE `suggestion` ADD COLUMN `category` ENUM('UI', 'UX', 'ENHANCMENT', 'BUG', 'FEATURE') NOT NULL DEFAULT 'BUG';
