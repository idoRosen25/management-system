-- DropIndex
DROP INDEX "Task_id_creatorEmail_idx";

-- CreateIndex
CREATE INDEX "Task_id_idx" ON "Task"("id");
