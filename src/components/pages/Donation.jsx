import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { FiClipboard } from 'react-icons/fi';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Toaster, toast } from 'sonner';
import Cookies from '../utils/Cookies';
import Footer from '../utils/Footer';
import { SEO } from '../utils/SEO';
import { elements } from '../../constants/constants';

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
                className='flex items-center justify-between m-1 md:m-3  '>
                <div className='flex flex-col justify-center items-center w-24 text-xs md:text-sm'>
                  {element.icon}
                  {element.name}
                </div>
                <div className='flex'>
                  <input
                    type='text'
                    name={element.address}
                    value={element.address}
                    readOnly
                    className='mx-1 md:mx-2 md:p-1 bg-black border border-violet-800 rounded  '
                  />
                  <CopyToClipboard text={element.address}>
                    <button
                      onClick={() =>
                        toast.success(`Copied: ${element.address}`)
                      }
                      className='flex items-center bg-violet-800 border-none rounded py-2 px-2 shadow-md hover:shadow-violet-800 hover:scale-110 transition duration-300 ease-in-out'>
                      <FiClipboard />
                    </button>
                  </CopyToClipboard>
                </div>
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
