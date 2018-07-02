import image from './icons8-centralized-network-24.png';
import css from './main.css';

const environment = process.env.NODE_ENV;

window.onerror = () => {
  import(/* webpackChunkName: "lazy" */ './lazy').then(module => {
    console.log('module is loaded');
  });
};

export { css, environment, image };
