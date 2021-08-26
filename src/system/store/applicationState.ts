import { IMainState } from 'app/modules/main/store/mainState';
import { ISystemState } from 'app/system/store/system'

export interface IApplicationState {
  system: ISystemState
  main: IMainState
}