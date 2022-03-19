import { TOGGLE_THEME } from '../types';

const App = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { isDarkMode: action.payload };
    default:
      return state;
  }
}

export default App;