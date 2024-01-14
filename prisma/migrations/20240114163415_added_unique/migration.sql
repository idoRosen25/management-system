/*
  Warnings:

  - A unique constraint covering the columns `[creator_email]` on the table `Task` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Task_creator_email_key" ON "Task"("creator_email");
