import React, { PureComponent } from "react"
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import {
  Color,
  style,
  styleSheetCreate,
  windowWidth,
} from "app/system/helpers"


interface IProps {
  navigation: any
}

interface IState {
  peopleWatchRepostioryList: Array<0>
}

export class Details extends PureComponent<IState, IProps> {

  componentDidMount() {
    console.log('@@@@@@@@@@@', this.props.route.params.personDetailInfo)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.detailInfoTitle}>
          Detail info
        </Text>
        <Text>
         Login: {this.props.route.params.personDetailInfo.login}
        </Text>
        <Text>
          id: {this.props.route.params.personDetailInfo.id}
        </Text>
        <Text>
          Repopository url: {this.props.route.params.personDetailInfo.repos_url}
        </Text>
      </View>
    )
  }
}

const styles = styleSheetCreate({
  container: style.view({
    marginHorizontal: windowWidth * 0.064,
    marginTop: windowWidth * 0.064,
  }),
  detailInfoTitle: style.text({
    fontSize: windowWidth * 0.064,
    marginBottom: windowWidth * 0.064,
  })
})