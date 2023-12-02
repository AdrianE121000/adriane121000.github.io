import React from 'react';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { FaBitcoin, FaPaypal } from 'react-icons/fa';
import { SiTether, SiEthereum, SiDogecoin, SiBinance } from 'react-icons/si';
import { FiClipboard } from 'react-icons/fi';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Toaster, toast } from 'sonner';

const Donation = () => {
  const { translations } = useContext(LanguageContext);

  const addresses = {
    paypal: 'jnnjcsdv555vlsivjskjasfjj5v5vevjusdcisa',
    btc: 'BTC',
    bnb: 'BNB',
    usdt: 'USDT TRC-20',
    eth: ' ETH',
    doge: 'Doge',
  };

  return (
    <>
      <Toaster richColors />
      <div className='container mx-auto px-4'>
        <div className='text-center mt-12'>
          <h2 className='text-3xl'>{translations.donationTitle}</h2>
          <p>{translations.donationSubTitle}</p>
          <div className='flex flex-col mt-2 items-center '>
            <div className='flex items-center justify-center m-2  '>
              <FaPaypal
                className='text-2xl'
                color='blue'
              />
              <input
                type='text'
                name={addresses.paypal}
                value={addresses.paypal}
                readOnly
                className='mx-2 p-1 border border-gray-600 rounded  '
              />
              <CopyToClipboard text={addresses.paypal}>
                <button
                  onClick={() => toast.success(`Copied: ${addresses.paypal}`)}
                  className='flex items-center bg-blue-500 text-white border-none rounded py-1 px-2 cursor-pointer'>
                  <FiClipboard />
                </button>
              </CopyToClipboard>
            </div>
            <div className='flex items-center justify-center m-2 '>
              <FaBitcoin
                className='text-2xl'
                color='orange'
              />
              <input
                type='text'
                name={addresses.btc}
                value={addresses.btc}
                readOnly
                className='mx-2 p-1 border border-gray-600 rounded '
              />
              <CopyToClipboard text={addresses.btc}>
                <button className='flex items-center bg-blue-500 text-white border-none rounded py-1 px-2 cursor-pointer'>
                  <FiClipboard />
                </button>
              </CopyToClipboard>
            </div>
            <div className='flex items-center justify-center m-2 '>
              <SiTether
                className='text-2xl'
                color='green'
              />
              <input
                type='text'
                name={addresses.usdt}
                value={addresses.usdt}
                readOnly
                className='mx-2 p-1 border border-gray-600 rounded '
              />
              <CopyToClipboard text={addresses.usdt}>
                <button className='flex items-center bg-blue-500 text-white border-none rounded py-1 px-2 cursor-pointer'>
                  <FiClipboard />
                </button>
              </CopyToClipboard>
            </div>
            <div className='flex items-center justify-center m-2 '>
              <SiEthereum
                className='text-2xl'
                color='violet'
              />
              <input
                type='text'
                name={addresses.eth}
                value={addresses.eth}
                readOnly
                className='mx-2 p-1 border border-gray-600 rounded '
              />
              <CopyToClipboard text={addresses.eth}>
                <button className='flex items-center bg-blue-500 text-white border-none rounded py-1 px-2 cursor-pointer'>
                  <FiClipboard />
                </button>
              </CopyToClipboard>
            </div>
            <div className='flex items-center justify-center m-2 '>
              <SiDogecoin
                className='text-2xl'
                color='yellow'
              />
              <input
                type='text'
                name={addresses.doge}
                value={addresses.doge}
                readOnly
                className='mx-2 p-1 border border-gray-600 rounded '
              />
              <CopyToClipboard text={addresses.doge}>
                <button className='flex items-center bg-blue-500 text-white border-none rounded py-1 px-2 cursor-pointer'>
                  <FiClipboard />
                </button>
              </CopyToClipboard>
            </div>
            <div className='flex items-center justify-center m-2 '>
              <SiBinance
                className='text-2xl'
                color='yellow'
              />
              <input
                type='text'
                name={addresses.bnb}
                value={addresses.bnb}
                readOnly
                className='mx-2 p-1 border border-gray-600 rounded '
              />
              <CopyToClipboard text={addresses.bnb}>
                <button className='flex items-center bg-blue-500 text-white border-none rounded py-1 px-2 cursor-pointer'>
                  <FiClipboard />
                </button>
              </CopyToClipboard>
            </div>
          </div>
          <p className='text-lg text-green-700 mt-5'>
            {translations.donationThanks}
          </p>
        </div>
      </div>
    </>
  );
};

export default Donation;
