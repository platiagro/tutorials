import Fruits from '../pages/Fruits';

const mainRoutes = [
  {
    path: '*',
    exact: true,
    icon: 'dollar',
    title: 'Preços de Frutas',
    component: Fruits,
  },
];

export default mainRoutes;
