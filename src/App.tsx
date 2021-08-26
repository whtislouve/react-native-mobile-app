import React, { PureComponent } from 'react'
import { AppState, AppStateStatus, YellowBox, } from 'react-native'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { RootNavigator } from 'app/system/navigation/rootNavigation'
import { Provider } from 'react-redux'
import { Persistor } from 'redux-persist'
import { Store } from 'redux'
import { PersistGate } from 'redux-persist/integration/react'
import { IApplicationState } from 'app/system/store'
import { Loader } from 'app/modules/global/view/Loader'
import { localization } from 'app/system/localization'
import { configureStore } from '../src/system/store/configureStore'
import RNBootSplash from "react-native-bootsplash";
import { ErrorBoundary } from './service/ErrorBoundary'

// YellowBox.ignoreWarnings(['Remote debugger'])

interface IProps {

}

interface IState {
  appStatus: AppStateStatus
}

export class App extends PureComponent<IProps, IState>{
  private readonly store: Store
  private readonly persistor: Persistor
  private navigatorRef: any

  constructor(props: IProps) {
    super(props)
    const { store, persistor } = configureStore(this.onStoreCreated)
    this.store = store
    this.persistor = persistor
  }

  state = {
    appStatus: AppState.currentState, 
  }

  async componentDidMount(): Promise<void> {
    // setTimeout(async () => {
      await RNBootSplash.hide({ fade: true })
    // },0)
    AppState.addEventListener('change', this.handleAppStateChange)
  }

  componentWillUnmount(): void {
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  handleAppStateChange = (nextAppStatus: AppStateStatus): void => {
    if (this.state.appStatus.match(/inactive|background/) && nextAppStatus === 'active' ) {
     
    }
    this.setState({ appStatus: nextAppStatus })
  }

  setNavigatorRef = (navigatorRef: NavigationContainerRef): void => {
    this.navigatorRef = navigatorRef
  }

  onStoreCreated = (): void => {
    const state: IApplicationState = this.store.getState()
    localization.list.setLanguage(state.system.language)
  }

  // renderLoader = (): JSX.Element => {
  //   return (
  //     <Loader />
  //   )
  // }

  render(): JSX.Element {
    return (
     <PersistGate
      //  loading={this.renderLoader()}
       persistor={this.persistor}
     >
        <ErrorBoundary>
        <Provider store={this.store}>
          <NavigationContainer ref={this.setNavigatorRef}>
            <RootNavigator />
          </NavigationContainer>
        </Provider>
        </ErrorBoundary>
     </PersistGate>
    )
  }
}
