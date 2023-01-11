import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const clickHandler = useCallback((e: React.MouseEvent) => {
    setCount((prevCount: number) => {
        console.log(count);
      return prevCount + 1;
    });
  }, [count]);

  return { count, clickHandler};
};
