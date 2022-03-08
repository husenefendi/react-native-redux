import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '~app/store';
import PostService from '~services/post.service';
import { iPostData } from '~type/IPost.type';

interface PostState {
  data: iPostData[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PostState = {
  data: [],
  status: 'idle',
};

const name = 'post';

export const getAllPost = createAsyncThunk(`${name}/getAllPost`, async () => {
  PostService.getAll()
    .then(response => {
      console.log({ L21: response });
    })
    .catch(error => {
      console.log({ L23: error });
    })
    .finally(() => {
      console.log('done getAll Post');
    });
});

export const postSlice = createSlice({
  name,
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllPost.pending, state => {
        state.status = 'loading';
      })
      .addCase(getAllPost.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log({ L42: action });
      });
  },
  reducers: {
    setStatus: (state, payload: any) => {
      state.status = payload.value;
    },
  },
});

export const { setStatus } = postSlice.actions;
export const selectPost = (state: RootState) => state.post;

export default postSlice.reducer;
