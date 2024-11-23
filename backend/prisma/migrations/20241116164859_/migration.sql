/*
  Warnings:

  - You are about to drop the `taskTypes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "taskTypes" DROP CONSTRAINT "taskTypes_id_fkey";

-- DropTable
DROP TABLE "taskTypes";

-- CreateTable
CREATE TABLE "task_types" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "task_types_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "task_types" ADD CONSTRAINT "task_types_id_fkey" FOREIGN KEY ("id") REFERENCES "tasks"("typeId") ON DELETE RESTRICT ON UPDATE CASCADE;
