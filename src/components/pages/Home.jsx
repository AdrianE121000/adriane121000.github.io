import Cookies from '../utils/Cookies';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>learnDeals</title>
        <meta
          name='description'
          content='Website to find all kinds of courses, free and with discount coupons.'
        />
        <meta
          property='og:title'
          content='learnDeals'
        />
        <meta
          property='og:description'
          content='Website to find all kinds of courses, free and with discount coupons.'
        />
        <meta
          property='og:image'
          content='https://raw.githubusercontent.com/adriane121000/adriane121000/master/resources/learnDeals.jpg'
        />
      </Helmet>
      Home
      <Cookies />
    </div>
  );
};

export default Home;
