import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View,
  PanResponder
} from 'react-native';

import Icon from './Icon';

const MIN = 2;
const MAX = 198;
const THRESHOLD = 2;

export default class Track extends Component {
	constructor(props){
		super(props);
		this.state = {
			left: MIN,
			highlight: false,
			moveStart: false
		};
	}

	componentWillMount() {
    	this._panResponder = PanResponder.create({
    		onStartShouldSetPanResponder: (evt, gestureState) => {
    			
    			if (evt.nativeEvent.locationX >= MIN && evt.nativeEvent.locationX <= MIN + 50){
    				return true
    			}else{
    				return false
    			}
    		},
      		onStartShouldSetPanResponderCapture: (evt, gestureState) => {
      			if (evt.nativeEvent.locationX >= MIN && evt.nativeEvent.locationX <= MIN + 50){
    				return true
    			}else{
    				return false
    			}
      		},
      		onMoveShouldSetPanResponder: (evt, gestureState) => {
      			if (evt.nativeEvent.locationX >= MIN && evt.nativeEvent.locationX <= MIN + 50){
    				return true
    			}else{
    				return false
    			}
      		},
      		onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
      			if (evt.nativeEvent.locationX >= MIN && evt.nativeEvent.locationX <= MIN + 50){
    				return true
    			}else{
    				return false
    			}
      		},
    		onPanResponderGrant: (evt, gestureState) => {
	        	this.setState({
					highlight: true
	        	});
      		},
      		onPanResponderMove: (evt, gestureState) => {
		        let {dx} = gestureState;
		        if(dx >= MIN && dx < MAX - THRESHOLD){
		        	this.setState({
		        		left: gestureState.dx
		        	})
		    	}else if (dx >= MAX - THRESHOLD){
		    		alert("Now start to talk")
		    	}

		    },
		    onPanResponderRelease: (evt, gestureState) => {
	        	this.setState({
	        		highlight: false,
	        		left: MIN
	        	});
	      	},
    	})
    }

	render(){

		return (
			<View style={[styles.container, {paddingLeft: this.state.left}]} {...this._panResponder.panHandlers}>
				<Icon highlight={this.state.highlight}/>
			</View>

			)


	}

}
const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 56,
    backgroundColor: 'silver',
    borderRadius: 28,
    justifyContent: 'center',
	}
  });