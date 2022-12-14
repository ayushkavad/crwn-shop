import Directory from '../../directory/directory.component';
import { Outlet } from 'react-router-dom';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'hets',
      imgUrl: 'https://i.ibb.co/cvpntL1/hets.png',
    },
    {
      id: 2,
      title: 'jackets',
      imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'sneakers',
      imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'womens',
      imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'mens',
      imgUrl: 'https://i.ibb.co/R70vBrQ/mens.png',
    },
  ];

  return (
    <div>
      <Outlet />
      <Directory categories={categories} />;
    </div>
  );
};

export default Home;
