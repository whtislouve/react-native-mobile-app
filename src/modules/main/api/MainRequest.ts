import { ApiService } from "app/system/api"

export class MainRequest {
    static getPeopleWatchRepostioryList = (data: IGetPeopleWatchRepostioryListRequest): Promise<IGetPeopleWatchRepostioryListResponce> => {
        return ApiService.get(
            'https://api.github.com/repos/octocat/hello-world/subscribers',
            data
        )
    }
}