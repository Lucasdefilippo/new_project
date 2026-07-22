/*
  Warnings:

  - A unique constraint covering the columns `[user]` on the table `Parents` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Parents_user_key" ON "Parents"("user");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_user_key" ON "Teacher"("user");
