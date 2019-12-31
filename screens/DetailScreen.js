import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import DetailHeader from '../components/DetailHeader'

export default class DetailScreen extends React.Component {
    static navigationOptions = {
        tableBarIcon : ({tintColor}) => (
          <MaterialCommunityIcons name = "calendar-multiselect" size={30} style={{color:tintColor}}/>
        )
      }

    post = this.props.navigation.getParam('post')

    render(){
        return (
          <SafeAreaView style={styles.container}>
            <DetailHeader deleteProps={this._deletesignal} />
             {this.post ? (
             <View>
              <View style={styles.detailbox}>
                <Text style={styles.detailtitle}>제목 : {this.post.title}</Text>
              </View>
                {this.post.imageUri ? (<Image source={{ uri: this.post.imageUri }} style={{ width: 200, height: 200 }}/>) : null}
              <View style={styles.detailbox}>
              <Text style={styles.detailcontent}>
                내용 : {this.post.content}
              </Text>
            </View>
          </View>
        ) : (
          <NullPage />
        )}
            </SafeAreaView>
          );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
  },
  textstyle:{
      fontSize:40,
  },
  detailbox: {
    marginVertical: 30,
    marginLeft: 30,
    borderLeftColor: "#c8d6e5",
    borderLeftWidth: 5,
    paddingLeft: 20
  },
  detailtitle: {
    fontSize: 40
  },
  detailcontent: {
    fontSize: 20
  }
});


