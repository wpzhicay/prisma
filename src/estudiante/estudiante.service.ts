import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Injectable()
export class EstudianteService {
  constructor(private prisma: PrismaService) {}

  async create(createEstudianteDto: CreateEstudianteDto) {
    try {
      const carrera = await this.prisma.carrera.findUnique({
        where: { id: createEstudianteDto.carrera_id },
      });

      if (!carrera) {
        throw new NotFoundException(`Carrera con ID #${createEstudianteDto.carrera_id} no existe`);
      }

      return await this.prisma.estudiante.create({
        data: {
          nombre: createEstudianteDto.nombre,
          apellido: createEstudianteDto.apellido,
          correo: createEstudianteDto.correo,
          fecha_nacimiento: new Date(createEstudianteDto.fecha_nacimiento),
          carrera_id: createEstudianteDto.carrera_id,
        },
      });
    } catch (error) {
      console.error('Error en create estudiante:', error);
      throw error;
    }
  }

  async findAll() {
    return this.prisma.estudiante.findMany({
      include: { carrera: true },
    });
  }

  async findOne(id: number) {
    const estudiante = await this.prisma.estudiante.findUnique({
      where: { id },
      include: { carrera: true },
    });

    if (!estudiante) {
      throw new NotFoundException(`Estudiante con ID #${id} no encontrado`);
    }

    return estudiante;
  }

  async update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    await this.findOne(id);

    return this.prisma.estudiante.update({
      where: { id },
      data: updateEstudianteDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.estudiante.delete({ where: { id } });
  }
}
