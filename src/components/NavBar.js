import { Switch, Route } from "react-router-dom";
import GGLink from "./GGLink";
import Employees from "./Employees";
import Filters from "./Filters";
import NewEmployee from "./NewEmployee";
import EditEmployee from "./EditEmployee";

export default function NavBar() {
  return (
    <div>
      <div style={style}>
        <GGLink linkLabel="All" redirectsTo="/all" />
        <GGLink linkLabel="Filters" redirectsTo="/filters" />
        <GGLink linkLabel="Create" redirectsTo="/create" />
        <GGLink linkLabel="Edit" redirectsTo="/edit" />
      </div>

      <Switch>
        <Route path="/all">
          <Employees />
        </Route>

        <Route path="/filters">
          <Filters />
        </Route>

        <Route path="/create">
          <NewEmployee />
        </Route>

        <Route path="/edit">
          <EditEmployee />
        </Route>
      </Switch>
    </div>
  );
}

const style = {
  display: "flex",
  justifyContent: "space-evenly",
};
