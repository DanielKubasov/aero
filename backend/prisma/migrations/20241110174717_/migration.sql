/*
  Warnings:

  - You are about to drop the `TaskTypes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TaskTypes" DROP CONSTRAINT "TaskTypes_id_fkey";

-- DropTable
DROP TABLE "TaskTypes";

-- CreateTable
CREATE TABLE "TasksTypes" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TasksTypes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TasksTypes" ADD CONSTRAINT "TasksTypes_id_fkey" FOREIGN KEY ("id") REFERENCES "Tasks"("typeId") ON DELETE RESTRICT ON UPDATE CASCADE;
