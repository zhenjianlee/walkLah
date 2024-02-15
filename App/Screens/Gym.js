import { View, Text, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Gym/Header'
import GoogleMapView from '../Components/Gym/GoogleMapView'
import CategoryList from '../Components/Gym/CategoryList'
import GlobalApi from '../Services/GlobalApi'
import PlaceList from '../Components/Gym/PlaceList'
import { ScrollView } from 'react-native'
import { UserLocationContext } from '../Context/UserLocationContext'

export default function Gym() {

  const [placeList, setPlaceList] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);
  useEffect(() => {
    if (location) {
      GetNearBySearchPlace('gym');
    }
  }, [location])

  const GetNearBySearchPlace = (value) => {
    console.log("check location" + location.coords.latitude);

    GlobalApi.nearByPlace(location.coords.latitude,
      location.coords.longitude, value).then(resp => {

        setPlaceList(resp.data.results);

      })
  }
  return (
    <ScrollView style={{ padding: 20, backgroundColor: '#bfdbea', flex: 1 }}>
      <Header />
      <GoogleMapView placeList={placeList} />
      <CategoryList setSelectedCategory={(value) => GetNearBySearchPlace(value)} />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </ScrollView>
  )
}
