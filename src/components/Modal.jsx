import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';

const Modal = ({ children, closeModal }) => {
  return (
    <Transition appear show as={Fragment}>
      <Dialog as='div' className='relative z-40' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black/70' aria-hidden='true' />
        </Transition.Child>

        <div className='fixed inset-0 flex items-center justify-center'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Dialog.Panel className='relative mx-4 w-full transform md:mx-auto md:w-[651px] xl:w-[646px]'>
              <button
                type='button'
                className='absolute right-2.5 top-2.5 z-40 h-8 w-8 text-primary transition-all hover:text-white md:right-4 md:top-4 md:h-6 md:w-6'
                onClick={closeModal}
              >
                <X />
              </button>
              {children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
