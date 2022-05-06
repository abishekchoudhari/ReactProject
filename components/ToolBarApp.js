import React from 'react';
import ToolbarAndroid from '@react-native-community/toolbar-android';

const ToolBarApp = () => {
  const onActionSelected = index => {
    if (index === 1) {
    }
  };

  return (
    <ToolbarAndroid
      logo={{
        uri: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
      }}
      title="ToolBar App"
      actions={[
        {
          title: 'Settings',
          icon: {
            uri: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
          },
          show: 'always',
        },
      ]}
      onActionSelected={onActionSelected}
    />
  );
};

export default ToolBarApp;
