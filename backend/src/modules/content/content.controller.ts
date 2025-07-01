import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ContentService } from '@modules/content/content.service';
import { CreateContentDto } from '@modules/content/dto/create-content.dto';
import { UpdateContentDto } from '@modules/content/dto/update-content.dto';
import FindParams from '@app/interfaces/find-params.interface';
import { Content } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller('content')
@UseGuards(AuthGuard('jwt'))
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Post()
  create(@Body() createContentDto: CreateContentDto) {
    return this.contentService.createContent(createContentDto);
  }

  @Get()
  findAll(@Body() params: FindParams<Content> = {}) {
    return this.contentService.findAllContents(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contentService.findOneContent(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContentDto: UpdateContentDto) {
    return this.contentService.updateContent(id, updateContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contentService.removeContent(id);
  }
}
