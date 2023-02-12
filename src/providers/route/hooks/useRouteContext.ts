import { useContext } from "react";
import { RouteContext } from "../RouteProvider";

export default function useRouteContext() {
  return useContext(RouteContext);
}
