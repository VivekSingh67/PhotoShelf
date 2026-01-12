import { createSlice } from "@reduxjs/toolkit";

const serachSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTabs: "photos",
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setActiveTabs(state, action) {
      state.activeTabs = action.payload;
    },
    setResults(state, action) {
      state.results = action.payload;
      state.loading = null
    },
    setLoading(state, action) {
      state.loading = true
      state.error = null
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false
    },
    clearResult(state){
        state.results = []
    }
  },
});


export const {setQuery, setActiveTabs, setResults, setLoading, setError, clearResult } = serachSlice.actions;
export default serachSlice.reducer