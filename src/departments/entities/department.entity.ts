import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Course } from '../../courses/entities/course.entity';
import { Institute } from 'src/institutes/entities/institute.entity';
import { BaseEntity } from '../../base-entity';

@Entity()
export class Department extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  abbr: string;

  @Column()
  category: string;

  @ManyToOne(() => Institute, (institute) => institute.departments)
  institute: Institute;

  @OneToMany(() => Course, (course) => course.department)
  courses: Course[];
}
