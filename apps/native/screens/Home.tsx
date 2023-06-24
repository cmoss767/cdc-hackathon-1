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
} from "native-base";
//import { RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker, Polygon } from "react-native-maps";
import { StyleSheet } from "react-native";
import * as Location from "expo-location";

const Home = () => {
  const [userLocation, setUserLocation] = useState<any>(null);

  console.log(userLocation);

  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      } else {
        let location = await Location.getCurrentPositionAsync({});
        setUserLocation(location);
      }
    })();
  }, []);

  const styles = StyleSheet.create({
    map: {
      width: "100%",
      height: "100%",
    },
  });

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
                  {userLocation ? (
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
                  ) : (
                    <Text>loading map...</Text>
                  )}
                </HStack>

                <HStack space={2} alignItems={"center"}>
                  <Button
                    variant={"solid"}
                    colorScheme={"primary"}
                    _text={{ color: "white" }}
                    onPress={() => {}}
                  >
                    Leaderboard
                  </Button>
                  <Button
                    variant={"solid"}
                    colorScheme={"primary"}
                    _text={{ color: "white" }}
                    onPress={() => {}}
                  >
                    Add Points
                  </Button>
                </HStack>
              </Stack>
            </ScrollView>
          </Stack>
        </View>
      </Box>
    </>
  );
};
export default Home;
