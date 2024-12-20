import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/src/styles/theme";

export const s = StyleSheet.create({
    container: {
        height: 36,
        borderRadius: 8,
        backgroundColor: colors.gray[100],
        borderWidth: 1,
        borderColor: colors.gray[300],
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 12,
        gap: 10,
    },
    name: {
        fontSize: 14,
        color: colors.gray[500],
        fontFamily: fontFamily.regular
    },
    containerSelected: {
        borderColor: colors.green.base,
        backgroundColor: colors.green.base,
    },
    nameSelected: {
        color: colors.gray[100],
    }
})