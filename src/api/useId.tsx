import { useId } from "react";

export default function useUId(givenId: string) {
  const id = useId();
  return givenId !== undefined ? `pay_here-${id}` : id;
}
