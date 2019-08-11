import React, { Fragment } from 'react';
import Search from '../Users/Search';
import Users from '../Users/Users';
import Footer from '../Layout/Footer';

const Home = () => (
  <Fragment>
    <Search />
    <Users />
    <Footer />
  </Fragment>
);

export default Home;