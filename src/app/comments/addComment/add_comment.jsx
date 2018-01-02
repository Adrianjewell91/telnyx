import React from 'react';

class AddComment extends React.Component {
  constructor (props) {
    super(props);
    this.state = {postId: this.props.postId, parent_id: this.props.parentId,
                  user: "", content: "",
                  date: new Date().toISOString().slice(0,10)};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.createComment(this.state);
    document.querySelectorAll('input').forEach((el) => el.value = "");
  }

  update (field) {
    return (e) => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    }
  }

  render() {
    //I want to render a button that when clicked shows the add comment form.
    //When clicked again hides it.
    return (
      <div className="add-comment-div">
        <span>Add Comment: </span>
        <label>
          <input onChange={this.update("content")}></input>
        </label>
        <label> User:
          <input onChange={this.update("user")}></input>
        </label>

        <br/>
        <button onClick={this.handleSubmit}>Add Comment</button>
        <br/>
        <br/>
      </div>
    )
  }
}

export default AddComment;
