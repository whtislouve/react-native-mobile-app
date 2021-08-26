export interface IMainState {
    isLoading: boolean
    error: boolean
    peopleWatchRepostioryList: IGetPeopleWatchRepostioryListResponce[]
}

export const MainInitialState: IMainState = {
    isLoading: false,
    error: false,
    peopleWatchRepostioryList: [],
}