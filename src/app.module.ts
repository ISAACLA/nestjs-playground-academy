import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from './courses/courses.module';
import { DepartmentsModule } from './departments/departments.module';
import { ContactsModule } from './contacts/contacts.module';
import { InstitutesModule } from './institutes/institutes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'playground',
      entities: ['dist/src/**/entities/*.entity.js'],
      synchronize: false,
      autoLoadEntities: true,
      // migrations: ['migrations/*.ts'],
      // cli: { migrationsDir: 'src/migrations' },
      migrations: ['migrations/*.ts'],
      cli: { migrationsDir: 'src/db/migrations' },
      logging: true,
    }),
    UsersModule,
    StudentsModule,
    CoursesModule,
    DepartmentsModule,
    ContactsModule,
    InstitutesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
