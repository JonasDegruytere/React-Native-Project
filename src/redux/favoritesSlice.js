import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
        const recipe = action.payload
        const currentRecipe = state.favoriterecipes.filter((element) => element.idFood == recipe.idFood)
        if (currentRecipe.length > 0) {
            state.favoriterecipes.pop();
        } else {
            state.favoriterecipes.push(recipe)
        }
       }
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;