import { useState } from "react";
import EmployeeInfo from "./EmployeeInfo";

export default function Employee() {

    const [id, setId] = useState()
    const [employee, setEmployee] = useState()

    async function getOne() {
        const options = {
            method: "GET",

            headers: {
                "Content-Type": "application/json",
            },
        };

        const resp = await fetch("http://localhost:8080/employees/" + id, options)
        const json = await resp.json();
        setEmployee(json)


    }

    return (
        <div>
            <div style={{ display: "flex" }}>
                <div>ID<input onChange={(e) => setId(e.target.value)}></input></div>
                <button onClick={getOne}  >Cerca</button>
            </div>
            {employee ?
                <EmployeeInfo employee={employee} />
                : <></>}
        </div>
    )
}