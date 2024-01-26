/*
  Warnings:

  - You are about to drop the `AssignedTask` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AssignedTask" DROP CONSTRAINT "AssignedTask_assignee_email_fkey";

-- DropForeignKey
ALTER TABLE "AssignedTask" DROP CONSTRAINT "AssignedTask_task_id_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_creator_email_fkey";

-- DropTable
ALTER TABLE "AssignedTask" RENAME TO "assigned_tasks";

ALTER TABLE "User" RENAME TO "users";

ALTER TABLE "Task" RENAME TO "tasks";

ALTER TABLE "users" ADD COLUMN "team_id" TEXT;
ALTER TABLE "tasks" ADD COLUMN "workspace_id" TEXT;


-- CreateTable
CREATE TABLE "teams" (
    "id" TEXT NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "name" VARCHAR(1024) NOT NULL,
    "crated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workspaces" (
    "id" TEXT NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(1024) NOT NULL,
    "icon" VARCHAR(1024),
    "team_id" TEXT NOT NULL,

    CONSTRAINT "workspaces_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_team_id_idx" ON "users"("team_id");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "assigned_tasks_task_id_key" ON "assigned_tasks"("task_id");

-- CreateIndex
CREATE INDEX "assigned_tasks_task_id_idx" ON "assigned_tasks"("task_id");

-- CreateIndex
CREATE INDEX "assigned_tasks_assignee_email_idx" ON "assigned_tasks"("assignee_email");

-- CreateIndex
CREATE UNIQUE INDEX "assigned_tasks_task_id_assignee_email_key" ON "assigned_tasks"("task_id", "assignee_email");

-- CreateIndex
CREATE INDEX "tasks_creator_email_idx" ON "tasks"("creator_email");

-- CreateIndex
CREATE INDEX "tasks_status_idx" ON "tasks"("status");

-- CreateIndex
CREATE INDEX "workspaces_name_idx" ON "workspaces"("name");

-- CreateIndex
CREATE INDEX "workspaces_team_id_idx" ON "workspaces"("team_id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assigned_tasks" ADD CONSTRAINT "assigned_tasks_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assigned_tasks" ADD CONSTRAINT "assigned_tasks_assignee_email_fkey" FOREIGN KEY ("assignee_email") REFERENCES "users"("email") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_creator_email_fkey" FOREIGN KEY ("creator_email") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_workspace_id_fkey" FOREIGN KEY ("workspace_id") REFERENCES "workspaces"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workspaces" ADD CONSTRAINT "workspaces_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE "assigned_tasks" RENAME CONSTRAINT "AssignedTask_pkey" TO "assigned_tasks_pkey";

-- AlterTable
ALTER TABLE "tasks" RENAME CONSTRAINT "Task_pkey" TO "tasks_pkey";
ALTER TABLE "tasks" ADD COLUMN     "is_deleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "users" RENAME CONSTRAINT "User_pkey" TO "users_pkey";
ALTER TABLE "users" ADD COLUMN     "is_deleted" BOOLEAN NOT NULL DEFAULT false;