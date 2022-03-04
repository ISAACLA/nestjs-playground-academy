import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class relationshipInstitutesDepartments1643690861791
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'department',
      new TableColumn({
        name: 'instituteId',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'department',
      new TableForeignKey({
        columnNames: ['instituteId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'institute',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('department');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('instituteId') !== -1,
    );

    await queryRunner.dropForeignKey('department', foreignKey);
    await queryRunner.dropColumn('department', 'instituteId');
  }
}
