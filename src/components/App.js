import React from "react";
import {View , Text ,StyleSheet} from "react-native"
import ajax from '../ajax';

class App extends React.Component{
    state ={
        deals: [],
    }
    async componentDidMount(){ 
        const deals = await ajax.fetchInitialDeals();
        this.setState((prevState) => {
            return {deals}
        })
        console.log(this.state.deals)
    }
    render() {
        return( 
                <View style={styles.container}>
                    <Text style={styles.header} >Bake Sale</Text>
                    {/* <Text style={styles.header} >{JSON.stringify(this.deals)}</Text> */}
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