import { XMarkIcon } from '@heroicons/react/24/outline';

const ConsultationModal = ({ handleOpenModal }) => {
  return (
    <div className='backdrop'>
      <div className='bg-dark-slate relative w-[343px] rounded-xl border-1 border-white px-2.5 pb-9 pt-[66px] md:w-[651px] md:px-10 md:pb-[31px] md:pt-20 xl:w-[646px]'>
        <button
          type='button'
          className='absolute right-2 top-2 mb-6 ml-auto block h-8 w-8 md:right-6 md:top-6 md:h-6 md:w-6'
          onClick={handleOpenModal}
        >
          <XMarkIcon />
        </button>

        <form>
          <div className='mb-4 flex gap-4 md:mb-8 md:gap-6'>
            <label className='grow'>
              <input type='text' className='input' placeholder='Ім’я' />
            </label>
            <label className='grow'>
              <input type='email' className='input' placeholder='Email' />
            </label>
          </div>

          <label>
            <textarea
              rows='4'
              className='input'
              placeholder='Повідомлення...'
            />
          </label>

          <button
            className='btn mx-auto mt-9 block rounded-xl md:mt-8 md:p-4 md:text-lg'
            type='button'
            onClick={handleOpenModal}
          >
            Замовити консультацію
          </button>
        </form>
      </div>
    </div>
  );
};
export default ConsultationModal;
