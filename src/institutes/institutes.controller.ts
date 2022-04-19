import {
  Body,
  Controller,
  Delete,
  Get,
  Param, ParseUUIDPipe,
  Patch,
  Post
} from "@nestjs/common";
import { InstitutesService } from './institutes.service';
import { CreateInstituteDto } from './dto/create-institute.dto';
import { UpdateInstituteDto } from './dto/update-institute.dto';

@Controller('institutes')
export class InstitutesController {
  constructor(private readonly institutesService: InstitutesService) {}

  @Post()
  create(@Body() newInstituteDto: CreateInstituteDto) {
    return this.institutesService.create(newInstituteDto);
  }

  @Get()
  findAll() {
    return this.institutesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.institutesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateInstituteDto: UpdateInstituteDto,
  ) {
    return this.institutesService.update(id, updateInstituteDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.institutesService.remove(id);
  }
}
