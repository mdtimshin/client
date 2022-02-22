import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import thunk from 'redux-thunk'
import { IUser } from '../../models/IUser'
import { AppDispatch } from '../store'
import { userSlice } from './UserSlice'

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching())

//     dispatch(userSlice.actions.usersFetchingSucces(response.data))
//   } catch (e) {
//     dispatch(userSlice.actions.usersFetchingError(e.message))
//   }
// }

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      )
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить данные')
    }
  }
)