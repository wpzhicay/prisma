import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
import { Carrera } from '@prisma/client';

@Injectable()
export class CarreraService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCarreraDto: CreateCarreraDto): Promise<Carrera> {
    return this.prisma.carrera.create({
      data: createCarreraDto,
    });
  }

  async findAll(): Promise<Carrera[]> {
    return this.prisma.carrera.findMany();
  }

  async findOne(id: number): Promise<Carrera> {
    const carrera = await this.prisma.carrera.findUnique({
      where: { id },
    });
    if (!carrera) throw new NotFoundException(`Carrera con ID ${id} no encontrada`);
    return carrera;
  }

  async update(id: number, updateCarreraDto: UpdateCarreraDto): Promise<Carrera> {
    return this.prisma.carrera.update({
      where: { id },
      data: updateCarreraDto,
    });
  }

  async remove(id: number): Promise<Carrera> {
    return this.prisma.carrera.delete({
      where: { id },
    });
  }
}
