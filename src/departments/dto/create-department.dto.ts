import { IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Institute } from "../../entities/institute.entity";
import { Type } from "class-transformer";

export class CreateDepartmentDto {
  @ApiProperty()
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

  @ApiPropertyOptional({ type: Institute })
  @IsOptional()
  @Type(() => Institute)
  @ValidateNested()
  institute: Institute;
}
