import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FunctionsService } from './functions.service';


@Controller('functions')
export class FunctionsController {
  constructor(private readonly functionsService: FunctionsService) {}

  @Post()
  create(@Body() createFunctionDto) {
    return this.functionsService.create(createFunctionDto);
  }

  @Get()
  findAll() {
    return this.functionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.functionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFunctionDto) {
    return this.functionsService.update(+id, updateFunctionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.functionsService.remove(+id);
  }
}
