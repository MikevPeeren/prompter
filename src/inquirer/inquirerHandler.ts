// Externals
import inquirer from 'inquirer';

// Helpers
import { getEnvironment, addExitOption } from './utils/options';

// Other Prompts
import { getMigrationOptions } from './migrations/index';

const commands = [
  { name: 'Migrations', value: 'Migrations' },
  { name: 'Cron Jobs', value: 'Cron Jobs' },
  { name: 'Cleanup', value: 'Cleanup' },
];

/**
 * Main parser, handles everything.
 */
export const parser = async () => {
  const environmentResult = await getEnvironment({});

  console.log(
    `You have chosen the following environment: ${environmentResult.environment}`,
  );

  const commandsWithExit = addExitOption(commands);

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'command',
        message: 'Select one of the following Menus:',
        choices: commandsWithExit,
      },
    ])
    .then((choice: any) => choice.command)
    .then(async (command) => {
      console.log(`Showing the following menu: ${command}`);

      if (command === 'Migrations')
        await getMigrationOptions(environmentResult);
    });
};
