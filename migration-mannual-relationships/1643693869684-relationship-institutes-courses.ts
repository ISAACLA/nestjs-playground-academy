import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class relationshipInstitutesCourses1643693869684
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'course',
      new TableColumn({
        name: 'instituteId',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'course',
      new TableForeignKey({
        columnNames: ['instituteId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'institute',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('course');
    const foreignKey = table.foreignKeys.find(
      (foreignKey) => foreignKey.columnNames.indexOf('instituteId') !== -1,
    );

    await queryRunner.dropForeignKey('course', foreignKey);
    await queryRunner.dropColumn('course', 'instituteId');
  }
}
