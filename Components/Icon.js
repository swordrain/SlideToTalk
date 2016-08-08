import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View
} from 'react-native';

export default class Icon extends Component {
	constructor(props){
		super(props);

	}


	render(){
    let {highlight} = this.props;
    let opacity = highlight? 0.7: 1;
		return(
			<View style={[styles.container, {opacity: opacity}]}>
				<Image style={styles.icon} source={require('../phone.png')}>

				</Image>
			</View>

			)
	}
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
  	width: 32,
  	height: 32,

  }
 
});