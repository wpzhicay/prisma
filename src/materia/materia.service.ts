import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';

@Injectable()
export class MateriaService {
  constructor(private  prisma: PrismaService) {}

  async create(createMateriaDto: CreateMateriaDto) {
    return this.prisma.materia.create({
      data: createMateriaDto,
    });
  }

  async findAll() {
    return this.prisma.materia.findMany({
      include: {
        carrera: true,
        profesor: true,
        cursos: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.materia.findUnique({
      where: { id },
      include: {
        carrera: true,
        profesor: true,
        cursos: true,
      },
    });
  }

  async update(id: number, updateMateriaDto: UpdateMateriaDto) {
    return this.prisma.materia.update({
      where: { id },
      data: updateMateriaDto,
    });
  }

  async remove(id: number) {
    return this.prisma.materia.delete({
      where: { id },
    });
  }
}
