import {Image, SafeAreaView, StyleSheet, View} from 'react-native';

function Login(): JSX.Element {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <Image source={{uri: require('./assets/logo.png')}}></Image>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
});

export default Login;
