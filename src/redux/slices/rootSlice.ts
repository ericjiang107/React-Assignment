import { createSlice } from "@reduxjs/toolkit";

// Create rootSlice:
const rootSlice = createSlice({
    // give each slice a name:
    name: 'root', 
    initialState: {
        // object here:
        name: 'Classic Drone',
        price: '$750',
        description: 'This is a basic drone',
        camera_quality: '8k HD',
        flight_time: '400 hours',
        max_speed: '150mph',
        dimensions: '255 x 312 127mm',
        weight: 'Approx 795g',
        cost_of_prod: 450.00,
        series: 'DJI FPV Series'
    },
    reducers: { 
        chooseName: (state, action) => {state.name = action.payload},
        choosePrice: (state, action) => {state.price = action.payload},
        chooseDescription: (state, action) => {state.description = action.payload},
        chooseCamera_Quality: (state, action) => {state.camera_quality = action.payload},
        chooseFlight_Time: (state, action) => {state.flight_time = action.payload},
        chooseMax_Speed: (state, action) => {state.max_speed = action.payload},
        chooseDimensions: (state, action) => {state.dimensions = action.payload},
        chooseWeight: (state, action) => {state.weight = action.payload},
        chooseCost_Of_Prod: (state, action) => {state.cost_of_prod = action.payload},
        chooseSeries: (state, action) => {state.series = action.payload}
    }
})

// export reducer:
export const reducer = rootSlice.reducer
export const { chooseName, choosePrice, chooseDescription, chooseCamera_Quality, chooseFlight_Time, chooseMax_Speed, chooseDimensions, chooseWeight, chooseCost_Of_Prod, chooseSeries } = rootSlice.actions