import React, { Component } from 'react';
import {View , Text ,StyleSheet , FlatList} from "react-native";
import PropsTypes from 'prop-types';


class DealList extends Component {
    static PropsTypes={
        deals: PropsTypes.array.isRequired,
    }
  render() {
    return (
        <View style={styles.view}>
            <FlatList 
                data={this.props.deals}
                renderItem={({item}) => <Text >{item.title}</Text>}
            /> 
      </View>
    )
  }
}

const styles= StyleSheet.create({
    view:{
        backgroundColor:'#eee',
        flex: 1,
        width: '100%',
        paddingTop: 20,
    }
})

export default DealList