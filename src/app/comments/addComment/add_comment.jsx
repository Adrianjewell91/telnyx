import React from 'react';

class AddComment extends React.Component {
  constructor (props) {
    super(props);
    this.state = {postId: this.props.postId, parent_id: this.props.parentId,
                  user: "", content: "",
                  date: new Date().toISOString().slice(0,10)};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.revealForm = this.revealForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.user === "" || this.state.content === "") {
      alert("You must provide user and content information");
    } else {
      this.props.createComment(this.state);
    }

    document.querySelectorAll('input').forEach((el) => el.value = "");
  }

  update (field) {
    return (e) => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    }
  }

  revealForm() {
    this.formBox.classList.toggle('hidden');
    this.revealButton.classList.toggle('selected');
  }

  render() {
    //I want to render a button that when clicked shows the add comment form.
    //When clicked again hides it.
    return (
      <div className="comment-reply-box">

        <button ref={(revealButton) => {this.revealButton = revealButton}}
                onClick={this.revealForm}>
          {this.props.replyName}
        </button>

        <div className={`comment-reply-form hidden`}
             ref={(formBox) => {this.formBox = formBox}}>

          <br/>
          <span>Add Comment: </span>

            <label>
              <input onChange={this.update("content")}></input>
            </label>
            <label> User:
              <input onChange={this.update("user")}></input>
            </label>

          <br/>
          <button onClick={this.handleSubmit}>Add Comment</button>

        </div>

        <br/>
      </div>
    )
  }
}

export default AddComment;
