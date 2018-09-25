/**
 *
 * Asynchronously loads the component for ListItems
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

export const MainListItems = Loadable({
  loader: () => import('./index'),
  loading: () => null,
  render: loaded => loaded.mainListItems,
});

export const SecondaryListItems = Loadable({
  loader: () => import('./index'),
  loading: () => null,
  render: loaded => loaded.secondaryListItems,
});