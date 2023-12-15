-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_parentId_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_publisherId_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_suggestionId_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_taggedUserId_fkey`;

-- DropForeignKey
ALTER TABLE `suggestion` DROP FOREIGN KEY `Suggestion_publisherId_fkey`;

-- DropForeignKey
ALTER TABLE `vote` DROP FOREIGN KEY `Vote_suggestionId_fkey`;

-- DropForeignKey
ALTER TABLE `vote` DROP FOREIGN KEY `Vote_userId_fkey`;

-- AddForeignKey
ALTER TABLE `Suggestion` ADD CONSTRAINT `Suggestion_publisherId_fkey` FOREIGN KEY (`publisherId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vote` ADD CONSTRAINT `Vote_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vote` ADD CONSTRAINT `Vote_suggestionId_fkey` FOREIGN KEY (`suggestionId`) REFERENCES `Suggestion`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_publisherId_fkey` FOREIGN KEY (`publisherId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_suggestionId_fkey` FOREIGN KEY (`suggestionId`) REFERENCES `Suggestion`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_taggedUserId_fkey` FOREIGN KEY (`taggedUserId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `Comment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
