import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Heading,
  List,
  ScrollView,
  Stack,
  Text,
  View,
} from "native-base"
import React from "react"
import useListLeaderboard from "../hooks/useListLeaderboard"
import { StyleSheet } from "react-native"

const Leaderboard = () => {
  const { data, isLoading } = useListLeaderboard()

  const leaders: {
    [name: string]: number
  } = {}

  for (let i = 0; i < data?.length; i++) {
    const trash = data[i]
    if (!trash.amount) {
      continue
    }
    if (trash.name in leaders) {
      leaders[trash.name] += trash.amount
    } else {
      leaders[trash.name] = trash.amount
    }
  }
  const styles = StyleSheet.create({
    list: {
      flexDirection: "row", // Arranges children horizontally
      justifyContent: "space-around", // Aligns children with equal spacing
      alignItems: "center", // Aligns children vertically
      width: "100%",
    },
    headers: {
      width: "100%",
      flexDirection: "row", // Arranges children horizontally
      justifyContent: "space-around", // Aligns children with equal spacing
      alignItems: "center", // Aligns children vertically
      marginVertical: 3,
    },
    listItems: {
      width: "50%",
      alignItems: "center", // Aligns children vertically
    },
  })

  const sortedLeaders = Object.entries(leaders).sort((a, b) => b[1] - a[1])

  return (
    <>
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        w={"100%"}
        h={"100%"}
        borderRadius={10}
        bgColor={"#F0F4EF"}
        py={6}
        px={12}
        overflow={"scroll"}
      >
        <Heading color={"primary.600"} mb={4}>
          Climb the Ladder! 🧗‍♀️
        </Heading>
        <Divider w={"100%"} bgColor={"primary.600"} mb={4} />
        <HStack
          w={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <HStack alignItems={"center"}>
            <Container w={"50px"} mr={6}>
              <Text color={"primary.600"}>Rank</Text>
            </Container>
            <Text color={"primary.600"} w={"100px"}>
              Name
            </Text>
          </HStack>
          <Container w={"50px"}>
            <Text color={"primary.600"}>Points</Text>
          </Container>
        </HStack>

        {sortedLeaders.map((leader, index) => {
          return (
            <>
              <Divider bgColor={"primary.600"} />
              <HStack
                w={"100%"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <HStack alignItems={"center"} justifyContent={"flex-start"}>
                  <Text
                    color={"primary.600"}
                    textAlign={"left"}
                    pl={index < 3 ? 1.5 : 3}
                    w={"50px"}
                    fontSize={"16px"}
                    mr={6}
                  >
                    {index === 0
                      ? "🥇"
                      : index === 1
                      ? "🥈"
                      : index === 2
                      ? "🥉"
                      : index + 1}
                  </Text>
                  <Text
                    color={"primary.600"}
                    textAlign={"left"}
                    fontSize={"16px"}
                    w={"100px"}
                  >
                    {leader[0] ? leader[0] : "Anonymous"}
                  </Text>
                </HStack>
                <Container
                  w={"50px"}
                  display={"flex"}
                  alignItems={"flex-end"}
                  justifyContent={"center"}
                >
                  <Text
                    color={"primary.600"}
                    fontSize={"16px"}
                    pr={4}
                    width={"50px"}
                    textAlign={"right"}
                  >
                    {leader[1]}
                  </Text>
                </Container>
              </HStack>
            </>
          )
        })}
      </Stack>
    </>
  )
}

export default Leaderboard
