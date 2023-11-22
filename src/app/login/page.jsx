// export default function Login() {
//   return (
//     <form action='/auth/sign-in' method='post'>
//       <label htmlFor='email'>Email</label>
//       <input name='email' />
//       <label htmlFor='password'>Password</label>
//       <input type='password' name='password' />
//       <button>Sign In</button>
//       <button formAction='/auth/sign-up'>SignUp</button>
//       <button formAction='/auth/sign-out'>SignOut</button>
//     </form>
//   );
// }

import Link from 'next/link';

import Messages from './messages';

export default function Login() {
  return (
    <div className='flex w-full flex-1 flex-col justify-center gap-2 px-8 sm:max-w-md'>
      <Link
        className='text-foreground bg-btn-background hover:bg-btn-background-hover group absolute left-8 top-8 flex items-center rounded-md px-4 py-2 text-sm no-underline'
        href='/'
      >
        <svg
          className='mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1'
          fill='none'
          height='24'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          width='24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <polyline points='15 18 9 12 15 6' />
        </svg>{' '}
        Back
      </Link>

      <form
        action='/auth/login'
        className='text-foreground flex w-full flex-1 flex-col justify-center gap-2'
        method='post'
      >
        <label className='text-md' htmlFor='email'>
          Email
        </label>
        <input
          className='mb-6 rounded-md border bg-inherit px-4 py-2'
          name='email'
          placeholder='you@example.com'
          required
        />
        <label className='text-md' htmlFor='password'>
          Password
        </label>
        <input
          className='mb-6 rounded-md border bg-inherit px-4 py-2'
          name='password'
          placeholder='••••••••'
          type='password'
          required
        />
        <button className='mb-2 rounded bg-green-700 px-4 py-2 text-white'>
          Login
        </button>
        <button
          className='mb-2 rounded border border-gray-700 px-4 py-2 text-white'
          formAction='/auth/register'
        >
          Register
        </button>
        <Messages />
      </form>
    </div>
  );
}
