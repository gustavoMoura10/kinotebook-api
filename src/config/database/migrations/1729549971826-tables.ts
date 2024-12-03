import { MigrationInterface, QueryRunner } from "typeorm";

export class Tables1729549971826 implements MigrationInterface {
    name = 'Tables1729549971826'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "profiles" ("id" uuid NOT NULL, "first_name" character varying(50) NOT NULL, "last_name" character varying(50) NOT NULL, "birthdate" TIMESTAMP NOT NULL, "bio" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "user_id" uuid, CONSTRAINT "REL_9e432b7df0d182f8d292902d1a" UNIQUE ("user_id"), CONSTRAINT "PK_8e520eb4da7dc01d0e190447c8e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "languages" ("id" uuid NOT NULL, "name" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_b517f827ca496b29f4d549c631d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "studios" ("id" uuid NOT NULL, "name" character varying(150) NOT NULL, "description" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_76ff398ef5041c4b42618ed6111" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "countries" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "code" character varying(3) NOT NULL, "flag" character varying(500), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "UQ_b47cbb5311bad9c9ae17b8c1eda" UNIQUE ("code"), CONSTRAINT "PK_b2d7006793e8697ab3ae2deff18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "releases" ("id" uuid NOT NULL, "date" TIMESTAMP NOT NULL, "country_id" uuid, "movie_id" uuid, CONSTRAINT "PK_6b6fc2599a5a281dd44a7d64016" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "persons" ("id" uuid NOT NULL, "full_name" character varying(150) NOT NULL, "birthdate" TIMESTAMP NOT NULL, "deathdate" TIMESTAMP, "bio" text, "image" character varying(500), "homepage" character varying(500), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_74278d8812a049233ce41440ac7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "functions" ("id" uuid NOT NULL, "name" character varying(100) NOT NULL, "description" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_203889d2ae5a98ffc137739301e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "crews" ("id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "person_id" uuid, "movie_id" uuid, "function_id" uuid, CONSTRAINT "PK_4316f43ffc0d2bbb0c4c767ba5c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "genres" ("id" uuid NOT NULL, "name" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_80ecd718f0f00dde5d77a9be842" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "movies" ("id" uuid NOT NULL, "title" character varying(250) NOT NULL, "official_release" TIMESTAMP, "synopsis" text, "description" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reviews" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment" text NOT NULL, "stars" double precision NOT NULL DEFAULT '0', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "movie_id" uuid, "user_id" uuid, CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL, "username" character varying(50) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(255) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "countries_languages" ("language_id" uuid NOT NULL, "country_id" uuid NOT NULL, CONSTRAINT "PK_6b31aaa9b25b6ede3702b70eda4" PRIMARY KEY ("language_id", "country_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_717a2edb5c1369eadcf9e631c8" ON "countries_languages" ("language_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_9749146ff823ff5eb042dbb5a1" ON "countries_languages" ("country_id") `);
        await queryRunner.query(`CREATE TABLE "movies_languages" ("language_id" uuid NOT NULL, "movie_id" uuid NOT NULL, CONSTRAINT "PK_9484dd061abd71fb889df64495a" PRIMARY KEY ("language_id", "movie_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f38039a49cf150e3fec761c10c" ON "movies_languages" ("language_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_ace5182c3ee07ba09199bf6074" ON "movies_languages" ("movie_id") `);
        await queryRunner.query(`CREATE TABLE "studios_countries" ("studio_id" uuid NOT NULL, "country_id" uuid NOT NULL, CONSTRAINT "PK_dcb06fcf6876b2e0b5b788ec8ae" PRIMARY KEY ("studio_id", "country_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_94f7d1d5e77c9a1eaf1defd324" ON "studios_countries" ("studio_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_a73e12c3d56feb0e4fcea2ff11" ON "studios_countries" ("country_id") `);
        await queryRunner.query(`CREATE TABLE "movies_studios" ("studio_id" uuid NOT NULL, "movie_id" uuid NOT NULL, CONSTRAINT "PK_a4b3439ae544679dc4128731b0f" PRIMARY KEY ("studio_id", "movie_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6ef96ca6af7d30ce28fcae730b" ON "movies_studios" ("studio_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_53f72f34036e23aeb1a06e37ae" ON "movies_studios" ("movie_id") `);
        await queryRunner.query(`CREATE TABLE "movies_countries" ("country_id" uuid NOT NULL, "movie_id" uuid NOT NULL, CONSTRAINT "PK_7a5896b2b868b6edaf0a384cdaf" PRIMARY KEY ("country_id", "movie_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c0db25fb12aec0b9cec74fc842" ON "movies_countries" ("country_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_291fda6c54d1e72412cc0b94bb" ON "movies_countries" ("movie_id") `);
        await queryRunner.query(`CREATE TABLE "movies_genres" ("genre_id" uuid NOT NULL, "movie_id" uuid NOT NULL, CONSTRAINT "PK_f880d4307800f050c252966573e" PRIMARY KEY ("genre_id", "movie_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ef4fe5a96b6f83e9472bdaefbc" ON "movies_genres" ("genre_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_4729d9b8d47986f936cb5e9540" ON "movies_genres" ("movie_id") `);
        await queryRunner.query(`ALTER TABLE "profiles" ADD CONSTRAINT "FK_9e432b7df0d182f8d292902d1a2" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "releases" ADD CONSTRAINT "FK_f6047ed54008b5ccd746f13378e" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "releases" ADD CONSTRAINT "FK_d4cf16a3dec254312d169efe08f" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "crews" ADD CONSTRAINT "FK_1b81ea5906402998cd8f715cced" FOREIGN KEY ("person_id") REFERENCES "persons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "crews" ADD CONSTRAINT "FK_d3c6d7d8fbeb99619c11dbebb94" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "crews" ADD CONSTRAINT "FK_efe41c25d0cacca5eb1314115f9" FOREIGN KEY ("function_id") REFERENCES "functions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_563501cf3faa75a1ca40be84f82" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_728447781a30bc3fcfe5c2f1cdf" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "countries_languages" ADD CONSTRAINT "FK_717a2edb5c1369eadcf9e631c8a" FOREIGN KEY ("language_id") REFERENCES "languages"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "countries_languages" ADD CONSTRAINT "FK_9749146ff823ff5eb042dbb5a1d" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movies_languages" ADD CONSTRAINT "FK_f38039a49cf150e3fec761c10c8" FOREIGN KEY ("language_id") REFERENCES "languages"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "movies_languages" ADD CONSTRAINT "FK_ace5182c3ee07ba09199bf6074f" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "studios_countries" ADD CONSTRAINT "FK_94f7d1d5e77c9a1eaf1defd324a" FOREIGN KEY ("studio_id") REFERENCES "studios"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "studios_countries" ADD CONSTRAINT "FK_a73e12c3d56feb0e4fcea2ff11f" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movies_studios" ADD CONSTRAINT "FK_6ef96ca6af7d30ce28fcae730bc" FOREIGN KEY ("studio_id") REFERENCES "studios"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "movies_studios" ADD CONSTRAINT "FK_53f72f34036e23aeb1a06e37aed" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movies_countries" ADD CONSTRAINT "FK_c0db25fb12aec0b9cec74fc8423" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "movies_countries" ADD CONSTRAINT "FK_291fda6c54d1e72412cc0b94bb4" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movies_genres" ADD CONSTRAINT "FK_ef4fe5a96b6f83e9472bdaefbc5" FOREIGN KEY ("genre_id") REFERENCES "genres"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "movies_genres" ADD CONSTRAINT "FK_4729d9b8d47986f936cb5e9540e" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies_genres" DROP CONSTRAINT "FK_4729d9b8d47986f936cb5e9540e"`);
        await queryRunner.query(`ALTER TABLE "movies_genres" DROP CONSTRAINT "FK_ef4fe5a96b6f83e9472bdaefbc5"`);
        await queryRunner.query(`ALTER TABLE "movies_countries" DROP CONSTRAINT "FK_291fda6c54d1e72412cc0b94bb4"`);
        await queryRunner.query(`ALTER TABLE "movies_countries" DROP CONSTRAINT "FK_c0db25fb12aec0b9cec74fc8423"`);
        await queryRunner.query(`ALTER TABLE "movies_studios" DROP CONSTRAINT "FK_53f72f34036e23aeb1a06e37aed"`);
        await queryRunner.query(`ALTER TABLE "movies_studios" DROP CONSTRAINT "FK_6ef96ca6af7d30ce28fcae730bc"`);
        await queryRunner.query(`ALTER TABLE "studios_countries" DROP CONSTRAINT "FK_a73e12c3d56feb0e4fcea2ff11f"`);
        await queryRunner.query(`ALTER TABLE "studios_countries" DROP CONSTRAINT "FK_94f7d1d5e77c9a1eaf1defd324a"`);
        await queryRunner.query(`ALTER TABLE "movies_languages" DROP CONSTRAINT "FK_ace5182c3ee07ba09199bf6074f"`);
        await queryRunner.query(`ALTER TABLE "movies_languages" DROP CONSTRAINT "FK_f38039a49cf150e3fec761c10c8"`);
        await queryRunner.query(`ALTER TABLE "countries_languages" DROP CONSTRAINT "FK_9749146ff823ff5eb042dbb5a1d"`);
        await queryRunner.query(`ALTER TABLE "countries_languages" DROP CONSTRAINT "FK_717a2edb5c1369eadcf9e631c8a"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_728447781a30bc3fcfe5c2f1cdf"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_563501cf3faa75a1ca40be84f82"`);
        await queryRunner.query(`ALTER TABLE "crews" DROP CONSTRAINT "FK_efe41c25d0cacca5eb1314115f9"`);
        await queryRunner.query(`ALTER TABLE "crews" DROP CONSTRAINT "FK_d3c6d7d8fbeb99619c11dbebb94"`);
        await queryRunner.query(`ALTER TABLE "crews" DROP CONSTRAINT "FK_1b81ea5906402998cd8f715cced"`);
        await queryRunner.query(`ALTER TABLE "releases" DROP CONSTRAINT "FK_d4cf16a3dec254312d169efe08f"`);
        await queryRunner.query(`ALTER TABLE "releases" DROP CONSTRAINT "FK_f6047ed54008b5ccd746f13378e"`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP CONSTRAINT "FK_9e432b7df0d182f8d292902d1a2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4729d9b8d47986f936cb5e9540"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ef4fe5a96b6f83e9472bdaefbc"`);
        await queryRunner.query(`DROP TABLE "movies_genres"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_291fda6c54d1e72412cc0b94bb"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c0db25fb12aec0b9cec74fc842"`);
        await queryRunner.query(`DROP TABLE "movies_countries"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_53f72f34036e23aeb1a06e37ae"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6ef96ca6af7d30ce28fcae730b"`);
        await queryRunner.query(`DROP TABLE "movies_studios"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a73e12c3d56feb0e4fcea2ff11"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_94f7d1d5e77c9a1eaf1defd324"`);
        await queryRunner.query(`DROP TABLE "studios_countries"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ace5182c3ee07ba09199bf6074"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f38039a49cf150e3fec761c10c"`);
        await queryRunner.query(`DROP TABLE "movies_languages"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9749146ff823ff5eb042dbb5a1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_717a2edb5c1369eadcf9e631c8"`);
        await queryRunner.query(`DROP TABLE "countries_languages"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "reviews"`);
        await queryRunner.query(`DROP TABLE "movies"`);
        await queryRunner.query(`DROP TABLE "genres"`);
        await queryRunner.query(`DROP TABLE "crews"`);
        await queryRunner.query(`DROP TABLE "functions"`);
        await queryRunner.query(`DROP TABLE "persons"`);
        await queryRunner.query(`DROP TABLE "releases"`);
        await queryRunner.query(`DROP TABLE "countries"`);
        await queryRunner.query(`DROP TABLE "studios"`);
        await queryRunner.query(`DROP TABLE "languages"`);
        await queryRunner.query(`DROP TABLE "profiles"`);
    }

}
