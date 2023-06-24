import { useMutation } from "@tanstack/react-query";
import ApiService from "../api/service";
import axios from "axios";

const reportTrash = async (data: any) => {
  return await ApiService.post("/report", {
    amount: 1,
    location: {},
    name: "wizard",
    report: true,
    severity: "LOW",
  })
    .then()
    .then((res: any) => res?.data?.data);
};

function useReportTrash() {
  return useMutation(reportTrash, {
    onSuccess: () => {},
    onError: (error, data) => {
      console.log("error", data);
      console.log(error);
    },
  });
}

export default useReportTrash;
