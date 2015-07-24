export const buttons = [{
  title: 'Schedule',
  id: 'schedule',
  image: require('../assets/img/menu-schedule.jpg')
},{
  title: 'Venues',
  id: 'venues',
  image: require('../assets/img/menu-venues.jpg')
},{
  id: 'open',
  contain: true,
  image: require('../assets/img/menu-open.png')
},{
  title: 'Team',
  id: 'team',
  image: require('../assets/img/menu-people.jpg')
},{
  title: 'Timer',
  id: 'timer',
  image: require('../assets/img/menu-timer.jpg')
},{
  title: 'Travel guide',
  id: 'travel',
  image: require('../assets/img/menu-guide.jpg')
},{
  title: 'Maps',
  id: 'maps',
  double: true,
  image: require('../assets/img/menu-maps.jpg')
}];

export const styles = {
  button: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#444',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
  },
  buttonLabel: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    maxWidth: '90%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    textShadow: '0px 0px 15px #000, 0px 0px 15px #000, 0px 0px 15px #000',
    fontSize: '17pt',
  }
};
