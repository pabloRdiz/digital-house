import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  MainNavigatorScreens,
  RouteStackParams,
} from '../../navigator/MainNavigator.types';

type navigationProps = NativeStackNavigationProp<
  RouteStackParams,
  MainNavigatorScreens
>;

export type Props = {
  navigation: navigationProps;
};
