import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { FaBitcoin, FaPaypal } from 'react-icons/fa';
import { SiTether, SiEthereum, SiDogecoin, SiBinance } from 'react-icons/si';
import { FiClipboard } from 'react-icons/fi';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Toaster, toast } from 'sonner';
import Cookies from '../utils/Cookies';
import Footer from '../utils/Footer';
import { SEO } from '../utils/SEO';

const elements = [
  {
    address: 'PayPal address',
    icon: (
      <FaPaypal
        className='text-2xl'
        color='blue'
      />
    ),
  },
  {
    address: 'BTC address',
    icon: (
      <FaBitcoin
        className='text-2xl'
        color='orange'
      />
    ),
  },
  {
    address: 'BNB address',
    icon: (
      <SiBinance
        className='text-2xl'
        color='yellow'
      />
    ),
  },
  {
    address: 'ETH address',
    icon: (
      <SiEthereum
        className='text-2xl'
        color='violet'
      />
    ),
  },
  {
    address: 'USDT TRC-20 address',
    icon: (
      <SiTether
        className='text-2xl'
        color='green'
      />
    ),
  },
  {
    address: 'DOGE address',
    icon: (
      <SiDogecoin
        className='text-2xl'
        color='yellow'
      />
    ),
  },
];

const Donation = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <>
      <SEO
        title='learnDeals | Donation'
        description='Buy me a coffe'
        image='https://raw.githubusercontent.com/adriane121000/adriane121000/master/resources/learnDeals.jpg'
      />
      <Cookies />
      <Toaster richColors />
      <div className='container mx-auto px-4 mt-16'>
        <div className='text-center mt-16 pt-5'>
          <h2 className='text-3xl'>{translations.donationTitle}</h2>
          <p>{translations.donationSubTitle}</p>
          <div className='flex flex-col mt-2 items-center '>
            {elements.map((element, index) => (
              <div
                key={index}
                className='flex items-center justify-center m-2  '>
                {element.icon}
                <input
                  type='text'
                  name={element.address}
                  value={element.address}
                  readOnly
                  className='mx-2 p-1 bg-black border border-violet-800 rounded  '
                />
                <CopyToClipboard text={element.address}>
                  <button
                    onClick={() => toast.success(`Copied: ${element.address}`)}
                    className='flex items-center bg-violet-800 border-none rounded py-2 px-2 shadow-md hover:shadow-violet-800 hover:scale-110 transition duration-300 ease-in-out'>
                    <FiClipboard />
                  </button>
                </CopyToClipboard>
              </div>
            ))}
          </div>
          <p className='text-lg text-green-700 mt-5 mb-10'>
            {translations.donationThanks}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Donation;
