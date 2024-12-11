import { FlatList } from "react-native";

import { s } from "./styles";
import { Category } from "../category";

export type CategoriesProps = {
    id: string
    name: string
}[]

type Props = {
    selected: string
    data: CategoriesProps
    onSelect: (id: string) => void
}

export function Categories({ data, selected, onSelect }: Props) {
    return (
        <FlatList
            data={data}
            horizontal
            style={s.container}
            keyExtractor={(item) => item.id}
            contentContainerStyle={s.content}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <Category
                    name={item.name}
                    iconId={item.id}
                    onPress={() => onSelect(item.id)}
                    isSelected={item.id === selected}
                />
            )}
        />
    )
}