import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const addPoints = (data: any) => {
  axios
    .post("/api/add", {
      params: {
        ...data,
      },
    })
    .then((res) => res?.data);
};

function useAddPoints() {
  return useQuery(["add"], addPoints);
}

export default useAddPoints;
