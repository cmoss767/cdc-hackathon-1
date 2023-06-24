import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const findTrash = (data: any) => {
  axios.put("/api/predict-location").then((res) => res?.data);
};

function useFindTrash() {
  return useQuery(["add"], findTrash);
}

export default useFindTrash;
