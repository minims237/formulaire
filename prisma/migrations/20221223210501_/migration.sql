-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "categorie" TEXT NOT NULL,
    "statut" TEXT NOT NULL,
    "date1" TEXT NOT NULL,
    "date2" TEXT NOT NULL,
    "date3" TEXT NOT NULL,
    "photo" TEXT[],
    "numero" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_numero_key" ON "User"("numero");
