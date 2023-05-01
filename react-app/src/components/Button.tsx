interface Props {
    children: string;
    // add question mark to the prompt to make it optional
    color?: string;
    onClick: () => void;
}
const Button = ({children, color = 'primary', onClick} : Props) => {
  return (
    <button type="button"  className={'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}

export default Button;