/*
  Warnings:

  - You are about to drop the `AssignedTask` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AssignedTask" DROP CONSTRAINT "AssignedTask_assignee_id_fkey";

-- DropForeignKey
ALTER TABLE "AssignedTask" DROP CONSTRAINT "AssignedTask_task_id_fkey";

-- DropTable
DROP TABLE "AssignedTask";
