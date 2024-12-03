import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIdCoverPhoto1733195011545 implements MigrationInterface {
    name = 'AddIdCoverPhoto1733195011545'

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
        await queryRunner.query(`ALTER TABLE "movies" ADD "cover_photo" character varying(500) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "official_release" SET NOT NULL`);
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
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "official_release" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "cover_photo"`);
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
