import Modal from '@/components/Modal';

import ReviewForm from './ReviewForm';

const ReviewModal = ({ closeModal, handleForceUpdate }) => {
  return (
    <Modal closeModal={closeModal}>
      <ReviewForm
        closeModal={closeModal}
        handleForceUpdate={handleForceUpdate}
      />
    </Modal>
  );
};
export default ReviewModal;
