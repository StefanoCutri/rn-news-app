import newsApi from './api';
import {NewsAPI} from '../../interfaces';

interface GetNewsParams {
  page?: number;
  itemsPerPage?: number;
}

const NewsService = {
  getNews: async ({page = 1, itemsPerPage = 10}: GetNewsParams = {}) => {
    try {
      const response = await newsApi.get<NewsAPI>(
        `top-headlines?language=en&page=${page}&pageSize=${itemsPerPage}`,
      );
      return response.data.articles;
    } catch (error) {
      console.log('Error fetching news: ', error);
      throw error;
    }
  },
};

export default NewsService;
