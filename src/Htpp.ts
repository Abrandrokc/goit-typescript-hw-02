import axios from "axios";

axios.defaults.baseURL = `https://api.unsplash.com`;

interface Photo {
    id: string;
    urls: {
        regular: string;
    };
    user: {
        name: string;
        profile_image: {
            small: string;
        };
    };
    alt_description: string | null;
}


interface UnsplashResponse {
    results: Photo[];
}

export const FetchArticles = async (query: string, page: number): Promise<Photo[]> => {
    const params = {
        client_id: "6ehSoNGmoC-uCFq6pGCTlOjiIFDhveZWOpqpU5_N8e8",
        query: query,
        per_page: 20,
        page: page
    };

    const response = await axios.get<UnsplashResponse>("/search/photos", { params });
    return response.data.results;
};
