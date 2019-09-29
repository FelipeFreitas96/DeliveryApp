import axios from 'axios';

const api = axios.create({
  baseURL: 'http://webservice.correios.com.br/service/rest/rastro/rastroMobile',
});

export default api;
