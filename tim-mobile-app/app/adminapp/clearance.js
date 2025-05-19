import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { useRouter } from 'expo-router';

const applicants = [
  {
    id: '1',
    name: 'Jomar Cerda',
    applicantNumber: 'BP-2025-002-C',
    clearances: {
      barangay: '2025-05-01',
      enro: '2025-05-03',
      dole: '2025-05-04',
      health: 'N/A',
      dpwh: '2025-05-06',
    },
  },
  {
    id: '2',
    name: 'Aaron James',
    applicantNumber: 'BP-2025-002-C',
    clearances: {
      barangay: '2025-05-01',
      enro: 'N/A',
      dole: '2025-05-05',
      health: '2025-05-02',
      dpwh: '2025-05-03',
    },
  },
  {
    id: '3',
    name: 'Laurance Francisco',
    applicantNumber: 'BP-2025-002-C',
    clearances: {
      barangay: '2025-05-01',
      enro: '2025-05-03',
      dole: '2025-05-04',
      health: '2025-05-05',
      dpwh: '2025-05-06',
    },
  },
];

export default function Assigned() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/'); // Redirect to the home or empty route
  };

  const renderClearanceRow = (clearances) => {
    return Object.entries(clearances).map(([type, date]) => (
      <View style={styles.clearanceRow} key={type}>
        <Text style={styles.clearanceLabel}>{type.toUpperCase()} Clearance:</Text>
        <Text style={styles.clearanceDate}>{date}</Text>
        {date === 'N/A' && (
          <Ionicons name="time-outline" size={18} color="#e67e22" style={{ marginLeft: 5 }} />
        )}
      </View>
    ));
  };

  const renderReminder = (name, clearances) => {
    const missing = Object.entries(clearances)
      .filter(([_, date]) => date === 'N/A')
      .map(([type]) => `${type.charAt(0).toUpperCase() + type.slice(1)} Clearance`);

    if (missing.length === 0) return null;

    return (
      <Text style={styles.reminder}>
        A reminder has been issued to {name} regarding the submission of the following clearances: [{missing.join(', ')}].
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Clearances Status Label */}
        <Text style={styles.clearanceStatusLabel}>Clearances Status</Text>
        
        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={applicants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.applicantNumber}>Applicant Number: {item.applicantNumber}</Text>

            <View style={{ marginTop: 10 }}>{renderClearanceRow(item.clearances)}</View>
            {renderReminder(item.name, item.clearances)}
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
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearanceStatusLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10, // Added to create space between label and logout button
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
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  applicantNumber: {
    fontSize: 12,
    color: '#888',
  },
  clearanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  clearanceLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#555',
    width: 150,
  },
  clearanceDate: {
    fontSize: 14,
    color: '#333',
  },
  reminder: {
    marginTop: 10,
    color: '#e74c3c',
    fontSize: 13,
    fontStyle: 'italic',
  },
});
