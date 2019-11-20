import React from 'react'
import { View, Text, Button } from 'react-native'

const TrackListScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={{fontSize: 30}}>TrackListScreen</Text>
            <Button title="Go to Track Detail Screen" onPress={ () => { navigation.navigate('TrackDetail')}}></Button>
            <Button title="Go to Signup" onPress={() => navigation.navigate('Signup')}></Button>

        </View>
    )
}

export default TrackListScreen
