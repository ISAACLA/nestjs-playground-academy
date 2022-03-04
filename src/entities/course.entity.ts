import { Institute } from 'src/entities/institute.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Department } from './department.entity';
import { BaseEntity } from '../base-entity';
import { Student } from 'src/entities/student.entity';

@Entity({ name: 'courses' })
export class Course extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Department, (department) => department.courses, {
    onDelete: 'SET NULL',
    eager: true,
  })
  department: Department;

  @ManyToOne(() => Institute, (institute) => institute.courses)
  institute: Institute;

  @ManyToMany(() => Student)
  @JoinTable()
  students: Student[];
}
