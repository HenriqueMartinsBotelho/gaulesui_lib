import React, { useState } from "react";

interface ICommentFormProps {
  handleSubmit?: any;
  submitLabel?: any;
  hasCancelButton?: any;
  initialText?: any;
  handleCancel?: any;
}

const CommentForm = ({
  submitLabel,
  handleSubmit,
  hasCancelButton = false,
  initialText = "",
  handleCancel,
}: ICommentFormProps) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="gau_comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button className="gau_comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="gau_comment-form-button gau_comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default CommentForm;
