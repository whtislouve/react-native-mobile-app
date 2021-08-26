import { ReducerBuilder, reducerWithInitialState } from "typescript-fsa-reducers"
import { MainInitialState, IMainState } from "./mainState"
import { MainAsyncActions } from "./mainAsyncActions"

const getPeopleWatchRepostioryListStarted = (state: IMainState) => {
    return {
        ...state,
        isLoading: true,
        error: false,
    }
}

const getPeopleWatchRepostioryListDone = (state: IMainState, { result }: any) => {
    return {
        ...state,
        isLoading: false,
        error: false,
        peopleWatchRepostioryList: result
    }
}

const getPeopleWatchRepostioryListFailed = (state: IMainState) => {
    return {
        ...state,
        isLoading: false,
        error: true,
    }
}

export const mainReducer: ReducerBuilder<IMainState> = reducerWithInitialState(MainInitialState)
    .case(MainAsyncActions.getPeopleWatchRepostioryList.async.started, getPeopleWatchRepostioryListStarted)
    .case(MainAsyncActions.getPeopleWatchRepostioryList.async.done, getPeopleWatchRepostioryListDone)
    .case(MainAsyncActions.getPeopleWatchRepostioryList.async.failed, getPeopleWatchRepostioryListFailed)
    