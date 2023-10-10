import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const signUser = atomWithStorage("myUser", {} || null);

const useUser = () => {
  return useAtom(signUser);
};

export default useUser;
