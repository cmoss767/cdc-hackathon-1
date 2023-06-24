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

const Home = () => {
  const [userLocation, setUserLocation] = useState<any>(null)
  const [showLeaderboard, setShowLeaderBoard] = useState(false)

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

  const styles = StyleSheet.create({
    map: {
      width: "100%",
      height: "100%",
    },
  })
  const { data } = useListLeaderboard()
  console.log(data)

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
                  Eco Chamber
                </Heading>
                <HStack space={2} alignItems={"center"}>
                  <Button
                    variant={"solid"}
                    colorScheme={"primary"}
                    _text={{ color: "white" }}
                    onPress={() => {}}
                    width={"60%"}
                  >
                    EcoBot
                  </Button>
                </HStack>
                <HStack minHeight={"400px"}>
                  {userLocation && !showLeaderboard ? (
                    <MapView
                      style={styles.map}
                      region={{
                        latitude: userLocation?.coords.latitude,
                        longitude: userLocation?.coords.longitude,
                        latitudeDelta: 0.04,
                        longitudeDelta: 0.02,
                      }}
                    >
                      <Marker
                        coordinate={userLocation?.coords}
                        title={"Your Location"}
                        pinColor="#000000"
                      />
                    </MapView>
                  ) : showLeaderboard ? (
                    <Container>
                      <List>
                        {data
                          ?.filter((el: any) => el.name && el)
                          .map((leaders: any) => {
                            return <Text>{leaders.name}</Text>
                          })}
                      </List>

                      <Text>Leaderboard</Text>
                    </Container>
                  ) : (
                    <Text>loading map...</Text>
                  )}
                </HStack>

                <HStack space={2} alignItems={"center"}>
                  {showLeaderboard ? (
                    <Button
                      variant={"solid"}
                      colorScheme={"primary"}
                      _text={{ color: "white" }}
                      onPress={() => {
                        setShowLeaderBoard(false)
                      }}
                    >
                      Map
                    </Button>
                  ) : (
                    <Button
                      variant={"solid"}
                      colorScheme={"primary"}
                      _text={{ color: "white" }}
                      onPress={() => {
                        setShowLeaderBoard(true)
                        console.log("press")
                      }}
                    >
                      Leaderboard
                    </Button>
                  )}

                  <Button
                    variant={"solid"}
                    colorScheme={"primary"}
                    _text={{ color: "white" }}
                    onPress={() => {}}
                  >
                    Add Points
                  </Button>
                </HStack>
                <AddPoints />
              </Stack>
            </ScrollView>
          </Stack>
        </View>
      </Box>
    </>
  )
}
export default Home
