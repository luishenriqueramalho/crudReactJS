import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {id: '1', name: 'Kadu', sex: 'Male'},
    {id: '2', name: 'Layka', sex: 'Feme'},
    {id: '3', name: 'Toto', sex: 'Male'},
];

const animalSlice = createSlice({
    name: 'animals',
    initialState,
    reducers: {
        animalAdded(state, action) {
            state.push(action.payload);
        },
        animalUpdated(state, action) {
            const { id, name, sex } = action.payload;
            const existingAnimal = state.find((animal) => animal.id === id);
            if (existingAnimal) {
                existingAnimal.name = name;
                existingAnimal.sex = sex;
            }
        }
    },
});

export const { animalAdded } = animalSlice.actions;

export default animalSlice.reducer;