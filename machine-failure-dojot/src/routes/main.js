import Machine from '../pages/Machine';

const mainRoutes = [
  {
    path: '*',
    exact: true,
    icon: 'dollar',
    title: 'Falha em Máquina',
    component: Machine,
  },
];

export default mainRoutes;
