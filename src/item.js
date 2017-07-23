import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button, PricingCard, onButtonPress } from 'react-native-elements';

class Items extends Component {

onButtonPress() {
    alert("Thank you for Shopping");
}

    render () {
        return (
        <View>
            <Image style={styles.stretch}
            source={require('../images/ap700.jpg')}
            />
            <Text>Air Locker AP700 Heavy Duty Professional Punch Nailer / Nail Remover</Text>
            <PricingCard
            color='#4f9deb'
            title='Free Shipping'
            price='$49.99'
           info={['1 User', 'Basic Support', 'All Core Features']}
            button={{ title: 'Buy', icon: 'flight-takeoff' }}
            TouchableOpacity={this.onButtonPress.bind(this)}
            />
             {/*<Button
             raised
            icon={{name: 'shopping-cart', size: 32}}
            buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
            textStyle={{textAlign: 'center'}}
            title={`Add to Cart`}
             />*/}
        </View>
        )
    }
}
const styles = StyleSheet.create({
  stretch: {
    width: 200,
    height:200,
    justifyContent: 'center',
    // flex: 1
  }
});

export default Items;