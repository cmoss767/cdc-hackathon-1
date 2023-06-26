import { useQuery } from "@tanstack/react-query"

import ApiService from "../api/service"

const findTrash = async () =>
  await ApiService.get("/predict-location").then((res) => res?.data?.data)

function useFindTrash(mapView: boolean) {
  return useQuery({
    queryKey: ["findTrash"],
    queryFn: findTrash,
    enabled: !!mapView,
    keepPreviousData: true,
  })
}

export default useFindTrash
