import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appslice";
import searchslice from "./searchslice";
import videosSlice from "./videosSlice";
import chatslice from "./chatslice";

const store = configureStore({
  reducer: {
    app: appslice,
    search: searchslice,
    chat: chatslice,
    videos: videosSlice,
  },
});
export default store;
