/*
  Warnings:

  - You are about to drop the column `assignee_id` on the `AssignedTask` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[task_id,assignee_email]` on the table `AssignedTask` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "AssignedTask" DROP CONSTRAINT "AssignedTask_assignee_id_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_creator_email_fkey";

-- DropIndex
DROP INDEX "AssignedTask_task_id_assignee_id_key";

-- AlterTable
ALTER TABLE "AssignedTask" DROP COLUMN "assignee_id",
ADD COLUMN     "assignee_email" TEXT;

-- CreateIndex
CREATE INDEX "AssignedTask_task_id_idx" ON "AssignedTask"("task_id");

-- CreateIndex
CREATE INDEX "AssignedTask_assignee_email_idx" ON "AssignedTask"("assignee_email");

-- CreateIndex
CREATE UNIQUE INDEX "AssignedTask_task_id_assignee_email_key" ON "AssignedTask"("task_id", "assignee_email");

-- CreateIndex
CREATE INDEX "Task_status_idx" ON "Task"("status");

-- AddForeignKey
ALTER TABLE "AssignedTask" ADD CONSTRAINT "AssignedTask_assignee_email_fkey" FOREIGN KEY ("assignee_email") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_creator_email_fkey" FOREIGN KEY ("creator_email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
