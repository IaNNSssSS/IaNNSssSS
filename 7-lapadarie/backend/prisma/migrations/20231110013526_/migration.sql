-- CreateTable
CREATE TABLE "Cliente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "qtdPaes" INTEGER NOT NULL,
    "statusPedido" TEXT NOT NULL
);
