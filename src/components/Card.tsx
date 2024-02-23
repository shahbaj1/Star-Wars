import { FC } from "react";
import { Planet } from "../interfaces/interfaces";
import planetIcon from "../assets/planetIcon.png";
import ResidentInf from "./ResidentInf";
interface CardProps {
  planet: Planet;
}

const Card: FC<CardProps> = ({ planet }) => {
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="box-container">
      <div className="box w-[80vw]">
        <div className="flex w-full flex-col">
          <span className="title w-full flex items-center justify-center">
            {planet.name}
          </span>
          <div className="flex justify-center items-center w-full my-5">
            <div className={`flex justify-center items-center h-20 w-20`}>
              <img
                src={planetIcon}
                height={"100%"}
                className="h-full w-full animate-rotaion"
                alt="planet"
              />
            </div>
          </div>
        </div>
        <table className="border-collapse w-full border border-white my-2">
          <tr className="flex justify-center items-center w-full">
            <th className="border-r flex justify-start items-center border-white h-full p-2 w-1/2">
              Climate
            </th>
            <td className="flex justify-start items-center w-1/2 p-2">
              {capitalizeFirstLetter(planet.climate)}
            </td>
          </tr>
          <tr className="flex justify-center items-center w-full border-t border-white">
            <th className="flex justify-start items-center h-full p-2 w-1/2">
              Diameter
            </th>
            <td className="border-l border-white flex justify-start h-full items-center w-1/2 p-2">
              {capitalizeFirstLetter(planet.diameter)}
            </td>
          </tr>
          <tr className="flex justify-center items-center w-full border-t border-white">
            <th className="flex justify-start items-center h-full p-2 w-1/2">
              Gravity
            </th>
            <td className="flex border-l border-white h-full justify-start items-center w-1/2 p-2">
              {capitalizeFirstLetter(planet.gravity)}
            </td>
          </tr>
          <tr className="flex justify-center items-center w-full border-t border-white">
            <th className="flex justify-start items-center h-full p-2 w-1/2">
              Orbital Period
            </th>
            <td className="flex border-l border-white h-full justify-start items-center w-1/2 p-2">
              {capitalizeFirstLetter(planet.orbital_period)}
            </td>
          </tr>
          <tr className="flex justify-center items-center w-full border-t border-white">
            <th className="flex justify-start items-center h-full p-2 w-1/2">
              Population
            </th>
            <td className="flex border-l border-white h-full justify-start items-center w-1/2 p-2">
              {capitalizeFirstLetter(planet.population)}
            </td>
          </tr>
          <tr className="flex justify-center items-center w-full border-t border-white">
            <th className="flex justify-start items-center h-full p-2 w-1/2">
              Rotation Period
            </th>
            <td className="flex border-l border-white h-full justify-start items-center w-1/2 p-2">
              {capitalizeFirstLetter(planet.rotation_period)}
            </td>
          </tr>
          <tr className="flex justify-center items-center w-full border-t border-white">
            <th className="flex justify-start items-center h-full p-2 w-1/2">
              Terrain
            </th>
            <td className="flex border-l border-white h-full justify-start items-center w-1/2 p-2">
              {capitalizeFirstLetter(planet.terrain)}
            </td>
          </tr>
        </table>
        {planet.residents.length > 0 && (
          <table className="border-collapse w-full border border-white my-2">
            <tr className="flex justify-center items-center w-full border-b border-white mb-1">
              <th colSpan={2} className="text-white py-2 ">
                Residants
              </th>
            </tr>
            {planet.residents.map((resident, index) => (
              <ResidentInf
                key={resident}
                residentNo={index + 1}
                resident={resident}
              />
            ))}
          </table>
        )}
      </div>
    </div>
  );
};

export default Card;
