import useSWR from "swr";
import { getStudent, getStudentBags } from "../api/userAPI";

export const useBagHistory = (userID: string) => {
  const { data, isLoading, mutate } = useSWR(
    `api/${userID}/view-student-bag`,
    () => getStudentBags(userID)
  );
  return { data, isLoading, mutate };
};

export const useUserUpdate = (userID: string) => {
  const { data: userData, isLoading } = useSWR(
    `api/${userID}/one-student`,
    () => getStudent(userID)
  );
  return { userData, isLoading };
};
