import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class relationshipInstitutesContacts1643669049216
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'institute',
      new TableColumn({
        name: 'contactId',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'institute',
      new TableForeignKey({
        columnNames: ['contactId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'contact',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('institute');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('contactId') !== -1,
    );
    await queryRunner.dropForeignKey('institute', foreignKey);
    await queryRunner.dropColumn('institute', 'contactId');
  }
}
