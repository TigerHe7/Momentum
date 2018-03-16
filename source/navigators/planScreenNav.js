import { StackNavigator } from 'react-navigation';
import PlanningScreen from './../screens/planningScreen';

const RouteConfigs = {
  PlanningScreen: {
    screen: PlanningScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  // FocusScreen: {
  //   screen: FocusScreen,
  //   navigationOptions: (props) => ({
  //     header: null,
  //   })
  // }
};

const StackNavigatorConfig = {
  initialRouteName: 'PlanningScreen',
};

export default StackNavigator(RouteConfigs, StackNavigatorConfig);
