import Table from "../../components/Table";

const ManageUsers = () => {
  const cols = [
    { label: "Name", value: "Name" },
    { label: "Email", value: "Email" },
    { label: "User Status", value: "Status" },
    { label: "Actions", value: "Actions" },
  ];
  return (
    <div className="px-8 py-8">
      <h1 className="pb-4 text-center text-3xl font-medium">
        {" "}
        Total Users: {}
      </h1>
      <Table cols={cols}></Table>
    </div>
  );
};

export default ManageUsers;
