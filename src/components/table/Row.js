function Row(props) {
  return (
    <tr {...props}>
      { props.children }
    </tr>
  );
}

export default Row;