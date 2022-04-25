import React from "react";
import {View , Text ,StyleSheet} from "react-native"    
import DealList from "./DealList";
import ajax from '../ajax';

class App extends React.Component{
    state ={
        deals: [],
    }
    async componentDidMount(){ 
        const deals = await ajax.fetchInitialDeals();
        this.setState({deals})
        console.log(this.state.deals)
    }
    render() {
        return( 
                <View style={styles.container}>
                    { this.state.deals.length > 0 ? <DealList deals={this.state.deals} ></DealList> : <Text style={styles.header} >Bake Sale</Text>}
                    
                </View >
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,  
        justifyContent:'center',
        alignItems:'center',
        
    },
    header:{
        fontSize:40,
    }
    
})
export default App;