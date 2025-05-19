import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from 'react-native-vector-icons';
import { Link } from 'expo-router';

export default function App() {
  const cityHallLatitude = 13.625833;
  const cityHallLongitude = 123.198611;

  return (
    <View style={styles.container}>
      {/* Map */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: cityHallLatitude,
          longitude: cityHallLongitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: cityHallLatitude,
            longitude: cityHallLongitude,
          }}
          title="Naga City Hall"
          description="Naga City Hall, Camarines Sur"
        />
      </MapView>

      {/* Icon buttons */}
      <View style={styles.iconButtonContainer}>
        <Link href="/inspectorapp/assigned" asChild>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="arrow-back-outline" size={24} color="white" />
          </TouchableOpacity>
        </Link>

        <Link href="/inspectorapp/report" asChild>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="document-text-outline" size={24} color="white" />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: '90%',
  },
  iconButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  iconButton: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
