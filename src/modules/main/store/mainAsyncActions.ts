import { asyncActionCreator } from "app/system/store/actionCreator"
import { MainRequest } from "../api/MainRequest"

export class MainAsyncActions { 
    static getPeopleWatchRepostioryList = asyncActionCreator<IGetPeopleWatchRepostioryListRequest, IGetPeopleWatchRepostioryListResponce, Error> (
        'MAIN/GET_PEOPLE_WATCH_REPOSITORY_LIST',
        MainRequest.getPeopleWatchRepostioryList
    )
}