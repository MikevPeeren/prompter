// Constants
import { fakeMigrationList } from '../constants/migrations';

/**
 * For every second execute a migration.
 */
export const executeAllMigrations = () => {
  fakeMigrationList.forEach((migration, index) => {
    setTimeout(() => {
      console.log(`Migrating the following migration: ${migration}`);
    }, index * 1000);
  });
};
