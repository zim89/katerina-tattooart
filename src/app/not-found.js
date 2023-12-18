import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <section className='pb-[148px] pt-[206px]'>
        <div className='container flex flex-col items-center'>
          <h2 className='font-inter text-[132px]/[160px] font-bold text-primary/20 md:text-[196px]/[237px] xl:text-[349px]/[422px]'>
            404
          </h2>
          <p className='-mt-[1.375rem] mb-10 text-2xl/7 font-bold md:-mt-[1.75rem] md:mb-15 md:text-2.5xl/[38px] xl:-mt-[3.3125rem] xl:mb-20 xl:text-[54px]/[63px]'>
            Сторінку не знайдено
          </p>
          <Link href='/' className='md:text-2xl'>
            Назад
          </Link>
        </div>
      </section>
    </>
  );
}
