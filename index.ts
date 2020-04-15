import inquirer from 'inquirer';
import chalkPipe from 'chalk-pipe';

const questions = [
  {
    type: 'input',
    name: 'firstName',
    message: "What's your first name",
    default: function () {
      return 'Mike';
    },
  },
  {
    type: 'input',
    name: 'lastName',
    message: "What's your last name",
    default: function () {
      return 'van Peeren';
    },
  },
];

inquirer.prompt(questions).then((answers: any) => {
  const resultString = `Your name is: ${answers.firstName} ${answers.lastName}`;
  console.log(chalkPipe('green')(resultString));
});
