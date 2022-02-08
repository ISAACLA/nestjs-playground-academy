import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class relationshipCourseStudent1643698393603
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'students_courses',
        columns: [
          {
            name: 'student_id',
            type: 'uuid',
          },
          {
            name: 'course_id',
            type: 'uuid',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'students_courses',
      new TableForeignKey({
        columnNames: ['student_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'student',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'students_courses',
      new TableForeignKey({
        columnNames: ['course_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'course',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('students_courses');
    const studentFK = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('student_id') !== -1,
    );
    const courseFK = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('course_id') !== -1,
    );

    await queryRunner.dropForeignKey('students_courses', studentFK);
    await queryRunner.dropForeignKey('students_courses', courseFK);
    await queryRunner.dropTable('students_courses');
  }
}
