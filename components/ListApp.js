import React from 'react';
import {FlatList, View, Text, SectionList} from 'react-native';

const ListApp = () => {
  return (
    <View>
      <Text>FlatList</Text>
      <FlatList
        data={[
          {key: 'Abhi'},
          {key: 'Charan'},
          {key: 'Vishal'},
          {key: 'Nayan'},
          {key: 'Ashish'},
          {key: 'Mukund'},
          {key: 'Sachin'},
          {key: 'Akshay'},
          {key: 'Vijay'},
          {key: 'Rahul'},
          {key: 'Gopal'},
          {key: 'Basu'},
          {key: 'Iranna'},
          {key: 'Manthesh'},
          {key: 'Nagaraj'},
          {key: 'Pavan'},
          {key: 'Rohit'},
          {key: 'Sanket'},
          {key: 'Sourabh'},
          {key: 'Shrinath'},
          {key: 'Sai'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />

      <Text>{'\n\n'}SectionList</Text>
      <SectionList
        sections={[
          {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
          {
            title: 'J',
            data: [
              'Jackson',
              'James',
              'Jillian',
              'Jimmy',
              'Joel',
              'John',
              'Julie',
            ],
          },
        ]}
        renderItem={({item}) => <Text>{item}</Text>}
        renderSectionHeader={({section}) => <Text>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default ListApp;
