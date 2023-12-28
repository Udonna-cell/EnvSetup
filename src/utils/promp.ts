import prompts from 'prompts';

type ask = {
  type: string,
  name: string,
  message: string
}

async function promp(data: ask[]) {
  const response = await prompts(data);

  // => response => { username, age, about }
};

export default promp