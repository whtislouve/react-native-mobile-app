import React, { PureComponent } from "react"
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native'
import {
  Color,
  style,
  styleSheetCreate,
  windowWidth,
} from "app/system/helpers"
import { connectStore, IApplicationState } from "app/system/store"
import { ThunkDispatch } from "redux-thunk"
import { MainAsyncActions } from "../store/mainAsyncActions"
import { ListPages } from "app/system/navigation"
import { Loader } from "app/modules/global/view/Loader"

interface IProps {
  navigation: any
}

interface IState {
  peopleWatchRepostioryList: Array<0>
  timer: number
  counter: number
}

interface IStateProps {
  isLoading: boolean
  error: boolean
  peopleWatchRepostioryList: IGetPeopleWatchRepostioryListResponce
}

interface IDispatchProps {
  getPeopleWatchRepostioryList(data: any): Promise<any>
}

@connectStore(
  (state: IApplicationState): IStateProps => ({
    isLoading: state.main.isLoading,
    error: state.main.error,
    peopleWatchRepostioryList: state.main.peopleWatchRepostioryList,
  }),
  (dispatch: ThunkDispatch<IApplicationState, void, any>): IDispatchProps => ({
    async getPeopleWatchRepostioryList(data) {
      await dispatch(MainAsyncActions.getPeopleWatchRepostioryList(data))
    }
  })
)
export class Main extends PureComponent<IProps & IState & IDispatchProps & IStateProps> {

  state = {
    peopleWatchRepostioryList: [],
    timer: 0,
    counter: 0
  }

  async componentDidMount() {
    
    this._unsubscribe = this.props.navigation.addListener('focus', async () => {
      let timer = setInterval(this.tick, 1000)
      this.setState({ timer })
      await this.getPeopleWatchRepostioryInfo()
    })


  }

  componentWillUnmount() {
    this._unsubscribe()
    
  }

  tick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  goToDetailsHandler = (personDetailInfo: Object) => {
    clearInterval(this.state.timer)
    this.setState({ counter: 0, timer: 0 }, () => this.props.navigation.navigate(ListPages.Details, { personDetailInfo }))
  }

  getPeopleWatchRepostioryInfo = async () => {
    await this.props.getPeopleWatchRepostioryList({})
    this.setState({ peopleWatchRepostioryList: this.props.peopleWatchRepostioryList })
  }
  // convertData = (getPeopleWatchRepostioryList: )

  render(): JSX.Element {
    if (this.props.isLoading) {
      return (
        <Loader />
      )
    }
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        bounces={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={this.props.isLoading}
            onRefresh={this.state.counter > 15 ? this.getPeopleWatchRepostioryInfo : undefined}
          />
        }
      >
        <Text style={styles.headerTitle}>
          List watchers of octocat repository
        </Text>

        <View>
          {
            this.state.peopleWatchRepostioryList.map((item, index) => {
              if (index < 25) {
                return (
                  <TouchableOpacity
                    onPress={this.goToDetailsHandler.bind(this, item)}
                    style={styles.personContainer}
                    key={Math.random().toString()}
                  >
                    <Text>
                      {index + 1}. Login: {item.login}
                    </Text>
                    <Text>
                      id: {item.id}
                    </Text>
                  </TouchableOpacity>
                )
              }
            })
          }
        </View>
      </ScrollView >
    )
  }
}

const styles = styleSheetCreate({
  container: style.view({
    marginHorizontal: windowWidth * 0.064,
  }),
  personContainer: style.view({
    width: '100%',
    paddingVertical: windowWidth * 0.06,
    marginBottom: windowWidth * 0.05,
    paddingHorizontal: windowWidth * 0.032,
    borderRadius: windowWidth * 0.02,
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 1,
  }),
  headerTitle: style.text({
    marginVertical: windowWidth * 0.064,
    fontSize: windowWidth * 0.064
  })
})