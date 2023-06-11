import Swal from "sweetalert2";
import Table, { Row } from "../../components/Table";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const {
    data: allClass = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["allClass", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/allClass?email=${user?.email}`);
      return res.data;
    },
  });
  const cols = [
    // { label: "Image", value: "Email" },
    { label: "Class Name", value: "Class Name" },
    { label: "price", value: "price" },
    { label: "Students", value: "Students" },
    { label: "Available seats", value: "Available seats" },
    { label: "Status", value: "Status" },
  ];

  if (isLoading) {
    return <div className="">loading...........state</div>;
  }
  if (error) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `An error has occurred: ${error.message}`,
    });
  }
  return (
    <div className="px-8 py-8">
      <h1 className="pb-4 text-center text-3xl font-medium">
        Total Users: {allClass?.length}
      </h1>
      <Table cols={cols}>
        {allClass.map((singleClass) => (
          <Row key={singleClass._id}>
            <td className="px-6 py-3">
              <span className="font-medium">{singleClass?.className}</span>
            </td>
            <td className="px-6 py-3 text-center ">
              <span className="font-medium">$ {singleClass?.price}</span>
            </td>
            <td className="px-6 py-3 text-center ">
              <span className="font-medium">{singleClass?.Students}</span>
            </td>
            <td className="px-6 py-3 text-center ">{singleClass?.seats}</td>
            <td className="px-6 py-3 text-center ">{singleClass?.status}</td>
          </Row>
        ))}
      </Table>
    </div>
  );
};

export default MyClasses;
