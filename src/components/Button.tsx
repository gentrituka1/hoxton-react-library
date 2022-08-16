type Props = {
  handleClick?: () => void;
  text: string;
  handleDoubleClick?: () => void;
  handleMouseEnter?: () => void;
};

export function Button({
  handleClick,
  text,
  handleDoubleClick,
  handleMouseEnter,
}: Props) {
  return (
    <button
      className="button"
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onMouseEnter={handleMouseEnter}
    >
      {text}
    </button>
  );
}
