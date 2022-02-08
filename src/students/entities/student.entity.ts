import { Course } from 'src/courses/entities/course.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../base-entity';

@Entity({ name: 'student' })
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  bod: Date;

  @Column()
  deleted: boolean;

  @ManyToMany(() => Course, (course) => course.students)
  courses: Course[];
}
