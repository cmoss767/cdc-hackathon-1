import ApiService from "../api/service"
import { useQuery } from "@tanstack/react-query"

const findTrash = (data: { latitude: number; longitude: number }) => {
  ApiService.put("/predict-location", data).then((res) => res?.data?.data)
}

function useFindTrash(data: { latitude: number; longitude: number }) {
  return useQuery(["find"], () => {
    findTrash(data)
  })
}

export default useFindTrash
