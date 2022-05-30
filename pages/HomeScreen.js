import React, {useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import Mytext from './component/Mytext';
import Mybutton from './component/Mybutton';

var db = SQLite.openDatabase({name: 'UserDatabase', location: 'default'});

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user",
        [],
        function (tx, res) {
          console.log('item: ', res.rows.length);

          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT,user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(225))',
              [],
            );
          }
        },
      );
    });
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <Mytext text="Sqlite Example" />
          <Mybutton
            title="Register"
            customeClick={() => navigation.navigate('Register')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
