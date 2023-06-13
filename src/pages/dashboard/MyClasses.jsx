import Swal from "sweetalert2";
import Table, { Row } from "../../components/Table";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { MdClose } from "react-icons/md";
import { ImSpinner6, ImSpinner9 } from "react-icons/im";
import { useForm } from "react-hook-form";

const MyClasses = () => {
  const [classData, setClassData] = useState("");
  const { user, setShowModal, showModal } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const {
    data: allClass = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allClass", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/allClass?email=${user?.email}`);
      return res.data;
    },
  });
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    setShowModal(false);
    const res = await axiosSecure.patch(`/updateClass/${classData._id}`, {
      data,
    });
    if (res.data.modifiedCount > 0) {
      refetch();
      reset();
      Swal.fire(
        "Update successful!",
        `Update ${classData?.className} class to  ${data?.className} class!`,
        "success"
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `You input same information change please`,
      });
    }
  };

  const handleUpdate = (singleClass) => {
    setShowModal(true);
    setClassData(singleClass);
  };
  const cols = [
    { label: "Image", value: "Image" },
    { label: "Class Name", value: "Class Name" },
    { label: "price", value: "price" },
    { label: "Students", value: "Students" },
    { label: "Available seats", value: "Available seats" },
    { label: "Status", value: "Status" },
    { label: "Feedback", value: "Feedback" },
    { label: "Update", value: "Update" },
  ];

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
        You haven&apos;t add any classes yet.
      </div>
    );
  }
  return (
    <>
      {showModal && (
        <div className="fixed left-0 top-0 z-50 flex min-h-screen w-screen items-center justify-center bg-black/80">
          <div className="max-w-lg rounded-lg bg-white p-6">
            <div className="flex justify-end pb-1">
              <MdClose
                onClick={() => setShowModal(false)}
                className="cursor-pointer text-2xl text-primary"
              />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="ng-untouched ng-pristine ng-valid space-y-6"
            >
              <div className="space-y-4">
                <input
                  {...register("className")}
                  type="text"
                  required
                  defaultValue={classData?.className}
                  className="w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-2 text-gray-900 focus:outline-secondary"
                />
                <div className="flex items-center gap-6">
                  <input
                    {...register("price", { valueAsNumber: true })}
                    type="number"
                    required
                    defaultValue={classData?.price}
                    className="w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-2 text-gray-900 focus:outline-secondary"
                  />
                  <input
                    {...register("seats", { valueAsNumber: true })}
                    type="number"
                    required
                    defaultValue={classData?.seats}
                    className="w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-2 text-gray-900 focus:outline-secondary"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-primary py-1.5 text-lg font-medium text-white"
              >
                {isLoading ? (
                  <ImSpinner9 className="m-auto animate-spin" size={24} />
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="px-8 py-8">
        <h1 className="pb-4 text-center text-3xl font-medium">
          Total Users: {allClass?.length}
        </h1>
        <Table cols={cols}>
          {allClass.map((singleClass) => (
            <Row key={singleClass._id}>
              <td className="px-1 py-2 text-left ">
                <img
                  src={singleClass?.imgURL}
                  className="h-16 w-16 rounded-md object-cover"
                  alt="class"
                />
              </td>
              <td className="px-0 py-3">
                <span className="font-medium">{singleClass?.className}</span>
              </td>
              <td className="px-6 py-3 text-center ">
                <span className="font-medium">$ {singleClass?.price}</span>
              </td>
              <td className="px-6 py-3 text-center ">
                <span className="font-medium">{singleClass?.students}</span>
              </td>
              <td className="px-6 py-3 text-center ">{singleClass?.seats}</td>
              <td className="px-6 py-3 text-center ">{singleClass?.status}</td>
              <td className="px-6 py-3">
                <span className="font-medium">
                  {singleClass?.status === "deny" && singleClass?.feedback}
                </span>
              </td>
              <td className="px-6 py-3">
                <button
                  onClick={() => handleUpdate(singleClass)}
                  className={`rounded-lg border-primary bg-primary px-3 py-1.5 text-xs font-medium text-white`}
                >
                  Update
                </button>
              </td>
            </Row>
          ))}
        </Table>
      </div>
    </>
  );
};

export default MyClasses;
