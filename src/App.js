/**
 * Batuhan OZALP
 */

import React from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import Card from './components/PatikaStore';
import store_data from './patika_store.json'


const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        ÖZALP STORE
      </Text>
      <TextInput placeholder='Ara...' style={styles.search_bar} />
    </View>
  );
};

const renderItems = ({ item }) => <Card products={item} />
const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          ÖZALP STORE
        </Text>
        <TextInput placeholder='Ara...' style={styles.search_bar} />
      </View>
      <FlatList
        data={store_data}
        renderItem={renderItems}
        //horizontal={false}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:
  {
    backgroundColor: '#fff',
    flex: 1,
  },
  header:
  {
    height: '15%',
    backgroundColor: '#dedede',
  },
  search_bar:
  {
    backgroundColor: '#fff',
    marginBottom: 15,
    marginTop: 10,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,
  },
  title: {
    marginTop: 10,
    color: 'purple',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
