/* eslint-disable react/prop-types */
const Table = ({ cols, children }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left text-sm text-gray-500">
        <thead className="bg-gray-50 text-sm uppercase text-gray-700">
          <tr>
            {cols.map((col) => (
              <th scope="col" className="px-6 py-3" key={col.label}>
                <div className="flex items-center">{col.label}</div>
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
  return (
    <tr className="border-b bg-white hover:bg-gray-50">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2   focus:ring-blue-500  "
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      {children}
    </tr>
  );
};
export default Table;
