import React from 'react';

class CommentsIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount() {
    console.log(this.props);
    this.props.requestComments(this.props.slugs[this.props.match.params.slug]);
  }

  componentWillReceiveProps(newProps) {
    if( newProps.match.params.slug !== this.props.match.params.slug ) {
      this.props.requestComments(this.props.slugs[newProps.match.params.slug]);
    }
  }

  render() {
    // console.log(this.props);
    return (
      <div className="comments-index-div">
        <h3>Comments</h3>

      </div>
    )
  }
}

export default CommentsIndex;
