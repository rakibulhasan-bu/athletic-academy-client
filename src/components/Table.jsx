/* eslint-disable react/prop-types */
const Table = ({ cols, children }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left text-sm text-gray-500">
        <thead className="bg-gray-50 text-sm uppercase text-gray-700">
          <tr>
            {cols.map((col) => (
              <th scope="col" className="px-6 py-3" key={col.label}>
                <div className="flex items-center pl-4">{col.label}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};
export const Row = ({ children }) => {
  return <tr className="border-b bg-white hover:bg-gray-50">{children}</tr>;
};
export default Table;
