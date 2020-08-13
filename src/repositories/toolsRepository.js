import axios from 'axios';
import config from '../config';

const TOOLS_URL = `${config.URL_BACKEND}/tools`;

const getAll = () => axios.get(TOOLS_URL)
  .then((response) => response.data)
  .catch((err) => console.error(err));

const getByTerm = (term) => axios.get(`${TOOLS_URL}?q=${term}`)
  .then((response) => response.data)
  .catch((err) => console.error(err));

const getByTag = (term) => axios.get(`${TOOLS_URL}?tags_like=${term}`)
  .then((response) => response.data)
  .catch((err) => console.error(err));

const save = (tool) => axios.post(`${TOOLS_URL}`, tool)
  .then((response) => response.data)
  .catch((err) => console.error(err));

const remove = (idTool) => axios.delete(`${TOOLS_URL}/${idTool}`)
  .then((response) => response)
  .catch((err) => console.error(err));

export default {
  getAll,
  getByTerm,
  getByTag,
  save,
  remove,
};
