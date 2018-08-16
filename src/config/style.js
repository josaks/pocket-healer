import { StyleSheet, Dimensions } from 'react-native';
//height and width of screen
const { height, width } = Dimensions.get('window');

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
    paddingTop: 0.05*height,
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
  },
  bossName: {
    fontSize: 30,
  },
  raidContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 0.6*height,
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
    width: width,
    height: 0.05*height,
  },
  bossHealthbarColor: {
    backgroundColor: 'red',
  },
  manabar: {
    marginTop: 0.05*height,
    width: width,
    height: 0.05*height,
  },
  manabarColor: {
    backgroundColor: 'blue',
  },
  castBar: {
    width: width,
    height: 0.05*height,
  },
  castBarColor: {
    backgroundColor: '#ffad33',
  },
  raiderHealthbar: {
    width: 0.45*width,
    height: 0.05*height,
  },
  raiderHealthbarColor: {
    backgroundColor: 'red',
  },
  raiderHealthbarContainer: {
    marginTop: 0.05*height,
    width: width,
    height: height*0.4,
    justifyContent: 'space-between',
    alignContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  spellBtnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 0.10*height,
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
});
