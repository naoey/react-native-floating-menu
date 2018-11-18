import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  wrapper: {
    bottom: 0,
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  trigger: {
    marginBottom: 25,
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  anchor: {
    position: 'relative',
    transform: [
      { rotate: '45deg' },
    ],
    height: 10,
    width: 10,
    backgroundColor: 'white',
    zIndex: 102,
  },
  dropShadow: {
    shadowOffset: {
      height: 3,
      width: 3,
    },
    shadowColor: 'grey',
    shadowRadius: 7,
    shadowOpacity: 0.35,
    elevation: 7,
  },
  optionsContainer: {
    borderRadius: 3,
    backgroundColor: 'white',
    width: 210,
  },
  selectedTabIndicator: {
    height: 7,
    width: 7,
    borderRadius: 3.5,
    backgroundColor: 'green',
  },
  option: {
    height: 55,
    padding: 15,
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 103,
  },
  optionText: {
    textAlign: 'center',
  },
  scrollContainer: {
    justifyContent: 'flex-start',
  },
});
