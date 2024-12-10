import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/src/styles/theme";

export const s = StyleSheet.create({
    container: {
        gap: 16,
        width: "100%",
        flexDirection: "row"
    },
    details: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        color: colors.gray[600],
        fontFamily: fontFamily.semiBold,
    },
    description: {
        fontSize: 14,
        marginTop: 4,
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
    }
})