import { useEffect, useState } from "react";
import EmployeeInfo from "./EmployeeInfo";
export default function Employees() {
  const [employees, setEmployees] = useState();

  async function getAll() {
    const options = {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    };

    const resp = await fetch("http://localhost:8080/employees", options);
    const json = await resp.json();
    setEmployees(json);
  }

  useEffect(() => {
    getAll();
  }, []);
  return (
    <div>
      {employees?.map((employee) => {
        return (
          <>
            <EmployeeInfo key={employee.id} employee={employee} />
            <hr></hr>
          </>
        );
      })}
    </div>
  );
}
