/*
  Warnings:

  - Added the required column `apellido` to the `Estudiante` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Estudiante" ADD COLUMN     "apellido" TEXT NOT NULL;
