/*
  Warnings:

  - You are about to drop the column `creatorEmail` on the `Task` table. All the data in the column will be lost.
  - Added the required column `creator_email` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_creatorEmail_fkey";

-- DropIndex
DROP INDEX "Task_creatorEmail_key";

-- DropIndex
DROP INDEX "Task_id_idx";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "creatorEmail",
ADD COLUMN     "creator_email" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "AssignedTask" (
    "id" TEXT NOT NULL,
    "task_id" TEXT NOT NULL,
    "assignee_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AssignedTask_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AssignedTask_task_id_key" ON "AssignedTask"("task_id");

-- CreateIndex
CREATE UNIQUE INDEX "AssignedTask_task_id_assignee_id_key" ON "AssignedTask"("task_id", "assignee_id");

-- CreateIndex
CREATE INDEX "Task_creator_email_idx" ON "Task"("creator_email");

-- AddForeignKey
ALTER TABLE "AssignedTask" ADD CONSTRAINT "AssignedTask_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssignedTask" ADD CONSTRAINT "AssignedTask_assignee_id_fkey" FOREIGN KEY ("assignee_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_creator_email_fkey" FOREIGN KEY ("creator_email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
