export interface MovieType {
  actor: string;
  actor_images: ActorType[];
  author: string | null;
  cate_id: number;
  categories: CategoryType[];
  episodes: EpisodeType[];
  genre: string | null;
  image: string;
  number_ep: string;
  video_episode: number;
  des: string;
  title: string;
}

interface ActorType {
  [actor: string]: string;
}

export interface CategoryType {
  id: number;
  title: string;
  subTitle: string;
  image: string;
}
export interface EpisodeType {
  id: string;
  movie_id: string;
  ep_no: number;
  video_id: string;
  status: string;
  progress: string | null;
  video_url: string;
}
export interface FetchCategoriesResponse {
  data: CategoryType[];
  success: boolean;
}

export interface FetchCategoryDetailResponse {
  data: {
    id: number;
    name: string;
  };
  success: boolean;
}

export interface FetchMoviesResponse {
  data: {
    movies: MovieType[];
    limit: number;
    page: number;
    total: number;
  };
  success: boolean;
}

export interface FetchMovieDetailResponse {
  data: {
    id: string;
    des: string;
    actor: string | null;
    image: string;
    actor_images: string | null;
    episodes: EpisodeType[];
    cate_id: number;
  };
  success: boolean;
}

export const ITEMS_PER_PAGE = 10;
