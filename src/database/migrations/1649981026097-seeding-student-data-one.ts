import {MigrationInterface, QueryRunner} from "typeorm";

export class seedingStudentDataOne1649981026097 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.query(
      `
                INSERT INTO 
                student(
                    id,
                    "firstName",
                    "lastName",
                    "email",
                    "bod",
                    "deletedAt",
                    "createdAt",
                    "updatedAt"
                )
                VALUES(
                    '66E97530-4A2E-489E-83F6-DB143DF1616E',
                    'Isaac',
                    'La',
                    'isaacla@email.com',
                    '1987-02-04',
                    null,
                    '2022-01-01',
                    '2022-01-01' 
                ), (
                    'D8AF0415-3012-4EE3-BE13-85A77A3E6CA4',
                    'Rong',
                    'Ma',
                    'rongma@email.com',
                    '1992-09-26',
                    null,
                    '2022-02-01',
                    '2022-02-01' 
                ), (
                    '22e02c16-9128-4b7f-a6f0-dd1aa08e958f',
                    'Maysun',
                    'La',
                    'maysunla@email.com',
                    '2005-05-25',
                    null,
                    '2022-04-01',
                    '2022-04-01' 
                )

            `
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.query(
          `DELETE FROM students WHERE id = '66E97530-4A2E-489E-83F6-DB143DF1616E'`
        );
    }

}
