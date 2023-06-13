import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Table, { Row } from "../../components/Table";
import { ImSpinner6 } from "react-icons/im";

const EnrolledClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const {
    data: enrolledClasses = [],
    isLoading,
    error,
  } = useQuery(["enrolledClasses"], async () => {
    const res = await axiosSecure.get(`/enrolledClasses/${user?.email}`);
    return res.data;
  });
  console.log(enrolledClasses);

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
        You haven&apos;t Enrolled any classes yet.
      </div>
    );
  }
  const cols = [
    { label: "Image", value: "Image" },
    { label: "Class Name", value: "Class Name" },
    { label: "Instructor Name", value: "Instructor Name" },
    { label: "Price", value: "Price" },
    { label: "Date", value: "Date" },
  ];
  return (
    <div className="px-6 py-8">
      <h1 className="pb-4 text-center text-3xl font-medium">
        You Enrolled {enrolledClasses?.length} classes
      </h1>
      <Table cols={cols}>
        {enrolledClasses.map((enrollClass) => (
          <Row key={enrollClass._id}>
            <td className="px-1 py-3 text-left ">
              <img
                src={enrollClass?.imgURL}
                className="h-20 w-28 rounded-md object-cover"
                alt="class"
              />
            </td>
            <td className="px-2 py-3 text-left ">
              <span className="font-medium">{enrollClass?.className}</span>
            </td>
            <td className="py-3 pl-6 text-left ">
              <span className="font-medium">{enrollClass?.instructorName}</span>
            </td>
            <td className="px-2 py-3 text-center ">
              <span className="font-medium">$ {enrollClass?.price}</span>
            </td>
            <td className="px-0 py-3 text-center">
              <span className="text-xs  font-medium">
                {new Date(enrollClass?.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  // hour: "numeric",
                  // minute: "numeric",
                  // hour12: true,
                })}
              </span>
            </td>
          </Row>
        ))}
      </Table>
    </div>
  );
};

export default EnrolledClasses;
