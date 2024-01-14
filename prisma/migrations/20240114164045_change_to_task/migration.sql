/*
  Warnings:

  - You are about to drop the column `creator_email` on the `Task` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[creatorEmail]` on the table `Task` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `creatorEmail` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_creator_email_fkey";

-- DropIndex
DROP INDEX "Task_creator_email_idx";

-- DropIndex
DROP INDEX "Task_creator_email_key";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "creator_email",
ADD COLUMN     "creatorEmail" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Task_creatorEmail_key" ON "Task"("creatorEmail");

-- CreateIndex
CREATE INDEX "Task_id_creatorEmail_idx" ON "Task"("id", "creatorEmail");

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_creatorEmail_fkey" FOREIGN KEY ("creatorEmail") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
