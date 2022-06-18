import React, { useEffect, useState } from "react";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  deleteComment as deleteCommentApi,
  updateComment as updateCommentApi
} from "./api";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

export interface ICommentsProps {
  currentUserId: string;
}


const Comments = ({ currentUserId }: ICommentsProps) => {
  const [backendComments, setBackendComments] = useState<any>([]);
  const [activeComment, setActiveComment] = useState<any>(null);


  const rootComments = backendComments.filter(
    (backendComment: any) => backendComment.parentId === null
  );
  const getReplies = (commentId: any) => {
    return backendComments
      .filter((backendComment: any) => backendComment.parentId === commentId)
      .sort((a, b) => {
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      });
  };

  const addComment = (text, parentId) => {
    console.log("addComment", text, parentId);
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null)
    });
  };

  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      deleteCommentApi(commentId).then(() => {
        const updateBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updateBackendComments);
      });
    }
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text, commentId).then(() => {
      const updateBackendComments = backendComments.map((backendComment) => {
        if(backendComment.id === commentId) {
          return {...backendComment, body: text}
        }
        return backendComment
      })
      setBackendComments(updateBackendComments)
      setActiveComment(null)
    })
  }


  useEffect(() => {
    getCommentsApi().then((data: any) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <div className="gau_comments">
      <h3 className="gau_comments-title">Comment</h3>
      <div className="gat_comment-form-title">Write comment</div>
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      <div className="gau_comments-container">
        {rootComments.map((rootComment: any) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            currentUserId={currentUserId}
            deleteComment={deleteComment}
            updateComment={updateComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;

// TODO: Remover todos os any e colocar uma tipagem correta
