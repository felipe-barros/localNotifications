import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  header: {
    flex: 1,
    backgroundColor: 'slateblue',
    justifyContent: 'flex-end',
    padding: 25,
  },
  content: {
    flex: 2,
    backgroundColor: 'midnightblue',
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    padding: 10,
    backgroundColor: 'cornflowerblue',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
