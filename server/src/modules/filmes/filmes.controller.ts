import { Controller, Get, Post } from '@nestjs/common';
import { FilmesService } from './filmes.service';

@Controller('api/v1/filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post()
  create() {
    return this.filmesService.create();
  }

  @Get()
  findAll() {
    return this.filmesService.findAll();
  }
}
