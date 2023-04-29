import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  MainNavigatorScreens,
  RouteStackParams,
} from '../../navigator/MainNavigator.types';

type routeProps = RouteProp<RouteStackParams, MainNavigatorScreens>;
type navigationProps = NativeStackNavigationProp<
  RouteStackParams,
  MainNavigatorScreens
>;

export type Props = {
  navigation: navigationProps;
  route: routeProps;
};
