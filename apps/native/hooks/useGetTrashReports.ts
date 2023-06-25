import { useQuery } from "@tanstack/react-query"

import ApiService from "../api/service"

const getTrashReports = async () =>
  await ApiService.get("/").then((res) => res?.data?.data)

function useGetTrashReports() {
  return useQuery(["trashReports"], getTrashReports)
}

export default useGetTrashReports
