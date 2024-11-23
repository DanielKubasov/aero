-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_assigneeId_fkey";

-- AlterTable
ALTER TABLE "tasks" ALTER COLUMN "typeId" DROP NOT NULL,
ALTER COLUMN "priorityId" DROP NOT NULL,
ALTER COLUMN "assigneeId" DROP NOT NULL,
ALTER COLUMN "estimation" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_assigneeId_fkey" FOREIGN KEY ("assigneeId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
