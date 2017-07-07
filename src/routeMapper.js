import {
  SplashContainer,
  TestContainer,
  SignupContainer
} from './containers';

export default function(route) {
  switch (route.name) {
    case 'dashboard':
      return {
        title: route.props ? route.props.title : '',
        component: TestContainer,
      };

    case 'splash':
      return {
        component: SplashContainer,
        appBar: false,
      };

    case 'signup':
      return {
        component: SignupContainer,
        appBar: true,
        title: 'Sign Up'
      };

    default:
      return {
        title: 'Dashboard',
        component: TestContainer,
      };
  }
}
