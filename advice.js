import { baseURL, getRandomAdvice, getAdviceQuery } from "./advice_modules.js";
import PromptSync from "prompt-sync";

// const definitions
const prompt = PromptSync({ sigint: true });

const options = prompt("Select an option\n1. Random Advice\n2. Query Advice\nPlease, select an option >> ");

switch (options) {
  case '1':
    console.log('\nloading ...')
    getRandomAdvice(baseURL);
    break;

  case '2':
    const searchQuery = prompt('Input query value >> ')
    const search_url = baseURL+`/search/${searchQuery}`;
    getAdviceQuery(search_url);
    break;

  default:
    console.log(`Not an option, try again!`);
    break;
}