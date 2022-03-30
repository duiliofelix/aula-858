import axios from 'axios';

axios.get('http://www.google.com')
  .then((response) => {
    console.log(response.data);
  })
  .catch((objErro) => console.error(objErro.message));
