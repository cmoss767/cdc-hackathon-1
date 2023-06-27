import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Popover,
  ScrollView,
  Stack,
  Text,
  View,
  theme,
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
  const initialFocusRef = React.useRef(null)

  const { data, isLoading, refetch } = useFindTrash()

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
    refetch()
  }

  return (
    <>
      <Box
        backgroundColor={"#BFCC94"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <View mt={"75px"}>
          <Stack justifyContent={"space-between"} alignItems={"center"}>
            <ScrollView mb={10}>
              <Stack
                justifyContent={"space-between"}
                alignItems={"center"}
                space={2}
              >
                <Heading
                  fontWeight={600}
                  size="lg"
                  color={"primary.600"}
                  mb={-2}
                >
                  🗑️ Litter Ladder 🪜
                </Heading>
                <Divider
                  color={"primary.600"}
                  bgColor={"primary.600"}
                  w={"60%"}
                />
                <HStack space={2} alignItems={"center"}>
                  <Button
                    w={"150px"}
                    variant={"solid"}
                    colorScheme={"primary"}
                    _text={{ color: theme.colors.white }}
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
                    _text={{ color: theme.colors.white }}
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
                      : "Report/Pickup"}
                  </Button>
                </HStack>
                <HStack minHeight={"400px"} maxHeight={"75%"} maxWidth={"100%"}>
                  {view === HomeScreen.MAP && (
                    <MapDisplay
                      userLocation={userLocation}
                      helpLocation={data?.location}
                      ecoBotSays={data?.text}
                      isBotLoading={isLoading}
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
                <HStack space={2} alignItems={"center"}>
                  <Button
                    variant={"solid"}
                    colorScheme={"primary"}
                    _text={{ color: theme.colors.white }}
                    onPress={() => {
                      handlePressHelp()
                    }}
                    width={!toggleMap ? "320px" : "150px"}
                  >
                    {toggleMap && view === HomeScreen.MAP
                      ? "Current Location"
                      : "I Wanna Help!"}
                  </Button>
                  {toggleMap && !isLoading && (
                    <Popover
                      initialFocusRef={initialFocusRef}
                      trigger={(triggerProps) => {
                        return (
                          <Button
                            w={"150px"}
                            variant={"solid"}
                            {...triggerProps}
                          >
                            🤖 EcoBot Says...
                          </Button>
                        )
                      }}
                    >
                      <Popover.Content width="80">
                        <Popover.Arrow />
                        <Popover.CloseButton />
                        {/* @ts-ignore */}
                        <Popover.Header>🤖 EcoBot Says...</Popover.Header>
                        <Popover.Body>{data?.text}</Popover.Body>
                      </Popover.Content>
                    </Popover>
                  )}
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
