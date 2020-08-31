import { configureStore } from "@reduxjs/toolkit";

import postsSlice from "../features/posts/postsSlice";
import countSlice from "../features/posts/countSlice";

export default configureStore({
  reducer: {
    posts: postsSlice,
    count: countSlice
  }
});
