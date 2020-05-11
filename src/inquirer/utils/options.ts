// Externals
import inquirer from 'inquirer';

// Parser
import { parser } from '../inquirerHandler';

// Constants
import { environmentChoices } from '../constants/environments';

/**
 * Asks for which Environment we are going to execute commands.
 * @param options
 */
export const getEnvironment = async (options: any) => {
  const choice = await inquirer.prompt([
    {
      type: 'list',
      name: 'environment',
      message: 'Which environment do you wish to select?',
      default: environmentChoices[0].value,
      choices: environmentChoices,
    },
  ]);

  const environment = choice.environment;

  return Object.assign({}, options, { environment });
};

/**
 * Add exit option to return to the Main Menu
 * @param choices
 */
export const addExitOption = (choices: any) => {
  const exitTask = {
    name: 'Exit',
    handle: () => {
      parser();
    },
  };

  return choices.concat([
    new inquirer.Separator(),
    exitTask,
    new inquirer.Separator(),
  ]);
};
