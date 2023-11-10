'use client';
import Modal from '@/components/Modal/Modal';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { AlertTriangle } from 'lucide-react';
import { useEffect, useState } from 'react';
import ReviewForm from './ReviewForm';

const ReviewModal = ({ closeModal }) => {
  const supabase = createClientComponentClient();
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (session?.user) setUser(session.user);
    })();
  }, [supabase]);

  return (
    <Modal closeModal={closeModal}>
      {user && <ReviewForm closeModal={closeModal} user={user} />}

      {!user && (
        <div className='inline-flex items-center justify-start gap-2 text-base text-yellow-500'>
          <AlertTriangle className='h-8 w-8 stroke-[1.5]' />
          Для додавання відгуків вам потрібно авторизуватись!!!!
        </div>
      )}
    </Modal>
  );
};
export default ReviewModal;
