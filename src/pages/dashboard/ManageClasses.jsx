import { useQuery } from "@tanstack/react-query";
import Table, { Row } from "../../components/Table";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    data: allClasses = [],
    refetch,
    isLoading,
    error,
  } = useQuery(["allClasses"], async () => {
    const res = await axiosSecure.get("/allClasses");
    return res.data;
  });

  const handleApprove = async (SingleClasses) => {
    const res = await axiosSecure.patch(
      `/allClasses/admin/approve/${SingleClasses._id}`
    );

    const data = res.data;
    if (data.modifiedCount > 0) {
      refetch();
      Swal.fire(
        "Successfully status changed!",
        `${SingleClasses?.className} is approve Now!`,
        "success"
      );
    }
  };

  const handleDeny = async (SingleClasses) => {
    const res = await axiosSecure.patch(
      `/allClasses/admin/deny/${SingleClasses._id}`
    );

    const data = res.data;
    if (data.modifiedCount > 0) {
      refetch();
      Swal.fire(
        "Successfully status changed!",
        `${SingleClasses?.className} is deny!`,
        "success"
      );
    }
  };

  const handleFeedback = (SingleClasses) => {
    Swal.fire({
      title: `Submit your feedback for ${SingleClasses?.className} class`,
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Submit",
      showLoaderOnConfirm: true,

      preConfirm: async (text) => {
        // const res = await axiosSecure.put(
        //   `/allClasses/admin/feedback/${SingleClasses._id}`,
        //   text
        // );

        // const data = res.data;
        // if (data.modifiedCount > 0) {
        //   refetch();
        //   Swal.fire(
        //     "Successfully status changed!",
        //     `${SingleClasses?.className} is deny!`,
        //     "success"
        //   );
        // }

        return axiosSecure
          .put(`/allClasses/admin/feedback/${SingleClasses._id}`, text)
          .then((res) => res.json())
          .catch(() => {
            Swal.showValidationMessage(`please input feedback`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  };
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

  if (isLoading) return "loading ...";

  if (error) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `An error has occurred: ${error.message}`,
    });
  }
  return (
    <div className="px-2 py-8">
      <h1 className="pb-4 text-center text-3xl font-medium">
        Total Classes: {allClasses?.length}
      </h1>
      <Table cols={cols}>
        {allClasses.map((SingleClasses) => (
          <Row key={SingleClasses._id}>
            <td className="px-1 py-3 text-left ">
              <img
                src={SingleClasses?.imgURL}
                className="w-2o h-20 rounded-md object-cover"
                alt="class"
              />
            </td>
            <td className="px-2 py-3 text-left ">
              <span className="font-medium">{SingleClasses?.className}</span>
            </td>
            <td className="px-2 py-3 text-left ">
              <span className="font-medium">
                {SingleClasses?.instructorName}
              </span>
            </td>
            <td className="px-2 py-3 text-left font-medium">
              {SingleClasses?.instructorEmail}
            </td>
            <td className="px-2 py-3 text-center">
              <span className="font-medium">{SingleClasses?.seats}</span>
            </td>
            <td className="px-2 py-3 text-center ">
              <span className="font-medium">{SingleClasses?.price}</span>
            </td>
            <td className="px-2 py-3 text-center ">
              <span className="font-medium">{SingleClasses?.status}</span>
            </td>
            <td className="px-1 py-0 text-left ">
              <div className="flex flex-col items-center gap-1">
                <button
                  disabled={
                    SingleClasses?.status === "deny" ||
                    SingleClasses?.status === "approve"
                      ? true
                      : false
                  }
                  onClick={() => handleApprove(SingleClasses)}
                  className={`rounded-lg text-xs ${
                    SingleClasses?.status === "approve" ||
                    SingleClasses?.status === "deny"
                      ? "cursor-not-allowed border-gray-500  bg-gray-200 text-gray-500"
                      : "border-primary bg-primary text-white"
                  } px-3 py-1.5 font-medium`}
                >
                  Approve
                </button>
                <button
                  disabled={
                    SingleClasses?.status === "deny" ||
                    SingleClasses?.status === "approve"
                      ? true
                      : false
                  }
                  onClick={() => handleDeny(SingleClasses)}
                  className={`rounded-lg text-xs ${
                    SingleClasses?.status === "deny" ||
                    SingleClasses?.status === "approve"
                      ? "cursor-not-allowed border-gray-500 bg-gray-200 text-gray-500"
                      : "border-primary bg-primary text-white"
                  } px-3 py-1.5 font-medium`}
                >
                  Deny
                </button>
                <button
                  onClick={() => handleFeedback(SingleClasses)}
                  className={`rounded-lg text-xs ${
                    SingleClasses?.status === "feedback"
                      ? "cursor-not-allowed border-gray-500 bg-gray-200 text-gray-500"
                      : "border-primary bg-primary text-white"
                  } px-3 py-1.5 font-medium`}
                >
                  Feedback
                </button>
              </div>
            </td>
          </Row>
        ))}
      </Table>
    </div>
  );
};

export default ManageClasses;
