import React from "react";
import CreateContext from "./CreateContext";
function Dataprovider({ children }) {
  const [api, setApi] = React.useState([]);
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [depertment, setDepertment] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [address, setAddress] = React.useState("");
  React.useEffect(() => {
    fetch("http://localhost:5000/getapi")
      .then((res) => res.json())
      .then((data) => {
        setApi(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <CreateContext.Provider
        value={{
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
        }}
      >
        {children}
      </CreateContext.Provider>
    </div>
  );
}

export default Dataprovider;
