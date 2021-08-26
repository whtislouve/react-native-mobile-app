import React, { PureComponent } from 'react'
import {
   View, 
   TextInput, 
   TextInputProps, 
} from 'react-native'
import {
  styleSheetCreate,
  style,
} from 'app/system/helpers'

interface IProps extends TextInputProps {

}

interface IState {

}

export class CommonInput extends PureComponent<IProps,IState>{
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          {...this.props}
        />
      </View>
    )
  }
}

const styles = styleSheetCreate({
  container: style.view({

  }),
  textInput: style.text({

  }),
})
