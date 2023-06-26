import { useQuery } from "@tanstack/react-query"

import ApiService from "../api/service"

const findTrash = async () =>
  await ApiService.get("/predict-location").then((res) => res?.data?.data)

function useFindTrash() {
  return useQuery({
    queryKey: ["findTrash"],
    queryFn: findTrash,
    enabled: false,
    keepPreviousData: true,
  })
}

export default useFindTrash
