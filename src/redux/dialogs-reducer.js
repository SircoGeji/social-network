const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How r u doin'?"},
        {id: 3, message: "Better then ever"}
    ],
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Nikita'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Victoria'}
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 4,
                message: action.newMessageText,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageText) =>
    ({type: SEND_MESSAGE, newMessageText})

export default dialogsReducer;