import { FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Table } from "../../statics/types";

const TableDesign = (props: Table) => {

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-5 overflow-auto">
      <h4 className="mb-6 text-xl font-semibold text-black">
        {props.title}
      </h4>

      <table className="w-full">
        <tbody>
          <tr className="rounded-sm bg-gray-2 gap-10">
            {props.tableRows.map((tr: string, id: number) => (
              <th key={id} className="px-10 py-5 border border-[rgb(200,200,200)]"> {tr} </th>
            ))}
          </tr>
          {props.tableCols ? props?.tableCols?.length > 0 && props?.tableCols?.map((item: any, index) => (

            <tr key={index} className="p-4 mb-4">
              {props?.dataKeys?.map((key, i) => (
                <td key={i} className="p-5 border border-[rgb(200,200,200)]">
                  {props.hasImage ? i === 0 ? <img src={item[key]} className="w-full h-[100px]" /> : item[key] : item[key]}
                </td>
              ))}
              <td className="p-5 border border-[rgb(200,200,200)]">
                <div className="flex justify-center">
                  {!props.eye ? <>
                    <MdDelete size={30} className="text-grad-two cursor-pointer hover:text-red-400" onClick={async ()=>{
                      if (props.deletionClick) {
                        props.deletionClick(item?.[props.focusItem ?? ""]);
                      }
                    }} /></> : <FaRegEye size={30} className="text-green-400 hover:text-green-500 cursor-pointer"/>}
                </div>
              </td>
            </tr>
          )) : ""}
        </tbody>
      </table>
    </div>

  );
};

export default TableDesign;
