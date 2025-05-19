import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import { router } from 'expo-router'; // For navigation

export default function App() {
  const [role, setRole] = useState('Administrative Aide');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (role === 'Administrative Aide') {
      router.push('/adminapp/clearance');
    } else if (role === 'Inspector') {
      router.push('/inspectorapp/assigned');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image source={require('../assets/bopems.png')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>

      {/* Role Selection */}
      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[styles.roleButton, role === 'Administrative Aide' && styles.selectedRole]}
          onPress={() => setRole('Administrative Aide')}
        >
          <Text style={styles.roleText(role === 'Administrative Aide')}>Administrative Aide</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.roleButton, role === 'Inspector' && styles.selectedRole]}
          onPress={() => setRole('Inspector')}
        >
          <Text style={styles.roleText(role === 'Inspector')}>Inspector</Text>
        </TouchableOpacity>
      </View>

      {/* Optional: You can hide these inputs if not needed at all */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styling remains unchanged
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  roleContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },
  roleButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#888',
    backgroundColor: '#fff',
    marginHorizontal: 5,
  },
  selectedRole: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  roleText: (selected) => ({
    color: selected ? '#fff' : '#333',
    fontWeight: '600',
  }),
  input: {
    width: '100%',
    padding: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
