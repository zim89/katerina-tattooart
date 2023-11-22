import Modal from '@/components/Modal/Modal';

import ReviewForm from './ReviewForm';

const ReviewModal = ({ closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
      <ReviewForm closeModal={closeModal} />
    </Modal>
  );
};
export default ReviewModal;
