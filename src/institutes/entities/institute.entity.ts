import { Department } from 'src/departments/entities/department.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Contact } from '../../contacts/entities/contact.entity';
import { Course } from '../../courses/entities/course.entity';
import { BaseEntity } from '../../base-entity';

@Entity()
export class Institute extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
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
