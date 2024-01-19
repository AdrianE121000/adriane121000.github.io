import { FaBitcoin, FaPaypal } from 'react-icons/fa';
import { SiTether, SiEthereum, SiDogecoin, SiBinance } from 'react-icons/si';

export const elements = [
  {
    address: 'Soon',
    name: 'PayPal',
    icon: (
      <FaPaypal
        className='text-2xl'
        color='blue'
      />
    ),
  },
  {
    address: 'bc1q38vpavrmcgs36nkthqy6vn3qpg6fujcf2ymwpr',
    name: 'BTC',
    icon: (
      <FaBitcoin
        className='text-2xl'
        color='orange'
      />
    ),
  },
  {
    address: '0x54462d4cc3B7FE06e9CB3E5eE55486168923C080',
    name: 'BNB BSC',
    icon: (
      <SiBinance
        className='text-2xl'
        color='yellow'
      />
    ),
  },
  {
    address: 'soon',
    name: 'ETH',
    icon: (
      <SiEthereum
        className='text-2xl'
        color='violet'
      />
    ),
  },
  {
    address: 'soon',
    name: 'USDT TRC-20',
    icon: (
      <SiTether
        className='text-2xl'
        color='green'
      />
    ),
  },
  {
    address: 'DFAKSNekBRT5KeB5z5ricyRJVgBPZXtXsU',
    name: 'DOGE',
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
