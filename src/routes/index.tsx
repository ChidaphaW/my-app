import { Route, Routes as RoutesLib } from "react-router-dom";
import Home from "../page/Counter";
import Info from "../page/Info";
import Counter from "../page/Counter";

export const Routes = () => {
    return (
      <RoutesLib>
        <Route element={<Counter />} path={"/counter"} />
        <Route element={<Info />} path={"/info"} />
      </RoutesLib>
    );
  };
  
  export default Routes;