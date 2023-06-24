import { useQuery } from "@tanstack/react-query";

import ApiService from "../api/service";

const listLeaderboard = async () =>
  await ApiService.get("/").then((res) => res?.data.data);

function useListLeaderboard() {
  return useQuery(["leaderboard"], listLeaderboard);
}

export default useListLeaderboard;
