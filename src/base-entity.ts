import { Column } from 'typeorm';

export class BaseEntity {
  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  deletedAt: Date;
}
