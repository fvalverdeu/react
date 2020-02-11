import axios from 'axios'
import { async } from 'q';

const API = ''

export const jokeGenerator = async() => {
    const response = await axios.get(API)<
    console.log(response);
}