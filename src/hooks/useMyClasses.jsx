import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const useMyClasses = () => {
  const { user, loading } = useContext(AuthContext);

  const [axiosSecure] = useAxiosSecure();
  const {
    refetch,
    data: allClass = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["allClass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/allClass?email=${user?.email}`);
      return res.data;
    },
  });

  return [allClass, refetch, isLoading, error];
};
export default useMyClasses;
