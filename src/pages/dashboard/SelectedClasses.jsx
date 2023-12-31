import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Table, { Row } from "../../components/Table";
import { useNavigate } from "react-router-dom";
import { ImSpinner6 } from "react-icons/im";

const SelectedClasses = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const {
    data: SelectedClasses = [],
    refetch,
    isLoading,
    error,
  } = useQuery(["SelectedClasses"], async () => {
    const res = await axiosSecure.get(`/SelectedClasses/${user?.email}`);
    console.log(res.data);
    return res.data;
  });

  const handlePayment = async (selectClass) => {
    navigate("/dashboard/payment", { state: { selectClass: selectClass } });
  };

  const handleDelete = async (selectClass) => {
    const id = selectClass._id;
    const res = await axiosSecure.put(`/removeSelectedClass/${user.email}`, {
      id,
    });

    const data = res.data;
    if (data.modifiedCount > 0) {
      refetch();
      Swal.fire(
        "Successfully deleted class!",
        `${selectClass?.className} course is Successfully deleted`,
        "success"
      );
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center font-bold">
        <ImSpinner6 className="animate-spin text-9xl font-extrabold text-primary" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center text-4xl font-medium text-gray-700">
        You haven&apos;t selected any classes yet.
      </div>
    );
  }
  const cols = [
    { label: "Image", value: "Image" },
    { label: "Class Name", value: "Class Name" },
    { label: "Instructor Name", value: "Instructor Name" },
    { label: "Email", value: "Email" },
    { label: "Seats", value: "Seats" },
    { label: "Price", value: "Price" },
    { label: "Status", value: "Status" },
    { label: "Actions", value: "Actions" },
  ];
  return (
    <div className="px-2 py-8">
      <h1 className="pb-4 text-center text-3xl font-medium">
        Total Selected Classes: {SelectedClasses?.length}
      </h1>
      <Table cols={cols}>
        {SelectedClasses.map((selectClass) => (
          <Row key={selectClass._id}>
            <td className="px-1 py-3 text-left ">
              <img
                src={selectClass?.imgURL}
                className="h-20 w-28 rounded-md object-cover"
                alt="class"
              />
            </td>
            <td className="px-2 py-3 text-left ">
              <span className="font-medium">{selectClass?.className}</span>
            </td>
            <td className="px-2 py-3 text-left ">
              <span className="font-medium">{selectClass?.instructorName}</span>
            </td>
            <td className="px-2 py-3 text-left font-medium">
              {selectClass?.instructorEmail}
            </td>
            <td className="px-2 py-3 text-center">
              <span className="font-medium">{selectClass?.seats}</span>
            </td>
            <td className="px-2 py-3 text-center ">
              <span className="font-medium">$ {selectClass?.price}</span>
            </td>
            <td className="px-2 py-3 text-center ">
              <span className="font-medium">{selectClass?.status}</span>
            </td>
            <td className="px-1 py-0 text-left ">
              <div className="flex flex-col items-center gap-1">
                <button
                  onClick={() => handlePayment(selectClass)}
                  className={`rounded-lg border-primary bg-primary px-3 py-1.5 text-xs font-medium text-white`}
                >
                  Make Payment
                </button>
                <button
                  onClick={() => handleDelete(selectClass)}
                  className={`rounded-lg border-red-500 bg-red-500 px-3 py-1.5 text-xs font-medium text-white`}
                >
                  Delete
                </button>
              </div>
            </td>
          </Row>
        ))}
      </Table>
    </div>
  );
};

export default SelectedClasses;
