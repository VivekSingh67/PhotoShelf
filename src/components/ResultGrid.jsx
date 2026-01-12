import React, { useEffect } from "react";
import { fetchPhoto, fetchVideos } from "../api/mediaApi";
import {
  setResults,
  setLoading,
  setError,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";
const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTabs, results, loading, error } = useSelector(
    (store) => store.search
  );

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      dispatch(setLoading());
      try {
        let data = [];
        if (activeTabs == "photos") {
          let response = await fetchPhoto(query);
          const items = response?.results || [];
          data = items.map((item) => ({
            id: item.id,
            type: "photos",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html
          }));
        }
        if (activeTabs == "videos") {
          let response = await fetchVideos(query);
          const items = response?.videos || [];
          data = items.map((item) => ({
            id: item.id,
            type: "videos",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url
          }));
        }

        dispatch(setResults(data));
      } catch (error) {
        dispatch(setError(error));
      }
    };
    getData();
  }, [query, activeTabs, dispatch]);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>loading...</h1>;

  return (
    <div className="flex justify-between w-full flex-wrap gap-5 overflow-auto px-10">
      {results.map((item, idx) => {
        return <div key={idx}>
            <ResultCard item={item} />
        </div>
      } )}
    </div>
  );
};

export default ResultGrid;
