import { useState, useEffect } from 'react';

function PostsDelete() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editingComment, setEditingComment] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        if (response.ok) {
          const data = await response.json();
          
          const filteredComments = data.filter(comment => comment.postId === 1)
            .map(({ id, name, email, body,title }) => ({ id, name, email, body,title }));
          setComments(filteredComments);
        } else {
          console.error('Error fetching data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const addComment = (content) => {
    const newCommentObj = {
      id: comments.length + 1,
      name: username, 
      tittle: 'debitis possimus qui neque nisi nulla', 
      body: content
    };
    setComments([...comments, newCommentObj]);
    setNewComment('');
  };

  const editComment = (commentId, updatedContent) => {
    const updatedComments = comments.map(comment =>
      comment.id === commentId ? { ...comment, body: updatedContent } : comment
    );
    setComments(updatedComments);
    setEditingComment(null);
  };

  const deleteComment = (commentId) => {
    const updatedComments = comments.filter(comment => comment.id !== commentId);
    setComments(updatedComments);
    setEditingComment(null);
  };

  return (
    <div className="App">
      <div className="comment-section">
        <ul className="comment-list">
          {comments.map(comment => (
            <li key={comment.id}>
              {editingComment === comment.id ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    editComment((comment.id, e.target.updatedComment.value), comment.id, e.target.updatedComment.value);
                  }}
                >
                  <input  className="text1" name="updatedComment" defaultValue={comment.body}></input>
                  <input  className="text2" name="updatedComment" defaultValue={comment.tittle}></input>

                  <button className="btn3" type="submit">Save</button>
                </form>
              ) : (
                <>
                  <p><strong>ID : </strong> {comment.id}</p>
                  <p><strong>Name : </strong> {comment.name}</p>
                  <p><strong>Tittle : </strong> debitis possimus qui neque nisi nulla</p>
                  <p><strong>Body : </strong> {comment.body}</p>
                </>
              )}
              <div>
                {editingComment !== comment.id && (
                  <>
                    <button className="btn1" onClick={() => setEditingComment(comment.id)} >Edit</button>
                    <button  className="btn2" onClick={() => deleteComment(comment.id)}>Delete</button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="add-comment-form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addComment(newComment);
          }}
        >
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Enter your comment"
          ></textarea>
          <br />
          <button type="submit">Add Comments</button>
        </form>
      </div>
    </div>
  );
}

export default PostsDelete;