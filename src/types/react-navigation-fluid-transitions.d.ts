declare module 'react-navigation-fluid-transitions' {
  import React from 'react'
  import {
    NavigationContainer,
    NavigationRouteConfigMap,
    StackNavigatorConfig
  } from 'react-navigation'

  export function createFluidNavigator(
    routeConfigMap: NavigationRouteConfigMap,
    stackConfig?: StackNavigatorConfig
  ): NavigationContainer

  export class Transition extends React.Component {}
}
