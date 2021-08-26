import React, { PureComponent } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styleSheetCreate, style, Color, windowWidth, } from 'app/system/helpers'
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler'

interface IProps {
  children: JSX.Element
}

interface IState {
  isError: boolean
  stackError: string
}

export class ErrorBoundary extends PureComponent<IProps, IState> {

  state = {
    isError: false,
    stackError: '',
  }

  componentDidMount(): void {
    // setJSExceptionHandler((stackError: string) => {
    //   console.error(stackError)
    //   this.setState({ stackError, isError: true })
    // }, false)
    // setNativeExceptionHandler((stackError: string) => {
    //   console.error(stackError)
    //   this.setState({ stackError, isError: true })
    // })
  }

 render(): JSX.Element {

  if (!this.state.isError) {
    return this.props.children
  }

   return(
     <View style={styles.container}>
       <Text style={styles.title}>
          Получено ошибка
       </Text>
       <ScrollView>
         <Text>
            {this.state.stackError}
         </Text>
       </ScrollView>
     </View>
    )
  }
}
const styles = styleSheetCreate({
  container: style.view({
    flex: 1,
    backgroundColor: Color.white,
  }),
  title: style.text({
    color: Color.black,
    marginTop: windowWidth * 0.12,
    fontSize: windowWidth * 0.05,
  }),
})