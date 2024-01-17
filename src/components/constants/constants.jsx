import { FaBitcoin, FaPaypal } from 'react-icons/fa';
import { SiTether, SiEthereum, SiDogecoin, SiBinance } from 'react-icons/si';

export const elements = [
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

export const areasOfInterest = [
  { title: 'Negocio', slug: 'buissnes' },
  { title: 'Diseño', slug: 'desing' },
  { title: 'Marketing', slug: 'marketing' },
  { title: 'Programacion', slug: 'programing' },
];

export const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-gray-500/60 before:to-transparent';

export const categories = {
  development: {
    es: 'desarrollo',
    en: 'development',
  },
  business: {
    es: 'negocios',
    en: 'business',
  },
  design: {
    es: 'diseño',
    en: 'design',
  },
  music: {
    es: 'música',
    en: 'music',
  },
};
