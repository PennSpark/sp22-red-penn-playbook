import { createSlice} from '@reduxjs/toolkit';


const DUMMY_DATA = [
    {
        id: 1, 
        text: 'Temporary test text',
        xpos: 0,
        ypos: 0,
        isEditing: false
    },
    {
        id: 2,
        text: 'Temporary test text 2',
        xpos: 50, 
        ypos: 50, 
        isEditing: true
    }
]

const DUMMY_INIT_STATE = {
    data: DUMMY_DATA,
}


/*************************************HELPER FUNCTIONS**************************/
const getText = (data, dataId) => {
    const currId = data.findIndex(elt => elt.id === parseInt(dataId));
    const currText = data[currId];

    var currXPos = currText.xpos;
    var currYPos = currText.ypos; 
    var text = currText.text;
    var isEditing = currText.isEditing;
    return {
        currId: currId,
        currText: currText,
        text: text,
        xpos: currXPos,
        ypos: currYPos,
        isEditing: isEditing,
    };
};

/************************************ slice ***********************************/
const textSlice = createSlice({
    name: 'text',
    initialState: DUMMY_INIT_STATE,
    reducers: {
        addTextHandler(state, action) {
            const newTextId = 
                state.data.length === 0 
                    ? 1 
                    : Math.max.apply(Math, state.data.map(function (o) {return o.id;})) + 1;
            const newText = {
                ...action.payload,
                id: newTextId,
            }
            state.data.push(newText);
        },
        moveTextHandler(state, action) {
            const info = getText(state.data, action.payload.dataId);
            info.currText.xpos = action.payload.newX;
            info.currText.ypos = action.payload.newY;
        },
        updateTextHandler(state, action) {
            const info = getText(state.data, action.payload.dataId);
            if (info.isEditing) {
                info.currText.text = action.payload.newText;
            }
        },
        toggleIsEditing(state, action) {
            const info = getText(state.data, action.payload.dataId);
            info.currText.isEditing = !info.currText.isEditing;
        }
    }
});

export const pennintouchActions = textSlice.actions;
export default textSlice.reducer;