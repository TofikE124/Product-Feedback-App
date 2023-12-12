/*
  Warnings:

  - Added the required column `publisherId` to the `Suggestion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `suggestion` ADD COLUMN `publisherId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Suggestion` ADD CONSTRAINT `Suggestion_publisherId_fkey` FOREIGN KEY (`publisherId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
