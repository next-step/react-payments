export default function Link({ children, ...props }) {
  return (
    <a {...props} href="">
      {children}
    </a>
  );
}
