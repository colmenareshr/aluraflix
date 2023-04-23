import { api } from './index.axios';

export const requestCategoriesVideos = async () => await api.get('/categories');

export const requestVideos = async () => await api.get('/videos');
