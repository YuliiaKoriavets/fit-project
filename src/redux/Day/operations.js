import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

// Product-search endpoints

export const productSearch = createAsyncThunk(
  'product/productSearch',
  async (search, thunkAPI) => {
    try {
      const response = await axios.get(`/product/?search=${search}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Post an eaten product

export const addEatenProduct = createAsyncThunk(
  'day/addEatenProduct',
  async (params, thunkAPI) => {
    try {
      const newDate = { ...params, date: normalizedDate(params.date) };
      const response = await axios.post('/day', newDate);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//  Delete eaten product

export const deleteEatenProduct = createAsyncThunk(
  'day/deleteEatenProduct',
  async (deleteData, thunkAPI) => {
    try {
      const response = await axios.delete('/day', { data: deleteData });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//   Get info for day

export const getInfoForDay = createAsyncThunk(
  'day/getInfoForDay',
  async (date, thunkAPI) => {
    try {
      const response = await axios.post('/day/info', date);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
