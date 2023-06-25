import {
  Box,
  Button,
  Container,
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

const Leaderboard = () => {
  const { data, isLoading } = useListLeaderboard()

  return (
    <>
      <Container>
        <Text>Leaderboard</Text>

        <List>
          {data
            ?.filter((el: any) => el.name && el)
            .map((leaders: any) => {
              return <Text key={leaders.id}>{leaders.name}</Text>
            })}
        </List>
      </Container>
    </>
  )
}

export default Leaderboard
