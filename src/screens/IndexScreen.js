import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({navigation}) => {
    //console.log(props);
  const { state, deleteBlogPost} = useContext(Context);

  return (
      
    <View>
     
      <FlatList
        data={state}
        keyExtractor={BlogPosts => BlogPosts.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
            onPress={() => navigation.navigate('Show', {id: item.id})}>

            <View style={styles.row}>
              <Text style={styles.title}>
                {" "}
                {item.title}- {item.id}{" "}
              </Text>
              <TouchableOpacity
              onPress={() => deleteBlogPost(item.id)} >
              <Feather style={styles.iocn} name="trash" />
              </TouchableOpacity>
            </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => <TouchableOpacity
        onPress={() => navigation.navigate('Create')}> 
       <Feather  name="plus" style={styles.create} />
        </TouchableOpacity> 
    }
}
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "grey"
  },
  title: {
    fontSize: 18
  },
  iocn: {
    fontSize: 24
  },
  create:{
      fontSize: 30,
      marginRight: 5,
      fontWeight: 'bold'
  }
});

export default IndexScreen;
