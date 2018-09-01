declare module 'react-navigation-fluid-transitions' {
  import {
    NavigationContainer,
    NavigationRouteConfigMap,
    StackNavigatorConfig
  } from 'react-navigation'
  import React from 'react'

  export function createFluidNavigator(
    routeConfigMap: NavigationRouteConfigMap,
    stackConfig?: StackNavigatorConfig
  ): NavigationContainer

  export class Transition extends React.Component {}
}
