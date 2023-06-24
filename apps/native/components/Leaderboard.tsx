import {
  Box,
  Button,
  HStack,
  Heading,
  ScrollView,
  Stack,
  Text,
  View,
} from "native-base";
import React from "react";
import useListLeaderboard from "../hooks/useListLeaderboard";

const Leaderboard = () => {
  const { data, isLoading } = useListLeaderboard();

  return (
    <>
      <Text>Leaderboard</Text>
    </>
  );
};

export default Leaderboard;
