import { NewsAPI } from "../../interfaces";
import newsApi from "./api";


const NewsService = {
    getNews: async() => {
        try {
            const response = await newsApi.get<NewsAPI>('top-headlines?language=en');
            return response.data.articles;
        } catch (error) {
            console.log("Error fetching news: ", error);
            throw error;
        }
    }
}

export default NewsService;