import Cookies from '../utils/Cookies';
import SEO from '@americanexpress/react-seo';

const Home = () => {
  return (
    <div>
      <SEO
        title='learnDeals'
        description='A web site for free online courses.'
        siteUrl='https://adriane121000.github.io/learnDeals'
        image={{
          src: 'https://raw.githubusercontent.com/adriane121000/adriane121000/master/resources/learnDeals.jpg',
        }}
      />
      Home
      <Cookies />
    </div>
  );
};

export default Home;
