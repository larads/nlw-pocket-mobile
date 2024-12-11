import { router } from "expo-router";
import * as Location from "expo-location"
import { useEffect, useState } from "react";
import { View, Alert, Text } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";

import { api } from "../server/api";
import { Places } from "../components/places";
import { PlaceProps } from "../components/place";
import { colors, fontFamily } from "../styles/theme";
import { Categories, CategoriesProps } from "../components/categories";

type MarketsProps = PlaceProps & {
    latitude: number
    longitude: number
}

const currentLocation = {
    latitude: -23.561187293883442,
    longitude: -46.656451388116494
}

export default function Home() {
    const [category, setCategory] = useState("")
    const [categories, setCategories] = useState<CategoriesProps>([])

    const [markets, setMarkets] = useState<MarketsProps[]>([])

    async function fetchCategories() {
        try {
            const { data } = await api.get("/categories")
            setCategories(data)
            setCategory(data[0].id)
        } catch (err) {
            console.log(err);
            Alert.alert("Categorias", "Nâo foi possível carregar as categorias")
        }
    }

    async function fetchMarkets() {
        try {
            if (!category) {
                return
            }

            const { data } = await api.get("/markets/category/" + category)
            setMarkets(data)
        } catch (err) {
            console.log(err);
            Alert.alert("Locais", "Nâo foi possível carregar os locais")
        }
    }

    async function getCurrentLocation() {
        try {
            const { granted } = await Location.requestForegroundPermissionsAsync()
            if (granted) {
                await Location.getCurrentPositionAsync()
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchCategories()
        getCurrentLocation()
    }, [])

    useEffect(() => {
        fetchMarkets()
    }, [category])

    return (
        <View style={{ flex: 1, backgroundColor: "#CECECE" }}>
            <Categories
                data={categories}
                onSelect={setCategory}
                selected={category}
            />

            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                <Marker
                    identifier="current"
                    coordinate={{
                        latitude: currentLocation.latitude,
                        longitude: currentLocation.longitude,
                    }}
                    image={require("@/src/assets/location.png")}
                />

                {markets.map((item) => (
                    <Marker
                        key={item.id}
                        identifier={item.id}
                        coordinate={{
                            latitude: item.latitude,
                            longitude: item.longitude,
                        }}
                        image={require("@/src/assets/pin.png")}
                    >
                        <Callout onPress={() => router.navigate(`/market/${item.id}`)}>
                            <View>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        color: colors.gray[600],
                                        fontFamily: fontFamily.medium,
                                    }}
                                >
                                    {item.name}
                                </Text>

                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: colors.gray[600],
                                        fontFamily: fontFamily.regular,
                                    }}
                                >
                                    {item.address}
                                </Text>
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>

            <Places data={markets} />
        </View>
    )
}
