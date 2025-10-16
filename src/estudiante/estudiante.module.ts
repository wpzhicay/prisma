import { Module } from '@nestjs/common';
import { EstudianteController } from './estudiante.controller';
import { EstudianteService } from './estudiante.service';
import { PrismaService } from '../prisma/prisma.service'; 

@Module({
  controllers: [EstudianteController],
  providers: [EstudianteService, PrismaService],
})
export class EstudianteModule {}