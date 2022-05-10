import * as api from '../utils/api';

// Fisher-Yates shuffle.
let shuffle = (arr: Array<number>) => {
  var j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr;
};

export const fetchStories = () => {
  return async (dispatch: any) => {
    const data = await api.getTopStories;
    const shuffledData = shuffle(data);

    let stories = [];
    
    for (let i = 0; i < 10; i++) {
      let story = await api.getStoryDetails(shuffledData[i]);
      stories.push(story);
    }

    stories.sort((a, b) => b.score - a.score);

    dispatch({type: 'GET_STORIES', stories: stories});
  };
};

export const fetchUser = (userId: string) => {
  return async (dispatch: any) => {
    const user = await api.getUserDetails(userId);
    dispatch({type: 'GET_USER', user: user});
  };
};
