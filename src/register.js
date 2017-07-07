import { Navigation } from 'react-native-navigation';
import screens from './screens';
import { AppContainer } from './containers';
import rootReducer from './reducers';
import { Drawer } from './components';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux';
const store = configureStore();

screens.push(Drawer);

export default function register(){
  screens.forEach((s) => {
    Navigation.registerComponent(s.name, () => s, store, Provider);
  });
}
