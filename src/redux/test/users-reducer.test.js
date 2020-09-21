import usersReducer, { followSuccess, setCurrentPage } from "../users-reducer";

let state = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

it("current page should be correct", () => {
  // 1. test data
  let action = setCurrentPage(10);

  // 2. action
  let newState = usersReducer(state, action);

  // 3. expectation
  expect(newState.currentPage).toBe(10);
});
