import { useState } from 'react';

export function useCount() {
  const [itemsCount, setItemsCount] = useState<number>(0);

  return {
    itemsCount,
    increaseCount: () => setItemsCount((i) => i + 1),
    decreaseCount: () => setItemsCount(0),
  };
}

export default useCount;
