import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CrewsService } from './crews.service';

@Controller('crews')
export class CrewsController {
  constructor(private readonly crewsService: CrewsService) {}

  @Post()
  create(@Body() createCrewDto) {
    return this.crewsService.create(createCrewDto);
  }

  @Get()
  findAll() {
    return this.crewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCrewDto) {
    return this.crewsService.update(+id, updateCrewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crewsService.remove(+id);
  }
}
