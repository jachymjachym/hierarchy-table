function Column(props) {
  return (
    <td {...props}>
      { props.children }
    </td>
  );
}

export default Column;