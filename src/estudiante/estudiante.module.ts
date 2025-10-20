// src/estudiante/estudiante.module.ts
import { Module } from '@nestjs/common';
import { EstudianteController } from './estudiante.controller';
import { EstudianteService } from './estudiante.service';
import { PrismaModule } from '../prisma/prisma.module'; // importa el módulo, no el servicio

@Module({
  imports: [PrismaModule],
  controllers: [EstudianteController],
  providers: [EstudianteService],
})
export class EstudianteModule {}
