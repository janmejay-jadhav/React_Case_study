let initialState ={ table:[
  { name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Ice cream sandwich", calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
  { name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
]
}


function tableReducer(state=initialState,action) {
    switch(action.type)
    {
        default:
            return state;

    }
}

export default tableReducer