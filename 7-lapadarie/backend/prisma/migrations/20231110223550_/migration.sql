/*
  Warnings:

  - You are about to alter the column `statusPedido` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "qtdPaes" INTEGER NOT NULL,
    "statusPedido" BOOLEAN NOT NULL
);
INSERT INTO "new_Order" ("id", "nome", "qtdPaes", "statusPedido") SELECT "id", "nome", "qtdPaes", "statusPedido" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
