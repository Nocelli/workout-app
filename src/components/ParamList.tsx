import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

export type ParamList = {
    RegisterData: undefined
}

export type NavProps<ScreenName extends keyof ParamList> = {
    navigation: StackNavigationProp<ParamList, ScreenName>
    route: RouteProp<ParamList, ScreenName>  
}