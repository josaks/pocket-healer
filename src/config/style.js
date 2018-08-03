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
    paddingTop: 0.10*height,
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
  fightInfoBtn: {
    width: 0.5*width,
    height: 0.15*height,
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
  bossHealthbarFrame: {
    width: width,
    height: 0.05*height,
    borderColor: 'black',
    borderRadius: 1,
  },
  bossHealthbarFill: {
    backgroundColor: 'red',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  manabarFrame: {
    marginTop: 0.05*height,
    width: width,
    height: 0.05*height,
    borderWidth: 2,
    borderColor: 'black',
  },
  manabarFill: {
    backgroundColor: 'blue',
    height: '100%',
  },
  castbarFrame: {
    width: width,
    height: 0.05*height,
    borderWidth: 2,
    borderColor: 'black',
  },
  castbarFill: {
    backgroundColor: '#ffad33',
    height: '100%',
  },
  raiderHealthbarFrame: {
    width: 0.45*width,
    height: 0.05*height,
    borderWidth: 2,
    borderColor: 'black',
  },
  raiderHealthbarFill: {
    backgroundColor: 'red',
    height: '100%',
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
    height: '70%',
  },
  spellListEntry: {
    flexDirection: 'row',
    height: '20%',
    width: '100%',
  },
  spellImage: {
    height: '100%',
    width: '20%',
  },
  spellInfo: {
    height: '100%',
    width: '40%',
  },
  spellName: {
    fontSize: 35,
  },
  spellInfoDetails: {
    flexDirection: 'row',
    height: '50%',
    width: '100%',
  },
  spellButtons: {
    height: '100%',
    width: '40%',
    flexDirection: 'row',
  },
});
