import React, { useRef } from "react"
import MapView, { Callout, Marker } from "react-native-maps"
import { Linking, StyleSheet } from "react-native"
import useGetTrashReports from "../hooks/useGetTrashReports"
import {
  Box,
  HStack,
  Heading,
  Modal,
  Popover,
  Spinner,
  Stack,
  Text,
} from "native-base"

interface MapDisplayProps {
  userLocation: any
  helpLocation: any
  toggleMap: boolean
}

const MapDisplay = ({
  userLocation,
  helpLocation,
  toggleMap,
}: MapDisplayProps) => {
  const styles = StyleSheet.create({
    map: {
      width: "100%",
      height: "100%",
    },
  })

  const { data, isLoading, isError } = useGetTrashReports()

  console.log(toggleMap, "toggleMap")

  const trashReports = data
    ?.filter((trash: any) => trash.report === false)
    ?.map((trash: any) => {
      return trash.location.latitude && trash.location.longitude ? (
        <Marker
          key={trash.id}
          coordinate={{
            latitude: trash?.location?.latitude,
            longitude: trash?.location?.longitude,
          }}
          title="Trash Reported! 🚯"
          description={`${trash.name ? trash.name : "A user"} reported ${
            trash.amount
          } ${trash.amount > 1 ? "pieces" : "piece"} of trash here! 😱`}
          pinColor={
            trash.severity === "LOW"
              ? "#FFCF00"
              : trash.severity === "MEDIUM"
              ? "#EE6123"
              : "#FA003F"
          }
        />
      ) : null
    })

  const pickupReports = data
    ?.filter((trash: any) => trash.report === true)
    ?.map((trash: any) => {
      return trash.location.latitude && trash.location.longitude ? (
        <Marker
          key={trash.id}
          coordinate={{
            latitude: trash?.location[0],
            longitude: trash?.location[1],
          }}
          title="Trash Picked Up! 🙌"
          description={`${
            trash.name ? trash.name : "An anonymous user"
          } picked up ${trash.amount} ${
            trash.amount > 1 ? "pieces" : "piece"
          } of trash here! 🥳`}
          pinColor="#FEEFE5"
        />
      ) : null
    })

  return (
    <>
      {userLocation && !isLoading ? (
        <MapView
          style={styles.map}
          region={
            toggleMap
              ? {
                  latitude: helpLocation?.[0],
                  longitude: helpLocation?.[1],
                  latitudeDelta: 0.04,
                  longitudeDelta: 0.02,
                }
              : {
                  latitude: userLocation?.coords.latitude,
                  longitude: userLocation?.coords.longitude,
                  latitudeDelta: 0.04,
                  longitudeDelta: 0.02,
                }
          }
        >
          <Marker
            coordinate={userLocation?.coords}
            title={"Your Location"}
            pinColor="#00916E"
          />
          {trashReports}

          {pickupReports}

          <Box
            w={toggleMap ? "100%" : "0%"}
            h={"100px"}
            bg={"white"}
            rounded={"lg"}
            shadow={1}
            opacity={0.8}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Heading>Head to the Pink Pin! 🏃‍♂️</Heading>
            <Text>EcoBot predicts that there is trash in this area! 🤖</Text>
          </Box>

          {toggleMap && (
            <>
              <Marker
                coordinate={{
                  latitude: helpLocation?.[0],
                  longitude: helpLocation?.[1],
                }}
                title={"Press here..."}
                description="to start a route to this location! 🗺"
                onCalloutPress={() => {
                  Linking.openURL(
                    `https://www.google.com/maps/dir/?api=1&destination=${helpLocation?.[0]},${helpLocation?.[1]}`
                  )
                }}
                pinColor="#ffa7d5"
                isPreselected={true}
              />
            </>
          )}
        </MapView>
      ) : (
        <HStack alignItems={"center"} justifyContent={"center"}>
          <Spinner />
          <Text>Loading location... 🌎</Text>
        </HStack>
      )}
    </>
  )
}

export default MapDisplay
