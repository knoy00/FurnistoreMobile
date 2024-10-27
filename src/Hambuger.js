import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HamburgerMenu = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [livingRoomOpen, setLivingRoomOpen] = useState(false);
  const [bedroomOpen, setBedroomOpen] = useState(false);
  // Add states for other dropdowns as needed

  const toggleCategory = () => setCategoryOpen(!categoryOpen);
  const toggleLivingRoom = () => setLivingRoomOpen(!livingRoomOpen);
  const toggleBedroom = () => setBedroomOpen(!bedroomOpen);

  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={toggleCategory}>
        <Text style={styles.menuItem}>Shop by Category</Text>
      </TouchableOpacity>
      {categoryOpen && (
        <View style={styles.dropdown}>
          <TouchableOpacity onPress={toggleLivingRoom}>
            <Text style={styles.subMenuItem}>Living Room</Text>
          </TouchableOpacity>
          {livingRoomOpen && (
            <View style={styles.subDropdown}>
              <Text style={styles.subMenuItem}>Sofas</Text>
              <Text style={styles.subMenuItem}>Coffee Tables</Text>
              <Text style={styles.subMenuItem}>TV Units</Text>
            </View>
          )}
          <TouchableOpacity onPress={toggleBedroom}>
            <Text style={styles.subMenuItem}>Bedroom</Text>
          </TouchableOpacity>
          {bedroomOpen && (
            <View style={styles.subDropdown}>
              <Text style={styles.subMenuItem}>Beds</Text>
              <Text style={styles.subMenuItem}>Dressers</Text>
              <Text style={styles.subMenuItem}>Nightstands</Text>
            </View>
          )}
          {/* Add more categories and dropdowns as needed */}
        </View>
      )}
      {/* Other menu items can be added here */}
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 50
  },
  menuItem: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dropdown: {
    paddingLeft: 10,
  },
  subMenuItem: {
    fontSize: 16,
    paddingVertical: 5,
  },
  subDropdown: {
    paddingLeft: 10,
    paddingTop: 5,
  },
});

export default HamburgerMenu;
