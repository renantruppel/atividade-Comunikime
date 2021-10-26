import axios from 'axios';

const baseURL = 'http://localhost:5000'

const instance = axios.create({
  baseURL
});

instance.defaults.headers['Access-Control-Allow-Origin'] = '*';

export default instance;