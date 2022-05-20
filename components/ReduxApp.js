import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as pageActions from '../Redux/actions/pageList';
import {Text, View, StyleSheet, Button} from 'react-native';

class ReduxApp extends Component {
  incrementCount() {
    let {action} = this.props;
    action.getPageList();
  }

  render() {
    const {pageList} = this.props;
    console.log(pageList);
    return (
      <View style={styles.container}>
        <Button title="Get Employee" onPress={() => this.incrementCount()} />
        {pageList.map(employee => (
          <Text style={styles.textCenter}>{employee.employee_name}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
});

const mapStateToProps = state => ({
  pageList: state.pageList.pageList,
});

const ActionCreators = Object.assign({}, pageActions);

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxApp);
