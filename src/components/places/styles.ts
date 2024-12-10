import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/src/styles/theme";

export const s = StyleSheet.create({
    container: {
        backgroundColor: colors.gray[100]
    },
    content: {
        gap: 12,
        padding: 24,
        paddingBottom: 100
    },
    indicator: {
        width: 80,
        height: 5,
        marginTop: 5,
        backgroundColor: colors.gray[300]
    },
    title: {
        fontSize: 16,
        marginBottom: 16,
        color: colors.gray[600],
        fontFamily: fontFamily.regular
    }
})