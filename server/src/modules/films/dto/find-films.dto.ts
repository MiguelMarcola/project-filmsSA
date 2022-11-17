import { ApiProperty } from '@nestjs/swagger';

export class FindFilmsDto {
  @ApiProperty({
    required: false,
  })
  skip?: number;
}
