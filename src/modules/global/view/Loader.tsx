import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import { 
  styleSheetCreate, 
  style,
  Color,
  styleSheetFlatten,
 } from 'app/system/helpers'


interface IProps {
  isFloating?: boolean
}

interface IState {

}

export class Loader extends PureComponent<IProps, IState>{
  refFlash: any

  componentDidMount() {
    console.log("TEST")
    // console.warn('fdf')
    // throw new Error('fjdnfjndjkfn')
  }



  render() {
    const { isFloating } = this.props

    const container = styleSheetFlatten([
      styles.container,
      isFloating ? styles.floating : null
    ])

    return (
      <View style={container}>
        <Text>
          Loader
        </Text>
      </View>
    )
  }
}

const styles = styleSheetCreate({
  container: style.view({
    flex: 1,
    backgroundColor: Color.white,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  floating: style.view({
    
  }),
})