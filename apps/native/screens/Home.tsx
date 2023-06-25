//import { StatusBar } from "expo-status-bar";
//import { Button } from "ui";
import {
  Box,
  Button,
  HStack,
  Heading,
  ScrollView,
  Stack,
  Text,
  View,
  Container,
  List,
} from "native-base"
//import { RefreshControl } from "react-native";
import React, { useEffect, useState } from "react"
import MapView, { Marker, Polygon } from "react-native-maps"
import { StyleSheet } from "react-native"
import * as Location from "expo-location"
import AddPoints from "../components/AddPoints"
import useListLeaderboard from "../hooks/useListLeaderboard"
import MapDisplay from "../components/MapDisplay"
import Leaderboard from "../components/Leaderboard"

enum HomeScreen {
  MAP = "map",
  LEADERBOARD = "leaderboard",
  REPORT = "report",
  FIND = "find",
}

const Home = () => {
  const [userLocation, setUserLocation] = useState<any>(null)
  const [showLeaderboard, setShowLeaderBoard] = useState(false)
  const [view, setView] = useState<HomeScreen>(HomeScreen.MAP)

  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") {
        return
      } else {
        let location = await Location.getCurrentPositionAsync({})
        setUserLocation(location)
      }
    })()
  }, [])

  return (
    <>
      <Box
        bg={{
          linearGradient: {
            colors: ["#F8FAFD", "#F8FAFD"],
            start: [0.5, 0],
            end: [0.5, 0.5],
          },
        }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <View mt={"50px"}>
          <Stack justifyContent={"space-between"} alignItems={"center"}>
            <ScrollView mb={10}>
              <Stack
                justifyContent={"space-between"}
                alignItems={"center"}
                space={2}
              >
                <Heading fontWeight={600} size="sm" color="#999999">
                  Litter Ladder
                </Heading>
                <HStack space={2} alignItems={"center"}>
                  <Button
                    variant={"solid"}
                    colorScheme={"primary"}
                    _text={{ color: "white" }}
                    onPress={() => {
                      if (view === HomeScreen.LEADERBOARD) {
                        setView(HomeScreen.MAP)
                      } else {
                        setView(HomeScreen.LEADERBOARD)
                      }
                    }}
                  >
                    {view === HomeScreen.LEADERBOARD ? "Home" : "Leaderboard"}
                  </Button>
                  <Button
                    variant={"solid"}
                    colorScheme={"primary"}
                    _text={{ color: "white" }}
                    onPress={() => {
                      if (view === HomeScreen.REPORT) {
                        setView(HomeScreen.MAP)
                      } else {
                        setView(HomeScreen.REPORT)
                      }
                    }}
                  >
                    Add Points
                  </Button>
                </HStack>
                <HStack minHeight={"400px"}>
                  {view === HomeScreen.MAP && (
                    <MapDisplay userLocation={userLocation} />
                  )}
                  {view === HomeScreen.LEADERBOARD && <Leaderboard />}
                  {view === HomeScreen.REPORT && (
                    <AddPoints
                      location={{
                        latitude: userLocation?.coords.latitude,
                        longitude: userLocation?.coords.longitude,
                      }}
                    />
                  )}
                  {view === HomeScreen.FIND && <Text>Find</Text>}
                </HStack>
                <HStack space={2} alignItems={"center"}>
                  <Button
                    variant={"solid"}
                    colorScheme={"primary"}
                    _text={{ color: "white" }}
                    onPress={() => {
                      if (view === HomeScreen.FIND) {
                        setView(HomeScreen.MAP)
                      } else {
                        setView(HomeScreen.FIND)
                      }
                    }}
                    width={"60%"}
                  >
                    I Wanna Help!
                  </Button>
                </HStack>
              </Stack>
            </ScrollView>
          </Stack>
        </View>
      </Box>
    </>
  )
}
export default Home
