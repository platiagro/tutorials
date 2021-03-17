import Irrigation from '../pages/Irrigation';

const mainRoutes = [
  {
    path: '*',
    exact: true,
    icon: 'dollar',
    title: 'Irrigação automática',
    component: Irrigation,
  },
];

export default mainRoutes;
