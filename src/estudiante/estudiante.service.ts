import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

const prisma = new PrismaClient();

@Injectable()
export class EstudianteService {
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  update(arg0: number, updateEstudianteDto: UpdateEstudianteDto) {
    throw new Error('Method not implemented.');
  }
  async create(createEstudianteDto: CreateEstudianteDto) {
    return prisma.estudiante.create({
      data: {
        nombre: createEstudianteDto.nombre,
        apellido: createEstudianteDto.apellido,
        correo: createEstudianteDto.correo,
        fecha_nacimiento: new Date(createEstudianteDto.fecha_nacimiento),
        carrera_id: createEstudianteDto.carrera_id,
      },
    });
  }

  findAll() {
    return prisma.estudiante.findMany({
      include: { carrera: true },
    });
  }

  findOne(id: number) {
    return prisma.estudiante.findUnique({
      where: { id },
      include: { carrera: true },
    });
  }
}
