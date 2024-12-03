import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { UpdateLanguageDto } from './dto/update.language.dto';
import { CreateLanguageDto } from './dto/create.language.dto';

@Controller('languages')
export class LanguagesController {
  constructor(private readonly languagesService: LanguagesService) {}

  @Post()
  create(@Body() createLanguageDto: CreateLanguageDto) {
    return this.languagesService.create(createLanguageDto);
  }

  @Get()
  async findAll() {
    const languages = await this.languagesService.findAll();
    return {
      message: 'Languages found successfully',
      body: languages,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const language = await this.languagesService.findOne(id);
    return {
      message: 'Language found successfully',
      body: language,
    };
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLanguageDto: UpdateLanguageDto,
  ) {
    return this.languagesService.update(id, updateLanguageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languagesService.remove(id);
  }
}
