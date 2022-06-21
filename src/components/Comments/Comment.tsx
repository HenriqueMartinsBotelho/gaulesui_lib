import CommentForm from "./CommentForm";
import "./Comments.css";

interface Icomment {
  id: string;
  body: string;
  username: string;
  userId: string;
  parentId: null | string;
  createdAt: string;
}

interface IactiviteComment {
  id?: string;
  type?: string 
}

interface ICommentProps {
  comment?: Icomment;
  replies?: Icomment[];
  currentUserId?: string;
  deleteComment?: (id:string) => void;
  activeComment?: { id: string, type: string };
  addComment?: (text: string, parentId?: string | null) => void;
  updateComment?: (text: string, parentId?: string | null) => void;
  setActiveComment?: ({id, type}: IactiviteComment) => void;
  parentId?: any;
}

// setActiveComment({ id: comment.id, type: "replying" })
// setActiveComment(null)

const Comment = ({
  comment,
  replies,
  currentUserId,
  deleteComment,
  activeComment,
  addComment,
  updateComment,
  setActiveComment,
  parentId = null,
}: ICommentProps) => {
  const minutesToShow = 300000000000000;
  const timePassed =
    new Date().getTime() - new Date(comment.createdAt).getTime() >
    minutesToShow;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const canDelete = currentUserId === comment.userId && !timePassed;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  const isReplying =
    activeComment &&
    activeComment.type === "replying" &&
    activeComment.id === comment.id;
  const isEditing =
    activeComment &&
    activeComment.type === "editing" &&
    activeComment.id === comment.id;
  const replyId = parentId ? parentId : comment.id;
  return (
    <div className="gau_comment">
      <div className="gau_comment-image-container">
        <img src="https://picsum.photos/200/300" alt="avatar" />
      </div>
      <div className="gau_comment-right-part">
        <div className="gau_comment-content">
          <div className="gau_comment-author">{comment.username}</div>
          <div>{createdAt}</div>
        </div>
        {!isEditing && <div className="gau_comment-text">{comment.body}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => updateComment(text, comment.id)}
            handleCancel={() => setActiveComment(null)}
          />
        )}
        <div className="gau_comment-actions">
          {canReply && (
            <div
              className="gau_comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              className="gau_comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "editing" })
              }
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div
              className="gau_comment-action"
              onClick={() => deleteComment(comment.id)}
            >
              Delete
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className="gau_replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment.id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;

// Todo: Remove todos os any.
