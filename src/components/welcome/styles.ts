import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/src/styles/theme"

export const s = StyleSheet.create({
    logo: {
        width: 48,
        height: 48,
        marginTop: 24,
        marginBottom: 28
    },
    title: {
        fontSize: 24,
        color: colors.gray[600],
        fontFamily: fontFamily.bold
    },
    subtitle: {
        fontSize: 16,
        marginTop: 12,
        color: colors.gray[500],
        fontFamily: fontFamily.regular
    }
})