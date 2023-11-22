import { useCallback } from 'react';

import {
  usePathname,
  useRouter,
  useSearchParams as useNextSearchParams,
} from 'next/navigation';

export const useSearchParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useNextSearchParams();

  const setSearchParams = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      router.replace(`${pathname}?${params}`, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  return [searchParams, setSearchParams];
};
