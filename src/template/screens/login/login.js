import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

import {globalStyles} from '../../../../src/assets/global-style';

const Login = () => {
  const [userName, onChangeUserName] = useState('');
  const [pass, onChangePass] = useState('');
  const [token, setToken] = useState('');

  // useEffect(() => {
  //   fetch('https://commonservice.penta.com.tr/Token/NewLDAP')
  //     .then((res) => res.json())
  //     .then((json) => setToken(json.token))
  //     .catch((err) => console.log(err));
  // });

  const getUser = () => {
    fetch('https://commonservice.penta.com.tr/Token/NewLDAP')
      .then((res) => res.json())
      .then((json) => setToken(json.token))
      .catch((err) => console.log(err))
      .finally(() => console.log(token));
  };

  return (
    <>
      <View style={globalStyles.sectionContainer}>
        <Text style={globalStyles.sectionTitle}>Giriş</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
          }}
          onChangeText={(text) => onChangeUserName(text)}
          value={userName}
          textContentType="username"
          placeholder="Kullanıcı Adınızı Giriniz"
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
          }}
          onChangeText={(text) => onChangePass(text)}
          value={pass}
          textContentType="password"
          secureTextEntry={true}
          placeholder="Şifrenizi giriniz"
        />
        <Button
          onPress={getUser}
          title="Giriş Yap"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          disabled={userName.length < 3 || pass.length < 5}
        />
      </View>
    </>
  );
};

export default Login;
