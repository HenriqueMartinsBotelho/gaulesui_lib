interface ICommentFormProps {
  handleSubmit?: any;
  submitLabel?: any;
  hasCancelButton?: any;
  initialText?: any;
  handleCancel?: any;
}

let text = "Hello"

const updateText = (texto) => {
  text = texto 
}

const CommentForm = ({
  submitLabel,
  handleSubmit,
  hasCancelButton = false,
  initialText = "Texto inicial",
  handleCancel,
}: ICommentFormProps) => {
  // const [text, setText] = useState(initialText); não pode usar hook pois dá erro 
  // Invalid hook call. Hooks can only be called inside of the body of a function
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    text = initialText
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="gau_comment-form-textarea"
        // value={text}
        onChange={e => updateText(e.target.value)}
        // onChange={(e) => setText(e.target.value)}
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
