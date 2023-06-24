import { useQuery } from "@tanstack/react-query";

import axios from "axios";

const listLeaderboard = () =>
  axios.get("/api/leaderboard").then((res) => res?.data);

function useListLeaderboard() {
  return useQuery(["leaderboard"], listLeaderboard);
}

export default useListLeaderboard;
