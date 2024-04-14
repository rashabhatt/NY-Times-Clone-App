import Advver from '../../../assets/images/adv.png';
import { FC } from 'react';

const Advertisements: FC = () => {
  return (
    <div className='bg-[#f8f8f8] border-t-[2px] border-b-[2px] pb-[30px]'>
      <h3
        data-testid='advertisement-header'
        className='text-center text-[10px] my-3 advertisement-text'
      >
        ADVERTISEMENT
      </h3>
      <img
        className='mx-auto advertisement-image'
        src={Advver}
        alt='Advertisement-Image'
      />
    </div>
  );
};

export default Advertisements;
