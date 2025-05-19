import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { useRouter } from 'expo-router';

const applicants = [
  { id: '1', name: 'Jomar Cerda', applicantNumber: 'BP-2025-002-C' },
  { id: '2', name: 'Aaron James', applicantNumber: 'BP-2025-002-C' },
  { id: '3', name: 'Laurance Francisco', applicantNumber: 'BP-2025-002-C' },
];

export default function Assigned() {
  const router = useRouter();

  const handleLocationPress = () => {
    // Navigate to the location page
    router.push('/inspectorapp/map');
  };

  const handleReportPress = () => {
    // Navigate to the report page
    router.push('/inspectorapp/report');
  };

  const handleLogout = () => {
    // Navigate to the home or login screen
    router.push('/');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Assigned Applicants</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={applicants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.applicantNumber}>Applicant Number: {item.applicantNumber}</Text>
              </View>

              {/* Buttons Container aligned to the right */}
              <View style={styles.buttonsContainer}>
                {/* Location Button */}
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleLocationPress}
                >
                  <Ionicons name="location-sharp" size={24} color="black" />
                </TouchableOpacity>

                {/* Report Button */}
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleReportPress}
                >
                  <Ionicons name="document-text" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  applicantNumber: {
    fontSize: 12, // Reduced font size for applicant number
    color: '#888',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto', // This aligns the buttons to the right side of the card
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
});
