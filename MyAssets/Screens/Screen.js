import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {increaseBurgerAction, decreaseBurgerAction} from '../Redux/index';

export class Screen extends Component {
  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{marginVertical: 50}}>
          <Text>Number of burger = {this.props.numberOfBurger} </Text>
          <Button
            title="Increase Burger"
            onPress={() => {
              this.props.increaseBurger(5);
            }}
          />
        </View>
        <View style={{marginVertical: 50}}>
          <Button
            title="Decrease Burger"
            onPress={() => {
              this.props.decreaseBurger();
            }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    numberOfBurger: state.numberOfBurger,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseBurger: parameter => {
      dispatch(increaseBurgerAction(parameter));
    },
    decreaseBurger: () => {
      dispatch(decreaseBurgerAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
