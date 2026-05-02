import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: null,
  addresses: [
    { id: 1, label: 'Home', address: 'Flat 402, Sunset Heights, Indiranagar, Bangalore 560038' },
    { id: 2, label: 'Office', address: 'Building 12, Tech Park, Outer Ring Road, Bangalore 560103' },
    { id: 3, label: 'Gym', address: 'Power Fitness, 12th Main, HAL 2nd Stage, Bangalore 560008' },
  ],
  currentAddress: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setAddresses: (state, action) => {
      state.addresses = action.payload;
    },
    addAddress: (state, action) => {
      state.addresses.push(action.payload);
      state.currentAddress = action.payload;
    },
    setCurrentAddress: (state, action) => {
      state.currentAddress = action.payload;
    },
  },
});

export const { setProfile, setAddresses, addAddress, setCurrentAddress } = userSlice.actions;
export default userSlice.reducer;
