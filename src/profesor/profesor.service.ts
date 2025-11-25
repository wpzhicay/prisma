import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';

@Injectable()
export class ProfesorService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProfesorDto: CreateProfesorDto) {
    return this.prisma.profesor.create({
      data: createProfesorDto,
    });
  }

  async findAll() {
    return this.prisma.profesor.findMany({
      include: {
        carrera: true,
        materias: true,
        titulos: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.profesor.findUnique({
      where: { id },
      include: {
        carrera: true,
        materias: true,
        titulos: true,
      },
    });
  }

  async update(id: number, updateProfesorDto: UpdateProfesorDto) {
    return this.prisma.profesor.update({
      where: { id },
      data: updateProfesorDto,
    });
  }

  async remove(id: number) {
    return this.prisma.profesor.delete({
      where: { id },
    });
  }
}
