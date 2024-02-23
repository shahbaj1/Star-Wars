import { useEffect, useState, useRef } from "react";
import { fetchData } from "./data/fetchData";
import Loader from "./components/Loader";
import { FetchedData, Planet } from "./interfaces/interfaces";
import Card from "./components/Card";

const App = () => {
  const [data, setData] = useState<FetchedData | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const ref = useRef(null);
  useEffect(() => {
    setData(null);
    const getData = async () => {
      const resp = await fetchData(currentPage);
      setData(resp);
    };
    getData();
  }, [currentPage]);
  if (!data)
    return (
      <div className="flex bg-[#171717] h-screen w-screen justify-center items-center">
        <Loader />
      </div>
    );
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center">
        <div id="earth"></div>
        <div id="space">
          <div className="stars"></div>
          <div className="stars"></div>
          <div className="stars"></div>
          <div className="stars"></div>
          <div className="stars"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-5 md:px-20 py-10 gap-y-10">
        <h1
          ref={ref}
          className="text-white flex justify-center items-center w-[100%] md:w-[65%]"
        >
          <img
            src="https://see.fontimg.com/api/renderfont4/8M9B0/eyJyIjoiZnMiLCJoIjo1NiwidyI6MTI1MCwiZnMiOjQ1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/U3RhciBXYXJzIFBsYW5ldHMgRGlyZWN0b3J5/megatransdemo-regular.png"
            width={"100%"}
            alt="heading"
          />
        </h1>
        <p className="text-lg font-bold text-white">Page - {currentPage}</p>
        <div className="flex justify-center items-center w-[85%] flex-wrap gap-10">
          {data.results.map((planet: Planet) => (
            <Card key={planet.name} planet={planet} />
          ))}
        </div>
        <nav
          className="mt-12 flex items-center justify-between w-full px-4 pt-12 sm:px-6"
          aria-label="Pagination"
        >
          <div className="flex flex-1 justify-between">
            <button
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-none px-4 py-2 text-sm font-medium hover:bg-[#121111] text-white disabled:text-gray-400 disabled:border-gray-400"
              disabled={currentPage === 1 ? true : false}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
              </svg>{" "}
              &nbsp; Previous
            </button>
            <button
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-none px-4 py-2 text-sm font-medium text-white hover:bg-[#000000]"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next Page &nbsp;{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default App;
