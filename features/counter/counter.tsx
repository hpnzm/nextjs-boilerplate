"use client";

import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { increment } from "./counter-slice";

export function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((s) => s.counter.count);

  return <Button onClick={() => dispatch(increment())}>{count}</Button>;
}
