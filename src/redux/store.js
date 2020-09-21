import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how r u?", likesCount: 12 },
        { id: 2, message: "It's my first post.", likesCount: 64 },
        { id: 3, message: "Yo.", likesCount: 32 },
        { id: 4, message: "Yo.", likesCount: 24 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How r u doin'?" },
        { id: 3, message: "Better then ever" },
      ],
      dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Nikita" },
        { id: 5, name: "Sveta" },
        { id: 6, name: "Victoria" },
      ],
      newMessageText: "",
    },
    sidebar: {},
  },

  _callSubscriber() {},
  subscribe(observer) {
    this._callSubscriber = observer; // паттерн observer
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    // { type: 'ADD-POST'}

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
