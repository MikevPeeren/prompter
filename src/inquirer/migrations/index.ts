// Externals
import inquirer from 'inquirer';

// Constants
import { migrationChoices } from '../constants/migrations';

import { executeAllMigrations } from './allMigrationExecutor';

/**
 * Display all Migration Options
 * @param options
 */
export const getMigrationOptions = async (options: any) => {
  await inquirer
    .prompt([
      {
        type: 'list',
        name: 'migrationOption',
        message: 'Select your options:',
        choices: migrationChoices,
      },
    ])
    .then((choice: any) => choice.migrationOption)
    .then((migrationOption) => {
      return migrationOption;
    })
    .then((migrationOption) => {
      console.log(`Executing the following option: ${migrationOption}`);

      if (migrationOption === 'Execute All Migrations') {
        inquirer
          .prompt({
            type: 'confirm',
            name: 'confirmation',
            message: 'Are you sure?',
            default: false,
          })
          .then((choice: any) => {
            if (choice.confirmation) executeAllMigrations();
          });
      }
    })
    .then(() => {
      getMigrationOptions(options);
    });
};
