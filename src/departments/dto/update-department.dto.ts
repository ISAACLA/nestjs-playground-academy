import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartmentDto } from './create-department.dto';
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { Institute } from "../../entities/institute.entity";
import { Type } from "class-transformer";
import { CreateInstituteDto } from "../../institutes/dto/create-institute.dto";

export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {
  @ApiProperty({ example: 'title' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  abbr: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  category: string;

  @ApiPropertyOptional({ type: CreateInstituteDto })
  @IsOptional()
  @Type(() => CreateInstituteDto)
  @ValidateNested()
  institute: Institute;
}
