import React from "react";
import Post from "./Post/Post.jsx";
import styles from "./MyPosts.module.sass";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Post"
          name="newPostText"
          component={Textarea}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  );
};

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

const MyPosts = React.memo((props) => {
  console.log("RENDER");

  let postsElements = [...props.posts]
    .reverse()
    .map((p) => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={styles.posts}>
      <h3>My posts</h3>
      <div>New post</div>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div>{postsElements}</div>
    </div>
  );
});

const maxLength10 = maxLengthCreator(10);

export default MyPosts;
