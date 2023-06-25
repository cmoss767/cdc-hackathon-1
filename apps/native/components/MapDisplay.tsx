import React from "react"
import MapView, { Marker } from "react-native-maps"
import { StyleSheet } from "react-native"

interface MapDisplayProps {
  userLocation: any
}

const MapDisplay = ({ userLocation }: MapDisplayProps) => {
  const styles = StyleSheet.create({
    map: {
      width: "100%",
      height: "100%",
    },
  })

  return (
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
  )
}

export default MapDisplay
