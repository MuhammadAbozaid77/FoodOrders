function Table({ children }) {
  return (
    <div class="relative overflow-x-auto shadow-xl sm:rounded-lg lg:mx-[100px] mx-[10px] border border-gray-600">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        {children}
      </table>
    </div>
  );
}

function THeader({ children }) {
  return (
    <>
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>{children}</tr>
      </thead>
    </>
  );
}
function TBody({ children }) {
  return (
    <>
      <tbody>{children}</tbody>
    </>
  );
}

function TRow({ children }) {
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      {children}
    </tr>
  );
}
function THead({ children }) {
  return (
    <th class="p-2 bg-red-500 h-[60px] border text-center text-[20px] font-semibold text-gray-100">
      {children}
    </th>
  );
}
function TCell({ children }) {
  return (
    <td class="px-6 py-4  text-center text-[16px] font-semibold text-gray-500">
      {children}
    </td>
  );
}

Table.THeader = THeader;
Table.TBody = TBody;
Table.TRow = TRow;
Table.TCell = TCell;
Table.THead = THead;
export default Table;
