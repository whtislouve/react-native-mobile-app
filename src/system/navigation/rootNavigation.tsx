import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ListPages  } from 'app/system/navigation'
import { Loader } from 'app/modules/global/view/Loader'
import { Main } from 'app/modules/main/view/Main'
import { Details } from 'app/modules/main/view/Details'

const Stack = createStackNavigator()

export const RootNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={ListPages.Main} component={Main} />
      <Stack.Screen name={ListPages.Details} component={Details} />
    </Stack.Navigator>
  )
}
