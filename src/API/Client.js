// I was going to use this structure and refactor away from ./init.js but it'd take too long to do within the time frame and init.js works fine anyway.

import axios from 'axios';

const DEV_URL = 'http://localhost:5000';
const PROD_URL = '';

const baseUrl = process.env.NODE_ENV === 'development' ? DEV_URL : PROD_URL;

const client = axios.create({
    baseUrl,
    timeout: 1000
});

export default client;
