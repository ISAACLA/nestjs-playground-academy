import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../base-entity';
import { Institute } from './institute.entity';

@Entity()
export class Contact extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  phone: string;

  @Column()
  address1: string;

  @Column()
  address2: string;

  @Column()
  state: string;

  @Column()
  zip: string;

  @Column()
  email: string;

  /*
   * This is un-directional, uncomment the following can make it bi-directional;
   * */
  @OneToOne(() => Institute, (institute) => institute.contact)
  institute: Institute;
}
