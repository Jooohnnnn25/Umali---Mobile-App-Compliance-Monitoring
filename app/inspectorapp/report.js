import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';

export default function LogbookReport() {
  const router = useRouter();

  // State variables
  const [weather, setWeather] = useState('');
  const [date, setDate] = useState('');
  const [siteEngineer, setSiteEngineer] = useState(0);
  const [unskilledLaborer, setUnskilledLaborer] = useState(0);
  const [constructionForeman, setConstructionForeman] = useState(0);
  const [timeKeeper, setTimeKeeper] = useState(0);
  const [skilledLaborer, setSkilledLaborer] = useState(0);
  const [shovel, setShovel] = useState(0);
  const [hoe, setHoe] = useState(0);
  const [spade, setSpade] = useState(0);
  const [barCutter, setBarCutter] = useState(0);
  const [diggingBlade, setDiggingBlade] = useState(0);
  const [barBender, setBarBender] = useState(0);
  const [dailyActivities, setDailyActivities] = useState('');
  const [saved, setSaved] = useState(false);

  // Auto-generate today's date
  useEffect(() => {
    const today = new Date().toLocaleDateString();
    setDate(today);
  }, []);

  // Calculate total manpower
  const totalManpower =
    siteEngineer +
    unskilledLaborer +
    constructionForeman +
    timeKeeper +
    skilledLaborer;

  const handleSave = () => {
    if (!weather || !dailyActivities) {
      Alert.alert('Error', 'Please fill out all fields before saving.');
      return;
    }

    // Simulate save action
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      router.push('/inspectorapp/assigned');
    }, 2000); // Redirect after 2 seconds
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Logbook Report</Text>

      {/* Date */}
      <Text style={styles.dateText}>{date}</Text>

      {/* Weather Dropdown */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weather</Text>
        <Picker
          selectedValue={weather}
          style={styles.picker}
          onValueChange={(itemValue) => setWeather(itemValue)}
        >
          <Picker.Item label="Select Weather" value="" />
          <Picker.Item label="Fair Weather" value="Fair Weather" />
          <Picker.Item label="Stormy" value="Stormy" />
          <Picker.Item label="Cloudy" value="Cloudy" />
          <Picker.Item label="Rainy" value="Rainy" />
        </Picker>
      </View>

      {/* Manpower */}
      <Text style={styles.subTitle}>Manpower Organization</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Site Engineer</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={String(siteEngineer)}
          onChangeText={(text) => setSiteEngineer(Number(text))}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Unskilled Laborer</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={String(unskilledLaborer)}
          onChangeText={(text) => setUnskilledLaborer(Number(text))}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Construction Foreman</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={String(constructionForeman)}
          onChangeText={(text) => setConstructionForeman(Number(text))}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Time Keeper</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={String(timeKeeper)}
          onChangeText={(text) => setTimeKeeper(Number(text))}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Skilled Laborer</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={String(skilledLaborer)}
          onChangeText={(text) => setSkilledLaborer(Number(text))}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Total Manpower: {totalManpower}</Text>
      </View>

      {/* Equipment Tool Used */}
      <Text style={styles.subTitle}>Equipment Tool Used</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Shovel</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={String(shovel)}
          onChangeText={(text) => setShovel(Number(text))}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Hoe</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={String(hoe)}
          onChangeText={(text) => setHoe(Number(text))}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Spade</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={String(spade)}
          onChangeText={(text) => setSpade(Number(text))}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Bar Cutter</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={String(barCutter)}
          onChangeText={(text) => setBarCutter(Number(text))}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Digging Blade</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={String(diggingBlade)}
          onChangeText={(text) => setDiggingBlade(Number(text))}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Bar Bender</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={String(barBender)}
          onChangeText={(text) => setBarBender(Number(text))}
        />
      </View>

      {/* Daily Activities */}
      <Text style={styles.subTitle}>Daily Activities Report</Text>
      <TextInput
        style={styles.textArea}
        multiline
        numberOfLines={4}
        value={dailyActivities}
        onChangeText={(text) => setDailyActivities(text)}
        placeholder="Enter activities here..."
      />

      {/* Action Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => router.push('/inspectorapp/assigned')} style={styles.returnButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
          {saved ? (
            <Ionicons name="checkmark-circle" size={24} color="white" />
          ) : (
            <Ionicons name="save" size={24} color="white" />
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
    paddingBottom: 40, // Added padding for bottom space
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  dateText: {
    fontSize: 18,
    color: '#888',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    textAlignVertical: 'top',
  },
  picker: {
    height: 70, // Increased height for visibility
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10, // Added margin for better spacing
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  returnButton: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
  },
});
