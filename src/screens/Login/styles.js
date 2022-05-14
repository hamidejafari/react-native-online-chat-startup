import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Title: {
    textAlign: 'center',
    backgroundColor: '#b38e289e',
    color: '#17295d',
    fontWeight: 'bold',
    fontSize: 14,
    paddingVertical: 3,
  },
  View: {
    paddingHorizontal: 15,
    display: 'flex',
    justifyContent: 'center',
    height: 500,
  },
  TextInput: {
    paddingVertical: 0,
    height: 50,
    backgroundColor: '#fff',
    marginTop: 3,
    marginBottom: 5,
  },
  AvatarIcon: {
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#b38e28',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  Card: {
    backgroundColor: '#eeeeeec2',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default styles;
