const axios = require("axios").default;
const basicUrl = "https://api.mercadolibre.com";

const getProductsByQuery = async (query) => {
  try {
    return await axios.get(`${basicUrl}/sites/MLA/search?q=${query}&&limit=4`);
  } catch (error) {
    return error;
  }
};

const getProductById = async (id) => {
  try {
    return await axios.get(`${basicUrl}/items/${id}`);
  } catch (error) {
    return error;
  }
};

const getProductDescriptionById = async (id) => {
  try {
    return await axios.get(`${basicUrl}/items/${id}/description`);
  } catch (error) {
    return error;
  }
};

const getProductCategoryById = async (id) => {
  try {
    return await axios.get(`https://api.mercadolibre.com/categories/${id}`);
  } catch (error) {
    return error;
  }
};

module.exports = {
  getProductsByQuery,
  getProductById,
  getProductDescriptionById,
  getProductCategoryById,
};
