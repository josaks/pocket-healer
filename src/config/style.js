import { StyleSheet, Dimensions } from 'react-native';
//height and width of screen
const { height, width } = Dimensions.get('window');

//TODO: categoryize styles by screens

export default StyleSheet.create({
  defaultText: {
    fontSize: 20,
    color: 'black',
  },
  mapScreen: {
    flex: 1,
    backgroundColor: 'orange',
    paddingTop: 0.10*height,
  },
  fightInfoScreen: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 0.10*height,
  },
  spellScreen: {
    flex: 1,
    backgroundColor: 'white',
  },
  spellContentContainer: {
    flex: 1,
  },
  encounterScreen: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: '5%',
  },
  mapRow: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  fight: {
    backgroundColor: 'black',
    height: 0.05*height,
    width: 0.20*width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fightText: {
    color: 'white',
  },
  fightInfo: {
    height: 0.75*height,
    backgroundColor: 'white',
  },
  fightInfoButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  spellSelectButtonsContainer: {
    height: '15%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  fightInfoBtn: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptBtn:{
    backgroundColor: 'green',
  },
  rejectBtn: {
    backgroundColor: 'red',
  },
  bossNameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
  },
  bossName: {
    fontSize: 30,
  },
  raidContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '60%',
  },
  barFrame: {
    borderColor: 'black',
    borderWidth: 3,
  },
  barFill: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bossHealthbar: {
    width: '100%',
    height: '10%',
  },
  bossHealthbarColor: {
    backgroundColor: 'red',
  },
  manabar: {
    width: '100%',
    height: '5%',
  },
  manabarColor: {
    backgroundColor: 'blue',
  },
  castBar: {
    width: '100%',
    height: '5%',
  },
  castBarColor: {
    backgroundColor: '#ffad33',
  },
  raiderHealthbarContainer: {
    marginTop: '10%',
    width: '100%',
    height: '75%',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  spellBtnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '10%',
    width: width,
    position: 'absolute',
    bottom: 0,
  },
  spellBtn: {
    height: '100%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spellList: {
    flex: 1,
    paddingTop: '10%',
  },
  spellListEntry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '10%',
  },
  spellImage: {
    height: '100%',
    width: '20%',
  },
  spellName: {
    fontSize: 20,
  },
  spellInfoDetails: {
    flexDirection: 'row',
    height: '50%',
    width: '100%',
  },
  spellSelectModal: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  spellSelectModalButton: {
    width: '50%',
    height: '20%',
    backgroundColor: '#0066ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spellSelectModalButtonTxt: {
    color: 'white',
  },
  spellInfoModal: {
    borderColor: 'black',
    borderWidth: 2,
    padding: '5%',
  },
  raider: {
    width: '45%',
    height: '15%',
  },
  raiderHealthbar: {
    width: '100%',
    height: '50%',
  },
  raiderHealthbarColor: {
    backgroundColor: 'red',
  },
  raiderStatusbar: {
    flexDirection: 'row',
    height: '50%',
    width: '100%',
    borderLeftWidth: 3,
    borderLeftColor: 'black',
    borderBottomWidth: 3,
    borderBottomColor: 'black',
    borderRightWidth: 3,
    borderRightColor: 'black',
    alignItems: 'center',
  },
  effect: {
    margin: 2,
  },
});
