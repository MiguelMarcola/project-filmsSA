import { Controller, Get, Post, Query } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { skip } from 'rxjs';
import { FilmsByApiFechingDto } from './dto/films-by-api-feching.dto';
import { FindFilmsDto } from './dto/find-films.dto';
import { Films } from './entities/filme.entity';
import { FilmesService } from './filmes.service';

@Controller('api/v1/filmes')
@ApiTags('Films')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'created',
  })
  @ApiResponse({
    status: 400,
    description: 'no new data to insert',
  })
  @ApiResponse({
    status: 503,
    description: 'Api films is not work',
  })
  create() {
    return this.filmesService.create();
  }

  @Get()
  @ApiOkResponse({
    schema: {
      allOf: [
        {
          properties: {
            data: {
              type: 'array',
              example: [
                {
                  id: 'f44aa963-e642-4e55-bdec-1f257ebcd05e',
                  idRef: '90b72513-afd4-4570-84de-a56c312fdf81',
                  title: 'The Cat Returns',
                  image:
                    'https://image.tmdb.org/t/p/w600_and_h900_bestv2/avPMO5cnaGHgLaNiAIhy33WoQLm.jpg',
                  descricao:
                    'Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed',
                  director: 'Hiroyuki Morita',
                  producer: 'Toshio Suzuki',
                  releaseDate: '2002',
                  rtScore: 89,
                },
              ],
            },
            count: { type: 'number' },
          },
        },
      ],
    },
  })
  findAll(@Query('skip') findFilmsDto: FindFilmsDto) {
    return this.filmesService.findAll(findFilmsDto);
  }
}
