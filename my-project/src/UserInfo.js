import React, { useContext } from "react";
import CreateContext from "./Context/CreateContext";
import { Link } from "react-router-dom";
function UserInfo() {
  const {
    api,
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
    <div>
      {" "}
      <div className="heading">
        <h1 className="text-2xl p-6 text-center font-bold text-gray-700">
          Employee Details{" "}
          <Link
            to="/"
            className="bg-blue-500 ml-12 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
          >
            Fill Form
          </Link>
        </h1>
      </div>
      <div className="bg-gray-100 h-screen">
        <div className="container p-3 justify-center flex md:flex-row  items-center w-full mx-auto">
          <div className=" my-6 justify-center mx-auto items-center ml-3 left w-1/2">
            {
              <div className="bg-white pb-3  w-4/5 pt-3 pl-2 items-center justify-center shadow-md rounded-lg overflow-hidden">
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
                  {/* updata butn here
                   */}
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
    </div>
  );
}

export default UserInfo;
