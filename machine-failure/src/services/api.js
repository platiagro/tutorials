import axios from 'axios';

const post = (url, data) => {
  const pathArray = url.split('/');
  const protocol = pathArray[0];
  const host = pathArray[2];
  const baseURL = protocol + '//' + host;
  const path = pathArray.slice(3).join('/');
  const api = axios.create({
    baseURL: baseURL,
  });
  return api.post(path, data);
};

export { post };
