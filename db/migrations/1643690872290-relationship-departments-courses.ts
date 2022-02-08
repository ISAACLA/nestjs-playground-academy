import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class relationshipDepartmentsCourses1643690872290
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'course',
      new TableColumn({
        name: 'departmentId',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'course',
      new TableForeignKey({
        columnNames: ['departmentId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'department',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('course');
    const foreignKey = table.foreignKeys.find(
      (foreignKey) => foreignKey.columnNames.indexOf('departmentId') !== -1,
    );

    await queryRunner.dropForeignKey('course', foreignKey);
    await queryRunner.dropColumn('course', 'departmentId');
  }
}
