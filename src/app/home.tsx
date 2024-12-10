import { useEffect, useState } from "react";
import { View, Alert } from "react-native";

import { api } from "../server/api";
import { Places } from "../components/places";

import { PlaceProps } from "../components/place";
import { Categories, CategoriesProps } from "../components/categories";

type MarketsProps = PlaceProps

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

    useEffect(() => {
        fetchCategories()
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
            <Places data={markets} />
        </View>
    )
}
