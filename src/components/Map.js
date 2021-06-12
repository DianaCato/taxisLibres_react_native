import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height

const Map = () => {
  return (
    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={{
        latitude: 6.2257614,
        longitude: -75.5987337,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0922
      }}
    >

    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height
  }
})

export default Map