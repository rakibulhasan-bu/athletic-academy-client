import { useQuery } from "@tanstack/react-query";
import Table, { Row } from "../../components/Table";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { ImSpinner6 } from "react-icons/im";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    data: users = [],
    refetch,
    isLoading,
    error,
  } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = async (user) => {
    const res = await axiosSecure.patch(`/users/admin/${user._id}`);
    const data = res.data;
    if (data.modifiedCount > 0) {
      refetch();
      Swal.fire(
        "Successfully role changed!",
        `${user?.name} is an Admin Now!`,
        "success"
      );
    }
  };
  const handleMakeInstructor = async (user) => {
    const res = await axiosSecure.patch(`/users/instructor/${user._id}`);
    const data = res.data;
    if (data.modifiedCount > 0) {
      refetch();
      Swal.fire(
        "Successfully role changed!",
        `${user?.name} is an Instructor Now!`,
        "success"
      );
    }
  };

  const cols = [
    { label: "Name", value: "Name" },
    { label: "Email", value: "Email" },
    { label: "Status", value: "Status" },
    { label: "Actions", value: "Actions" },
  ];

  if (isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center font-bold">
        <ImSpinner6 className="animate-spin text-9xl font-extrabold text-primary" />
      </div>
    );

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center text-4xl font-medium text-gray-700">
        You haven&apos;t any users yet.
      </div>
    );
  }

  return (
    <div className="px-8 py-8">
      <h1 className="pb-4 text-center text-3xl font-medium">
        Total Users: {users?.length}
      </h1>
      <Table cols={cols}>
        {users.map((user) => (
          <Row key={user._id}>
            <td className="px-6 py-3 text-left ">
              <div className="flex items-center ">
                <span className="font-medium">{user?.name}</span>
              </div>
            </td>
            <td className="px-6 py-3 text-left ">
              <div className="flex items-center ">
                <span className="font-medium">{user?.email}</span>
              </div>
            </td>
            <td className="px-6 py-3 text-left ">
              <div className="flex items-center ">
                <span className="font-medium">{user?.role}</span>
              </div>
            </td>
            <td className="px-6 py-3 text-left ">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleMakeInstructor(user)}
                  className={`rounded-lg border ${
                    user?.role === "instructor"
                      ? "cursor-not-allowed border-gray-500  bg-gray-200 text-gray-500"
                      : "border-primary bg-primary text-white"
                  } px-2 py-1 font-medium`}
                >
                  Make Instructor
                </button>
                <button
                  onClick={() => handleMakeAdmin(user)}
                  className={`rounded-lg border ${
                    user?.role === "admin"
                      ? "cursor-not-allowed border-gray-500 bg-gray-200 text-gray-500"
                      : "border-primary bg-primary text-white"
                  } px-2 py-1 font-medium`}
                >
                  Make Admin
                </button>
              </div>
            </td>
          </Row>
        ))}
      </Table>
    </div>
  );
};

export default ManageUsers;
