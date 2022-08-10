import { useState, RefObject, useMemo, useLayoutEffect } from 'react';

const useClientRect = (ele: RefObject<HTMLElement | null>) => {
  const [clientRect, setClientRect] = useState<DOMRect | null>(null);

  const updateClientRect = useMemo(() => {
    return () => {
      setClientRect(ele.current!.getBoundingClientRect());
    };
  }, []);

  useLayoutEffect(() => {
    if (ele.current) {
      updateClientRect();
    }
  }, []);

  return [clientRect, updateClientRect] as const;
};

export default useClientRect;
