import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "../profile-reducer";
import { render } from "@testing-library/react";
import App from "../../App";
import React from "react";

let state = {
  posts: [
    { id: 1, message: "Hi, how r u?", likesCount: 12 },
    { id: 2, message: "It's my first post.", likesCount: 64 },
    { id: 3, message: "Yo.", likesCount: 32 },
    { id: 4, message: "Yo.", likesCount: 24 },
  ],
};

it("length of posts should be incremented", () => {
  // 1. test data
  let action = addPostActionCreator("it-kamasutra.com");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(5);
});

it("message of new post should be correct", () => {
  // 1. test data
  let action = addPostActionCreator("it-kamasutra.com");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts[4].message).toBe("it-kamasutra.com");
});

it("after deleting length of messages should be decremented", () => {
  // 1. test data
  let action = deletePost(4);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

it("after deleting length of posts shouldn't be decremented if id is incorrect", () => {
  // 1. test data
  let action = deletePost(1000);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(4);
});
