import React from "react"
import MapView, { Marker } from "react-native-maps"
import { StyleSheet } from "react-native"
import useGetTrashReports from "../hooks/useGetTrashReports"
import { HStack, Spinner, Text } from "native-base"

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
            latitude: trash?.location?.latitude,
            longitude: trash?.location?.longitude,
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
                  latitude: helpLocation?.coords.latitude,
                  longitude: helpLocation?.coords.longitude,
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
          {toggleMap && (
            <Marker
              coordinate={helpLocation?.coords}
              title={"Head Here to Help! 🏃‍♂️"}
              description="The EcoBot has predicted trash in this area! 🤖"
              pinColor="#B4CDED"
            />
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
