import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import CategoryItem from './CategoryItem'

export default function CategoryList({ setSelectedCategory }) {
    const categoryList = [
        {
            id: 1,
            name: 'Gym',
            value: 'gym',
            icon: require('./../../../assets/gym.png')
        },
        {
            id: 2,
            name: 'Parks',
            value: 'park',
            icon: require('./../../../assets/park.png')
        },
        {
            id: 3,
            name: 'Stadium',
            value: 'stadium',
            icon: require('./../../../assets/stadium.png')
        },
    ]
    return (
        <View style={{ marginTop: 15 }}>
            <Text style={{
                fontSize: 20,
                fontFamily: 'raleway-bold',

            }} >Select Top Category</Text>

            <FlatList
                data={categoryList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 5 }}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ marginHorizontal: 10 }}
                        onPress={() => setSelectedCategory(item.value)} >
                        <CategoryItem category={item} />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
