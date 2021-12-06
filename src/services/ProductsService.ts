import axios from 'axios';

const ProductsService = {
  getProducts: () => {
    return axios.get('https://raw.githubusercontent.com/RoiDopazo/react-tuto/develop/data.json');
  }
};

export default ProductsService;
