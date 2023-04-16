import React, { useContext, useEffect } from "react";
import CreateContext from "./Context/CreateContext";

function App() {
  const {
    api,
    setApi,
    name,
    setName,
    age,
    setAge,
    depertment,
    setDepertment,
    status,
    setStatus,
    address,
    setAddress,
  } = useContext(CreateContext);

  return (
    <>
      <div className="bg-gray-100 h-screen">
        <div className="container p-3 justify-center flex md:flex-row  items-center w-full mx-auto">
          <div className=" justify-center mx-auto items-center ml-3 left w-1/2">
            {
              <div className="bg-white pb-3 w-4/5 pt-3 pl-2 items-center justify-center shadow-md rounded-lg overflow-hidden">
                <div className="  px-4">
                  <h1 className="text-gray-900 font-bold text-2xl">
                    Name:{name}
                  </h1>

                  <p className="text-gray-600 text-sm">
                    Age:
                    <span className="text-gray-700 pl-2 font-semibold">
                      {age}
                    </span>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Depertment:
                    <span className="text-gray-700 pl-2 font-semibold">
                      {depertment}
                    </span>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Employe Status:
                    <span className="text-gray-700 pl-2 font-semibold">
                      {status}
                    </span>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Address:
                    <span className="text-gray-700 pl-2 font-semibold">
                      {address}
                    </span>
                  </p>
                </div>
              </div>
            }
          </div>
          <div className="w-1/2 grid grid-cols-4 gap-4">
            {api.map((item) => {
              return (
                <div className="bg-white  shadow-md rounded-lg overflow-hidden">
                  <div className="  px-4 py-2">
                    <h1
                      onClick={() => {
                        setName(item.name);
                        setAge(item.age);
                        setDepertment(item.department);
                        setStatus(item.Employee_status);
                        setAddress(item.address);
                      }}
                      className="text-gray-900 font-bold text-2xl cursor-pointer"
                    >
                      {item.name}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
