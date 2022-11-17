import {
  BadRequestException,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { apiFilms } from 'src/service/apiFilms';
import { fiels } from 'src/utils/fields-to-feching';
import { Repository } from 'typeorm';
import { FilmsByApiFechingDto } from './dto/films-by-api-feching.dto';
import { Films } from './entities/filme.entity';
import * as uuid from 'uuid';

@Injectable()
export class FilmesService {
  constructor(@InjectRepository(Films) private repository: Repository<Films>) {}

  async create() {
    const films: FilmsByApiFechingDto[] = await this.fechingOnApi();
    const NotSavedFilm = await this.findByIdRef(films);

    if (!NotSavedFilm[0]) {
      throw new BadRequestException('no new data to insert');
    }

    const filmsSaved = NotSavedFilm.map((film) => {
      return this.repository.create({
        id: uuid.v4(),
        idRef: film.id,
        title: film.title,
        image: film.image,
        director: film.director,
        descricao: film.description,
        producer: film.producer,
        releaseDate: film.release_date,
        rtScore: parseInt(film.rt_score),
      });
    });

    await this.repository.save(filmsSaved);
  }

  async findAll({ skip = 0 }) {
    const take = 10;
    const [result, total] = await this.repository.findAndCount({
      order: { id: 'DESC' },
      take,
      skip,
    });

    return {
      data: result,
      count: total,
    };
  }

  async findByIdRef(films: FilmsByApiFechingDto[]) {
    const response = [];
    for (let i = 0; i < films.length; i++) {
      const isExist = await this.repository.findOne({
        where: { idRef: films[i].id },
      });
      if (!isExist) {
        response.push(films[i]);
      }
    }

    return response;
  }

  private async fechingOnApi(): Promise<FilmsByApiFechingDto[]> {
    const apiResponse = await apiFilms
      .get(`films?fields=${fiels}&limit=50`)
      .then((response) => response.data)
      .catch(() => {
        throw new ServiceUnavailableException('Api films is not work');
      });

    return apiResponse;
  }
}
