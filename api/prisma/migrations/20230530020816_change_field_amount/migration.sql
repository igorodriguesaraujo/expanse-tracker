/*
  Warnings:

  - You are about to drop the column `value` on the `expanses` table. All the data in the column will be lost.
  - Added the required column `amount` to the `expanses` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_expanses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_att" DATETIME NOT NULL,
    "userId" TEXT,
    CONSTRAINT "expanses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_expanses" ("created_at", "description", "id", "name", "type", "updated_att", "userId") SELECT "created_at", "description", "id", "name", "type", "updated_att", "userId" FROM "expanses";
DROP TABLE "expanses";
ALTER TABLE "new_expanses" RENAME TO "expanses";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
