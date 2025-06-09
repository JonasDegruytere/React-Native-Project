import { View, Text, Pressable, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

export default function Recipe({ categories, foods }) {
  const navigation = useNavigation();

  const renderItem = ({ item, index }) => (
<ArticleCard item={item} index={index} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
            <Text style={styles.title} testID="title">Our Recipes</Text>

      <View testID="recipesDisplay">
              <FlatList
                  data={foods}
                  keyExtractor={(item) => item.idFood}
                  renderItem={renderItem}
                  numColumns={2}
                  columnWrapperStyle={{ justifyContent: "space-between" }} // To ensure even spacing
              />

      </View>
    </View>
  );
}

const ArticleCard = ({ item, index, navigation }) => {
    const cardWidth = (wp(100) - wp(4) * 2 - wp(2)) / 2; // total screen - margins - gutter

    return (
        <View
            style={[styles.cardContainer, { width: cardWidth }]}
            testID="articleDisplay"
        >
            <TouchableOpacity
                onPress={() => navigation.navigate("RecipeDetail", { ...item })}
            >
                <Image
                    source={{ uri: item.recipeImage }}
                    style={[
                        styles.recipeImage,
                        {
                            height: index % 3 === 0 ? hp(25) : hp(35),
                            width: '100%',
                            borderRadius: 20,
                            marginBottom: hp(1),
                        },
                    ]}
                />
                <Text style={styles.recipeText}>
                    {item.recipeName.length > 20
                        ? item.recipeName.slice(0, 20) + "..."
                        : item.recipeName}
                </Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(4), // mx-4 equivalent
        marginTop: hp(2),
    flex: 1,
  },
  title: {
    fontSize: hp(3),
    fontWeight: "600", // font-semibold
    color: "#52525B", // text-neutral-600
    marginBottom: hp(1.5),
  },
  loading: {
    marginTop: hp(20),
  },
    cardContainer: {
        backgroundColor: "#F9FAFB",
        marginBottom: hp(2),
        marginRight: wp(2),
        borderRadius: 15,
        overflow: "hidden",
    },

  articleImage: {
    width: "100%",
   
    borderRadius: 35,
    backgroundColor: "rgba(0, 0, 0, 0.05)", // bg-black/5
  },
  recipeText: {
    fontSize: hp(2.5),
    fontWeight: "600", // font-semibold
    color: "#52525B", // text-neutral-600
    textAlign: "center",
  },
  articleDescription: {
    fontSize: hp(1.2),
    color: "#6B7280", // gray-500
    marginLeft: wp(2),
    marginTop: hp(0.5),
  },
  row: {
    justifyContent: "space-between", // Align columns evenly
  },
});