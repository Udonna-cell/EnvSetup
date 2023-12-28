import promp from "./utils/promp.js";

type ask = {
  type: string,
  name: string,
  message: string
}
const questions: ask[] = [
  {
    type: 'select',
    name: 'username',
    message: 'What is your GitHub username?'
  },
  {
    type: 'number',
    name: 'age',
    message: 'How old are you?'
  },
  {
    type: 'text',
    name: 'about',
    message: 'Tell something about yourself',
    initial: 'Why should I?'
  }
];

function app(data: string[]) {
  promp(questions)
}
export default app