const githubReduder = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: false,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      };
    case 'GET_REPOS':
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case 'GET_USER_AND_REPOS':
      return {
        ...state,
        repos: action.payload.repos,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export default githubReduder;
