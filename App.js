import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
      <View style={{ flex: 1, padding: 100, backgroundColor: "gainsboro", flexDirection: 'row' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>row</Text>
        <View style={{ width: 70, height: 70, backgroundColor: 'darkblue' }}>
        </View>
        <View style={{ width: 70, height: 70, backgroundColor: 'mediumblue' }}>
        </View>
        <View style={{ width: 70, height: 70, backgroundColor: 'blue' }}>
        </View>
      <View style={{ flex: 2, padding: 100, backgroundColor: "gainsboro", flexDirection: 'column' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>column</Text>
        <View style={{ width: 70, height: 70, backgroundColor: 'mediumvioletred' }}>
        </View>
        <View style={{ width: 70, height: 70, backgroundColor: 'deeppink' }}>
        </View>
        <View style={{ width: 70, height: 70, backgroundColor: 'hotpink' }}>
        </View>
      </View>
      <View style={{ flex: 3, padding: 100, backgroundColor: "gainsboro", flexDirection: 'column-reverse' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>column-reverse</Text>
        <View style={{ width: 70, height: 70, backgroundColor: 'darkgreen' }}>
        </View>
        <View style={{ width: 70, height: 70, backgroundColor: 'limegreen' }}>
        </View>
        <View style={{ width: 70, height: 70, backgroundColor: 'chartreuse' }}>
        </View>
      </View>
      <View style={{ flex: 4, padding: 100, backgroundColor: "gainsboro", flexDirection: 'row-reverse' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>row-reverse</Text>
        <View style={{ width: 70, height: 70, backgroundColor: 'orangered' }}>
        </View>
        <View style={{ width: 70, height: 70, backgroundColor: 'darkorange' }}>
        </View>
        <View style={{ width: 70, height: 70, backgroundColor: 'orange' }}>
        </View>
      </View>
      </View>
  );
}
