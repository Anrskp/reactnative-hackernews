const initialState = {
  stories: [],
  user: {},
};

export default (state: any = initialState, action: any) => {
  switch (action.type) {
    case 'GET_STORIES':
      return {
        ...state,
        stories: action.stories,
      };

    case 'GET_USER':
      return {
        ...state,
        user: action.user,
      };
  }
  return state;
};
