import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTituloDto } from './dto/create-titulo.dto';
import { UpdateTituloDto } from './dto/update-titulo.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TituloService {
  constructor(private prisma: PrismaService) {}

  async create(createTituloDto: CreateTituloDto) {
    const profesor = await this.prisma.profesor.findUnique({
      where: { id: createTituloDto.profesor_id },
    });

    if (!profesor) {
      throw new NotFoundException(`Profesor con ID #${createTituloDto.profesor_id} no existe`);
    }

    return this.prisma.titulo.create({
      data: createTituloDto,
    });
  }

  async findAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    return this.prisma.titulo.findMany({
      skip,
      take: limit,
      include: {
        profesor: true,
      },
    });
  }

  async findOne(id: number) {
    const titulo = await this.prisma.titulo.findUnique({
      where: { id },
      include: {
        profesor: true,
      },
    });

    if (!titulo) {
      throw new NotFoundException(`Título con ID #${id} no encontrado`);
    }

    return titulo;
  }

  async update(id: number, updateTituloDto: UpdateTituloDto) {
    await this.findOne(id);

    
    if (updateTituloDto.profesor_id) {
      const profesor = await this.prisma.profesor.findUnique({
        where: { id: updateTituloDto.profesor_id },
      });

      if (!profesor) {
        throw new NotFoundException(`Profesor con ID #${updateTituloDto.profesor_id} no existe`);
      }
    }

    return this.prisma.titulo.update({
      where: { id },
      data: updateTituloDto,
    });
  }

  // Eliminar con validación previa
  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.titulo.delete({
      where: { id },
    });
  }
}
