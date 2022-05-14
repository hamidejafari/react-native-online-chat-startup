import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Alert,
  Dimensions,
} from 'react-native';
import {TextInput, Button, Title, Card, Avatar} from 'react-native-paper';
import {useForm} from 'react-hook-form';
import styles from './styles';

const Login = props => {
  const {register, setValue, handleSubmit, errors} = useForm();
  const onSubmit = data => Alert.alert('Form Data', data);

  const {width, scale, fontScale} = Dimensions.get('window');

  return (
    <View style={{flex: 1, width: width}}>
      <ImageBackground
        source={{uri: 'back'}}
        style={{height: null, width: width, flex: 1}}>
        <Title style={styles.Title}>ورود</Title>
        <ScrollView>
          <View style={styles.View}>
            <Card style={styles.Card}>
              <View style={{alignItems: 'center'}}>
                <Avatar.Icon
                  size={50}
                  color={'#FFF'}
                  icon="key"
                  style={styles.AvatarIcon}
                />
              </View>
              <TextInput
                label="شماره همراه"
                placeholder="۰۹۰۰۰۰۰۰۰۰۰"
                style={styles.TextInput}
                selectionColor={'#000'}
                underlineColor={'#000'}
              />
              <TextInput
                label="رمز ورود"
                placeholder="xxxxxx"
                style={styles.TextInput}
                selectionColor={'#000'}
                underlineColor={'#000'}
              />
              <Button
                // icon="key"
                style={{marginVertical: 3, backgroundColor: '#b38e28'}}
                mode="contained"
                onPress={() => console.log('Pressed')}>
                وارد شوید
              </Button>
              <Button
                // icon="key"
                style={{marginVertical: 3}}
                onPress={() => console.log('Pressed')}>
                <Text style={{color: 'red'}}>رمز عبور را فراموش کرده ام</Text>
              </Button>
            </Card>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Login;
