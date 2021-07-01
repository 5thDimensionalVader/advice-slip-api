import axios from "axios";
// necessary definitions
const baseURL = `https://api.adviceslip.com/advice`;

const repeat = (char, times) => {
  console.log(char.repeat(times));
};

const getRandomAdvice = (url) => {
    axios.get(url)
    .then(res => {
      const advice = res.data.slip['advice'];
      repeat('-', advice.length);
      console.log(`\nAdvice >> ${advice}\nfinished loading ... `);
      repeat('-', advice.length);
    })
    .catch(error => {console.log(error)});
}

const getAdviceQuery = (url) => {
    axios.get(url)
    .then(res => {
      if(res.data.hasOwnProperty('slips')=== true){
      const query = res.data.query;
      const slip_arr = res.data.slips;

      slip_arr.forEach(advice=> {
        repeat('-', advice['advice'].length);
        console.log(`Query >> ${query}\nAdvice >> ${advice['advice']}\nDate >> ${advice['date']}`);
        repeat('-', advice['advice'].length);
      });
    } else {
      const msg = res.data.message['text'.toLowerCase()];
      const type = res.data.message['type'];
      console.log(`\n${type}: ${msg}\n`);
    }
  
  })
    .catch(error => console.log(error));
  }
export { baseURL, getRandomAdvice, getAdviceQuery };