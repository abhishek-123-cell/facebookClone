import React from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions/posts";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    // console.log("PROPS", this.props);
    const {posts}=this.props;
    return(
     <div>
       <div className="posts-list">
{posts.map(post=>{
<div className="post-wrapper">
  <div className="post-header">
    <div className="post-avatar">
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
        alt="pic"
      ></img>
      <div>
        <span className="post-author">{post.user.name}</span>
        <span className="post-time">a minute ago</span>
      </div>
    </div>
    <div className="post-content">{post.content}</div>
  </div>
</div>;
})}
       </div>
     </div>
    );
  }
}
    
function mapStateToProps(state) {
  return {
    posts: state.posts,
  
  };
}
export default connect(mapStateToProps)(App);
