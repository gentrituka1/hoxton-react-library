type Props = {
  children: string;
  size?: 'small' | 'medium' | 'big';
};

export function Button({ children, size = 'medium', ...props }: Props) {

    let style = {
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
    }
    if(size === 'small') {
        style.paddingTop = '0.5rem';
        style.paddingBottom = '0.5rem';
    } else if(size === 'big') {
        style.paddingTop = '1.5rem';
        style.paddingBottom = '1.5rem';
    } else if (size === 'medium') {
        style.paddingTop = '1rem';
        style.paddingBottom = '1rem';
    }

  return (
    <button className="button" style={style} {...props}>
      {children}
    </button>
  );
}
