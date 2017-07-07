import bootMiddleware from './bootMiddleware';
import routeMiddleware from './routeMiddleware';

export default function* middleware() {
  yield [
    ...bootMiddleware(),
    ...routeMiddleware(),
  ];
}
