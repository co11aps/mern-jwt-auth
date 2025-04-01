import { useQuery } from "@tanstack/react-query";
import { getUser } from "../lib/api";

export const AUTH = "auth";

const useAuth = (opts = {}) => {
  const { data: user, ...rest } = useQuery({
    queryKey: [AUTH],
    queryFn: getUser,
    staleTime: Infinity, //saves user in cash
    ...opts,
  });
  console.log(user);
  return {
    user,
    ...rest,
  };
};

export default useAuth;
