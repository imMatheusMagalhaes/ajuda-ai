import { Injectable } from '@nestjs/common';
import { CreateContentDto } from '@modules/content/dto/create-content.dto';
import { UpdateContentDto } from '@modules/content/dto/update-content.dto';
import { DatabaseService } from '@infra/database/database.service';
import FindParams from '@app/interfaces/find-params.interface';
import { Content } from '@prisma/client';

@Injectable()
export class ContentService {
  constructor(private database: DatabaseService) {}
  async createContent(data: CreateContentDto) {
    return this.database.content.create({ data });
  }

  async findAllContents(params: FindParams<Content> = {}): Promise<Content[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.database.content.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOneContent(id: string): Promise<Content | null> {
    return this.database.content.findUnique({
      where: {
        id,
      },
    });
  }

  async updateContent(id: string, data: UpdateContentDto) {
    return this.database.content.update({
      data,
      where: {
        id,
      },
    });
  }

  async removeContent(id: string) {
    return this.database.content.delete({
      where: { id },
    });
  }
}
