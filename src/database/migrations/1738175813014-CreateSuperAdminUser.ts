import * as bcryptjs from 'bcryptjs'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateSuperAdminUser1738175813014 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const saltRounds = 10
        const hashedPassword = await bcryptjs.hash('admin', saltRounds)

        await queryRunner.query(`
                  INSERT INTO users (name, email, password, role, created_at, updated_at)
                  VALUES ('admin', 'admin@admin.com', '${hashedPassword}', 'ADMIN', NOW(), NOW())
              `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
                  DELETE FROM users WHERE email = 'admin@admin.com'
              `)
    }
}
