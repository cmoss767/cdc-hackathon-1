import {
  Box,
  Button,
  HStack,
  Heading,
  ScrollView,
  Stack,
  Text,
  View,
} from "native-base"
import React, { useEffect, useState } from "react"
import * as Location from "expo-location"
import AddPoints from "../components/AddPoints"
import MapDisplay from "../components/MapDisplay"
import Leaderboard from "../components/Leaderboard"
import useFindTrash from "../hooks/useFindTrash"
import useListLeaderboard from "../hooks/useListLeaderboard"

enum HomeScreen {
  MAP = "map",
  LEADERBOARD = "leaderboard",
  REPORT = "report",
}

const Home = () => {
  const [userLocation, setUserLocation] = useState<any>(null)
  const [view, setView] = useState<HomeScreen>(HomeScreen.MAP)
  const [toggleMap, setToggleMap] = useState<boolean>(false)

  const { data, isLoading } = useFindTrash()

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

  const handlePressHelp = () => {
    if (view === HomeScreen.MAP && toggleMap === false) {
      setToggleMap(true)
    } else if (view === HomeScreen.MAP && toggleMap === true) {
      setView(HomeScreen.MAP)
      setToggleMap(false)
    } else {
      setView(HomeScreen.MAP)
      setToggleMap(true)
    }
  }

  return (
    <>
      <Box
        backgroundColor={"#BFCC94"}
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
                    w={"150px"}
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
                    {view === HomeScreen.LEADERBOARD
                      ? "Return To Map"
                      : "Leaderboard"}
                  </Button>
                  <Button
                    w={"150px"}
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
                    {view === HomeScreen.REPORT
                      ? "Return To Map"
                      : "Report/Resolve"}
                  </Button>
                </HStack>
                <HStack minHeight={"400px"} maxHeight={"75%"} maxWidth={"100%"}>
                  {view === HomeScreen.MAP && (
                    <MapDisplay
                      userLocation={userLocation}
                      helpLocation={
                        //data || ""
                        ""
                      }
                      toggleMap={toggleMap}
                    />
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
                </HStack>
                <HStack space={0} alignItems={"center"}>
                  <Button
                    variant={"solid"}
                    colorScheme={"primary"}
                    _text={{ color: "white" }}
                    onPress={() => {
                      handlePressHelp()
                    }}
                    width={"320px"}
                  >
                    {toggleMap && view === HomeScreen.MAP
                      ? "Back To My Current Location"
                      : "I Wanna Help!"}
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
