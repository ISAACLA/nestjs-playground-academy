import {MigrationInterface, QueryRunner} from "typeorm";

export class schemaInitialize1643788886763 implements MigrationInterface {
    name = 'schemaInitialize1643788886763'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "student" ("createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "deletedAt" TIMESTAMP NOT NULL, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "bod" TIMESTAMP NOT NULL, "deleted" boolean NOT NULL, CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courses" ("createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "deletedAt" TIMESTAMP NOT NULL, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "departmentId" uuid, "instituteId" uuid, CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "department" ("createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "deletedAt" TIMESTAMP NOT NULL, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "abbr" character varying NOT NULL, "category" character varying NOT NULL, "instituteId" uuid, CONSTRAINT "PK_9a2213262c1593bffb581e382f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "institute" ("createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "deletedAt" TIMESTAMP NOT NULL, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "subTitle" character varying NOT NULL, "contactId" uuid, CONSTRAINT "REL_8808c65cd0259fec799b661078" UNIQUE ("contactId"), CONSTRAINT "PK_0805fd7b49c18ad55f0646dcbbb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact" ("createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "deletedAt" TIMESTAMP NOT NULL, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "phone" character varying NOT NULL, "address1" character varying NOT NULL, "address2" character varying NOT NULL, "state" character varying NOT NULL, "zip" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courses_students_student" ("coursesId" uuid NOT NULL, "studentId" uuid NOT NULL, CONSTRAINT "PK_4802a2a8ebddc3f4e72fcf4ac8f" PRIMARY KEY ("coursesId", "studentId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b30acb90333232bb3b6dc1eccb" ON "courses_students_student" ("coursesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2b855ebad6c56b41c857657fec" ON "courses_students_student" ("studentId") `);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_2a26294560102d94bc4c67ecfe5" FOREIGN KEY ("departmentId") REFERENCES "department"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_8fe95c6b7e2de90c5b82f529fd7" FOREIGN KEY ("instituteId") REFERENCES "institute"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "department" ADD CONSTRAINT "FK_1c8bc31989a5719cf37e014bafa" FOREIGN KEY ("instituteId") REFERENCES "institute"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "institute" ADD CONSTRAINT "FK_8808c65cd0259fec799b6610786" FOREIGN KEY ("contactId") REFERENCES "contact"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courses_students_student" ADD CONSTRAINT "FK_b30acb90333232bb3b6dc1eccb8" FOREIGN KEY ("coursesId") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "courses_students_student" ADD CONSTRAINT "FK_2b855ebad6c56b41c857657fec6" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courses_students_student" DROP CONSTRAINT "FK_2b855ebad6c56b41c857657fec6"`);
        await queryRunner.query(`ALTER TABLE "courses_students_student" DROP CONSTRAINT "FK_b30acb90333232bb3b6dc1eccb8"`);
        await queryRunner.query(`ALTER TABLE "institute" DROP CONSTRAINT "FK_8808c65cd0259fec799b6610786"`);
        await queryRunner.query(`ALTER TABLE "department" DROP CONSTRAINT "FK_1c8bc31989a5719cf37e014bafa"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_8fe95c6b7e2de90c5b82f529fd7"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_2a26294560102d94bc4c67ecfe5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2b855ebad6c56b41c857657fec"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b30acb90333232bb3b6dc1eccb"`);
        await queryRunner.query(`DROP TABLE "courses_students_student"`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`DROP TABLE "institute"`);
        await queryRunner.query(`DROP TABLE "department"`);
        await queryRunner.query(`DROP TABLE "courses"`);
        await queryRunner.query(`DROP TABLE "student"`);
    }

}
