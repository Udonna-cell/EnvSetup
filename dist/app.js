import promp from "./utils/promp.js";
const questions = [
    {
        type: 'text',
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
function app(data) {
    promp(questions);
}
export default app;
