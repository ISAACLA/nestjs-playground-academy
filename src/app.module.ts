import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ContactsModule } from './contacts/contacts.module';
import { CoursesModule } from './courses/courses.module';
import { DepartmentsModule } from './departments/departments.module';
import { InstitutesModule } from './institutes/institutes.module';
import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormConfig from './database/ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ormConfig),
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
