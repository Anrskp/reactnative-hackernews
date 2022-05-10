import axios from 'axios';

const baseUrl: string = 'https://hacker-news.firebaseio.com/v0';

export const getTopStories = axios
  .get(`${baseUrl}/topstories.json`)
  .then(response => {
    return response.data;
  });

export const getStoryDetails = async (storyId: number) => {
  const response = await axios.get(`${baseUrl}/item/${storyId}.json`);
  return response.data;
};

export const getUserDetails = async (userId: string) => {
  const response = await axios.get(`${baseUrl}/user/${userId}.json`);
  return response.data;
};
