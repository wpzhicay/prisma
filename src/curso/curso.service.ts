import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';

@Injectable()
export class CursoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCursoDto: CreateCursoDto) {
    return this.prisma.curso.create({
      data: createCursoDto,
    });
  }

  async findAll() {
    return this.prisma.curso.findMany({
      include: {
        materia: true,
        periodo: true,
        inscripciones: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.curso.findUnique({
      where: { id },
      include: {
        materia: true,
        periodo: true,
        inscripciones: true,
      },
    });
  }

  async update(id: number, updateCursoDto: UpdateCursoDto) {
    return this.prisma.curso.update({
      where: { id },
      data: updateCursoDto,
    });
  }

  async remove(id: number) {
    return this.prisma.curso.delete({
      where: { id },
    });
  }
}
