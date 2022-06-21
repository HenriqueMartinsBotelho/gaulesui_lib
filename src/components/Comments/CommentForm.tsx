// por algum motivo não podemos usar hook como o useState pois quando for usar a lib em outro projeto obtemos o erro
// Invalid hook call. Hooks can only be called inside of the body of a function
interface ICommentFormProps {
  handleSubmit?: (text: string, parentId?: string | null) => void;
  submitLabel?: string;
  hasCancelButton?: boolean;
  initialText?: string;
  handleCancel?: () => void;
}

let text = "Hello";

// Remover depois. Tentar pegar o valor do textarea ao usar o componente
const updateText = (texto) => {
  text = texto;
};

const CommentForm = ({
  submitLabel,
  handleSubmit,
  hasCancelButton = false,
  initialText = "Texto inicial",
  handleCancel,
}: ICommentFormProps) => {
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    text = initialText;
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="gau_comment-form-textarea"
        onChange={(e) => updateText(e.target.value)}
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
