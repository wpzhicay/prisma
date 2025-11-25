import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';

@Controller('profesor')
export class ProfesorController {
  constructor(private readonly profesorService: ProfesorService) {}

  @Post()
 async create(@Body() createProfesorDto: CreateProfesorDto) {
    return this.profesorService.create(createProfesorDto);
  }

  @Get()
  async findAll() {
    return this.profesorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.profesorService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProfesorDto: UpdateProfesorDto) {
    return this.profesorService.update(+id, updateProfesorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.profesorService.remove(+id);
  }
}
