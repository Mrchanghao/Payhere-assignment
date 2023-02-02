import { useId } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useUId(givenId?: string) {
  const id = useId();
  const uId = uuidv4();
  return givenId !== undefined ? uId : uId + id;
}
