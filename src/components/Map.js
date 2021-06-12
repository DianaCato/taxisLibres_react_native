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
        latitude: 4.6097100,
        longitude: -74.0817500,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0922
      }}
    >
      <MapView.Marker
      coordinate={{
        latitude: 4.7105033, 
        longitude: -74.0764797067065
      }}
      title={"Exito"}
      description={"Cadena de supermercado"}
      />

     <MapView.Marker
      coordinate={{
        latitude:  4.7113889, 
        longitude: -74.072777777777
      }}
      title={"Carulla"}
      description={"Cadena de supermercado"}
      />

    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height
  }
})

export default Map