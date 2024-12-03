import { MigrationInterface, QueryRunner } from "typeorm";

export class NewIdsConfig1729731183346 implements MigrationInterface {
    name = 'NewIdsConfig1729731183346'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "studios_countries" DROP CONSTRAINT "FK_a73e12c3d56feb0e4fcea2ff11f"`);
        await queryRunner.query(`ALTER TABLE "studios_countries" DROP CONSTRAINT "FK_94f7d1d5e77c9a1eaf1defd324a"`);
        await queryRunner.query(`ALTER TABLE "countries_languages" DROP CONSTRAINT "FK_9749146ff823ff5eb042dbb5a1d"`);
        await queryRunner.query(`ALTER TABLE "countries_languages" DROP CONSTRAINT "FK_717a2edb5c1369eadcf9e631c8a"`);
        await queryRunner.query(`ALTER TABLE "movies_countries" DROP CONSTRAINT "FK_291fda6c54d1e72412cc0b94bb4"`);
        await queryRunner.query(`ALTER TABLE "movies_countries" DROP CONSTRAINT "FK_c0db25fb12aec0b9cec74fc8423"`);
        await queryRunner.query(`ALTER TABLE "movies_languages" DROP CONSTRAINT "FK_ace5182c3ee07ba09199bf6074f"`);
        await queryRunner.query(`ALTER TABLE "movies_languages" DROP CONSTRAINT "FK_f38039a49cf150e3fec761c10c8"`);
        await queryRunner.query(`ALTER TABLE "movies_genres" DROP CONSTRAINT "FK_4729d9b8d47986f936cb5e9540e"`);
        await queryRunner.query(`ALTER TABLE "movies_genres" DROP CONSTRAINT "FK_ef4fe5a96b6f83e9472bdaefbc5"`);
        await queryRunner.query(`ALTER TABLE "movies_studios" DROP CONSTRAINT "FK_53f72f34036e23aeb1a06e37aed"`);
        await queryRunner.query(`ALTER TABLE "movies_studios" DROP CONSTRAINT "FK_6ef96ca6af7d30ce28fcae730bc"`);
        await queryRunner.query(`ALTER TABLE "studios" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "languages" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "releases" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "crews" DROP CONSTRAINT "FK_1b81ea5906402998cd8f715cced"`);
        await queryRunner.query(`ALTER TABLE "persons" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "crews" DROP CONSTRAINT "FK_efe41c25d0cacca5eb1314115f9"`);
        await queryRunner.query(`ALTER TABLE "functions" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "crews" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "genres" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "releases" DROP CONSTRAINT "FK_d4cf16a3dec254312d169efe08f"`);
        await queryRunner.query(`ALTER TABLE "crews" DROP CONSTRAINT "FK_d3c6d7d8fbeb99619c11dbebb94"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_563501cf3faa75a1ca40be84f82"`);
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "profiles" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP CONSTRAINT "FK_9e432b7df0d182f8d292902d1a2"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_728447781a30bc3fcfe5c2f1cdf"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "releases" ADD CONSTRAINT "FK_d4cf16a3dec254312d169efe08f" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "crews" ADD CONSTRAINT "FK_1b81ea5906402998cd8f715cced" FOREIGN KEY ("person_id") REFERENCES "persons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "crews" ADD CONSTRAINT "FK_d3c6d7d8fbeb99619c11dbebb94" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "crews" ADD CONSTRAINT "FK_efe41c25d0cacca5eb1314115f9" FOREIGN KEY ("function_id") REFERENCES "functions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_563501cf3faa75a1ca40be84f82" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_728447781a30bc3fcfe5c2f1cdf" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD CONSTRAINT "FK_9e432b7df0d182f8d292902d1a2" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "studios_countries" ADD CONSTRAINT "FK_94f7d1d5e77c9a1eaf1defd324a" FOREIGN KEY ("studio_id") REFERENCES "studios"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "studios_countries" ADD CONSTRAINT "FK_a73e12c3d56feb0e4fcea2ff11f" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movies_studios" ADD CONSTRAINT "FK_6ef96ca6af7d30ce28fcae730bc" FOREIGN KEY ("studio_id") REFERENCES "studios"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "movies_studios" ADD CONSTRAINT "FK_53f72f34036e23aeb1a06e37aed" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "countries_languages" ADD CONSTRAINT "FK_717a2edb5c1369eadcf9e631c8a" FOREIGN KEY ("language_id") REFERENCES "languages"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "countries_languages" ADD CONSTRAINT "FK_9749146ff823ff5eb042dbb5a1d" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movies_languages" ADD CONSTRAINT "FK_f38039a49cf150e3fec761c10c8" FOREIGN KEY ("language_id") REFERENCES "languages"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "movies_languages" ADD CONSTRAINT "FK_ace5182c3ee07ba09199bf6074f" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
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
        await queryRunner.query(`ALTER TABLE "movies_languages" DROP CONSTRAINT "FK_ace5182c3ee07ba09199bf6074f"`);
        await queryRunner.query(`ALTER TABLE "movies_languages" DROP CONSTRAINT "FK_f38039a49cf150e3fec761c10c8"`);
        await queryRunner.query(`ALTER TABLE "countries_languages" DROP CONSTRAINT "FK_9749146ff823ff5eb042dbb5a1d"`);
        await queryRunner.query(`ALTER TABLE "countries_languages" DROP CONSTRAINT "FK_717a2edb5c1369eadcf9e631c8a"`);
        await queryRunner.query(`ALTER TABLE "movies_studios" DROP CONSTRAINT "FK_53f72f34036e23aeb1a06e37aed"`);
        await queryRunner.query(`ALTER TABLE "movies_studios" DROP CONSTRAINT "FK_6ef96ca6af7d30ce28fcae730bc"`);
        await queryRunner.query(`ALTER TABLE "studios_countries" DROP CONSTRAINT "FK_a73e12c3d56feb0e4fcea2ff11f"`);
        await queryRunner.query(`ALTER TABLE "studios_countries" DROP CONSTRAINT "FK_94f7d1d5e77c9a1eaf1defd324a"`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP CONSTRAINT "FK_9e432b7df0d182f8d292902d1a2"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_728447781a30bc3fcfe5c2f1cdf"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_563501cf3faa75a1ca40be84f82"`);
        await queryRunner.query(`ALTER TABLE "crews" DROP CONSTRAINT "FK_efe41c25d0cacca5eb1314115f9"`);
        await queryRunner.query(`ALTER TABLE "crews" DROP CONSTRAINT "FK_d3c6d7d8fbeb99619c11dbebb94"`);
        await queryRunner.query(`ALTER TABLE "crews" DROP CONSTRAINT "FK_1b81ea5906402998cd8f715cced"`);
        await queryRunner.query(`ALTER TABLE "releases" DROP CONSTRAINT "FK_d4cf16a3dec254312d169efe08f"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_728447781a30bc3fcfe5c2f1cdf" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD CONSTRAINT "FK_9e432b7df0d182f8d292902d1a2" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "profiles" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_563501cf3faa75a1ca40be84f82" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "crews" ADD CONSTRAINT "FK_d3c6d7d8fbeb99619c11dbebb94" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "releases" ADD CONSTRAINT "FK_d4cf16a3dec254312d169efe08f" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "genres" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "crews" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "functions" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "crews" ADD CONSTRAINT "FK_efe41c25d0cacca5eb1314115f9" FOREIGN KEY ("function_id") REFERENCES "functions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "persons" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "crews" ADD CONSTRAINT "FK_1b81ea5906402998cd8f715cced" FOREIGN KEY ("person_id") REFERENCES "persons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "releases" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "languages" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "studios" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "movies_studios" ADD CONSTRAINT "FK_6ef96ca6af7d30ce28fcae730bc" FOREIGN KEY ("studio_id") REFERENCES "studios"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "movies_studios" ADD CONSTRAINT "FK_53f72f34036e23aeb1a06e37aed" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movies_genres" ADD CONSTRAINT "FK_ef4fe5a96b6f83e9472bdaefbc5" FOREIGN KEY ("genre_id") REFERENCES "genres"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "movies_genres" ADD CONSTRAINT "FK_4729d9b8d47986f936cb5e9540e" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movies_languages" ADD CONSTRAINT "FK_f38039a49cf150e3fec761c10c8" FOREIGN KEY ("language_id") REFERENCES "languages"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "movies_languages" ADD CONSTRAINT "FK_ace5182c3ee07ba09199bf6074f" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movies_countries" ADD CONSTRAINT "FK_c0db25fb12aec0b9cec74fc8423" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "movies_countries" ADD CONSTRAINT "FK_291fda6c54d1e72412cc0b94bb4" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "countries_languages" ADD CONSTRAINT "FK_717a2edb5c1369eadcf9e631c8a" FOREIGN KEY ("language_id") REFERENCES "languages"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "countries_languages" ADD CONSTRAINT "FK_9749146ff823ff5eb042dbb5a1d" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "studios_countries" ADD CONSTRAINT "FK_94f7d1d5e77c9a1eaf1defd324a" FOREIGN KEY ("studio_id") REFERENCES "studios"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "studios_countries" ADD CONSTRAINT "FK_a73e12c3d56feb0e4fcea2ff11f" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
