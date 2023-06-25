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
    leaderboard: {
      width: "100%",
      height: "100%",
      marginTop: 10,
    },
    redText: {
      color: "red",
      width: "50%",
      fontSize: 16,
    },
    list: {
      flexDirection: "row", // Arranges children horizontally
      justifyContent: "space-around", // Aligns children with equal spacing
      alignItems: "center", // Aligns children vertically
      width: "100%",
    },
    listContainer: {
      width: "100%",
    },
    headers: {
      width: "100%",
      flexDirection: "row", // Arranges children horizontally
      justifyContent: "space-around", // Aligns children with equal spacing
      alignItems: "center", // Aligns children vertically
      marginVertical: 3,
    },
    trashAmount: {
      width: "50%",
      alignItems: "center", // Aligns children vertically
    },
  })

  return (
    <>
      <Container style={styles.leaderboard} alignItems={"center"}>
        <Text style={{ fontSize: 22, marginBottom: 10 }}>Race to the top!</Text>
        <Container style={styles.headers}>
          <Text style={{ fontSize: 18 }}>Name</Text>
          <Text style={{ fontSize: 18 }}>Points</Text>
        </Container>

        {Object.entries(leaders).map(([key, value]) => {
          return (
            <Container key={key} style={styles.list}>
              <Container style={styles.trashAmount}>
                <Text style={{ fontSize: 16 }}>{key}</Text>
              </Container>
              <Container style={styles.trashAmount}>
                <Text style={{ fontSize: 16 }}>{value}</Text>
              </Container>
            </Container>
          )
        })}
      </Container>
    </>
  )
}

export default Leaderboard
