import { useState } from "react";
import EmployeeInfo from "./EmployeeInfo";

export default function Filters() {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [employees, setEmployees] = useState();

  const [freeText, setFreeText] = useState();

  async function getAgeFiltered() {
    const options = {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    };

    const resp = await fetch(
      "http://localhost:8080/employees/filter/" + from + "/" + to,
      options
    );
    const json = await resp.json();
    setEmployees(json);
  }

  async function getFreeFiltered() {
    const options = {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    };

    const resp = await fetch(
      "http://localhost:8080/employees/filter/" + freeText,
      options
    );
    const json = await resp.json();
    setEmployees(json);
  }

  return (
    <div>
      Age
      <div style={{ display: "flex" }}>
        <div>
          From<input onChange={(e) => setFrom(e.target.value)}></input>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          To<input onChange={(e) => setTo(e.target.value)}></input>
        </div>
      </div>
      <button onClick={getAgeFiltered}>Search</button>
      <div>
        Name or addresses
        <div style={{ display: "flex" }}>
          <div>
            <input onChange={(e) => setFreeText(e.target.value)}></input>
          </div>
        </div>
        <button onClick={getFreeFiltered}>Cerca</button>
      </div>
      {employees ? (
        employees.map((employee) => {
          return (
            <>
              <EmployeeInfo employee={employee} />
              <hr></hr>
            </>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
