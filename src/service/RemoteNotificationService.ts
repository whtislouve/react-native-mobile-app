// import { IApplicationState } from 'app/system/store/applicationState'
// import { connectStore } from 'app/system/store/connectStore'
// import { PureComponent } from 'react'
// import OneSignal from 'react-native-onesignal'
// import { ThunkDispatch } from 'redux-thunk'

// interface IStateProps  {

// }

// interface IDispatchProps {

// }

// interface IProps {

// }

// interface IState {

// }

// @connectStore(
//   (state: IApplicationState): IStateProps => ({
//     isNotificationEnabled: state.system.isNotificationEnabled,
//     notificationId: state.system.notificationId,
//     userInformation: state.system.userInformation,
//   }),
//   (dispatch: ThunkDispatch<IApplicationState, void, any>): IDispatchProps => ({
//     async changeUserData(data: any) {
//       await dispatch(SystemAsynсActions.changeUserData(data))
//     },
//     async getProfileData(data: any) {
//       await dispatch(MainAsynсActions.getProfileData(data))
//     },
//   })
// )
// export class RemoteNotificationService extends PureComponent<IStateProps & IDispatchProps & IProps, IState> {

//   async componentDidMount(): Promise<void> {
//     OneSignal.setLogLevel(6, 0)
//     OneSignal.setAppId('5fd96802-9188-4e5b-99b5-5f10700ea502')
//     OneSignal.promptForPushNotificationsWithUserResponse(response => {
//       console.log("Prompt response:", response);
//     })
//     OneSignal.addSubscriptionObserver(async (response) => {
//       console.log('response.to.pushToken', response.to.pushToken)
//     })
//     OneSignal.setNotificationOpenedHandler(notification => {
//       console.log("OneSignal: notification opened:", notification)
//     })
//   }

  

//   render(): null {
//     return null

//   }
// }



