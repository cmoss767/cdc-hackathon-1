import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const reportTrash = (data: any) => {
  axios
    .post("/api/report", {
      params: {
        ...data,
      },
    })
    .then((res) => res?.data);
};

function useReportTrash() {
  return useQuery(["report"], reportTrash);
}

export default useReportTrash;
