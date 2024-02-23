import { FC, useEffect, useState } from "react";
import { Resident } from "../interfaces/interfaces";
import axios from "axios";

interface ResidentProps {
  residentNo: number;
  resident: string;
}

const ResidentInf: FC<ResidentProps> = ({ residentNo, resident }) => {
  const [residentInfo, setResidentInfo] = useState<Resident | null>(null);
  useEffect(() => {
    const getResidentData = async () => {
      const response = await axios.get(resident);
      setResidentInfo(response.data as Resident);
    };
    getResidentData();
  }, [resident]);

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  if (!residentInfo) return null;
  return (
    <>
      <tr className="flex justify-center items-center w-full border-b border-t border-white">
        <th colSpan={2} className="text-white py-2 ">
          Residant - {residentNo}
        </th>
      </tr>
      <tr className="flex justify-center items-center w-full">
        <th className="border-r flex justify-start items-center border-white h-full p-2 w-1/2">
          Name
        </th>
        <td className="flex justify-start items-center w-1/2 p-2">
          {capitalizeFirstLetter(residentInfo.name)}
        </td>
      </tr>
      <tr className="flex justify-center items-center w-full">
        <th className="border-r flex justify-start items-center border-white h-full p-2 w-1/2">
          Height
        </th>
        <td className="flex justify-start items-center w-1/2 p-2">
          {capitalizeFirstLetter(residentInfo.height)}
        </td>
      </tr>
      <tr className="flex justify-center items-center w-full">
        <th className="border-r flex justify-start items-center border-white h-full p-2 w-1/2">
          Mass
        </th>
        <td className="flex justify-start items-center w-1/2 p-2">
          {capitalizeFirstLetter(residentInfo.mass)}
        </td>
      </tr>
      <tr className="flex justify-center items-center w-full">
        <th className="border-r flex justify-start items-center border-white h-full p-2 w-1/2">
          Gender
        </th>
        <td className="flex justify-start items-center w-1/2 p-2">
          {capitalizeFirstLetter(residentInfo.gender)}
        </td>
      </tr>
    </>
  );
};

export default ResidentInf;
