import React, { FC } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Icon, { IconNames } from '../Icon';

interface Props {
  navigation: any;
}

const NavigationHeader: FC<Props> = ({
  navigation,
}) => {
  const title = 'START';

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View style={{ flexDirection: 'row', padding: 16, alignItems: 'center' }}>
        <Icon
          name={IconNames.Menu}
          onPress={() => navigation.openDrawer()}
          color='#9e9d95'
          size={30}
        />
        <Text style={{ color: '#9e9d95', letterSpacing: 2.5, fontSize: 22, paddingLeft: 16 }}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default NavigationHeader;
