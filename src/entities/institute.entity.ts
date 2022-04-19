import { Department } from 'src/entities/department.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Contact } from './contact.entity';
import { Course } from './course.entity';
import { BaseEntity } from './base-entity';
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

@Entity()
export class Institute extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  @IsUUID()
  id: string;

  @Column()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @Column()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  subTitle: string;

  @OneToOne(() => Contact, (contact) => contact.institute, {
    onDelete: 'CASCADE',
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  contact: Contact;

  @OneToMany(() => Course, (course) => course.institute)
  courses: Course[];

  @OneToMany(() => Department, (department) => department.institute)
  departments: Department[];
}
