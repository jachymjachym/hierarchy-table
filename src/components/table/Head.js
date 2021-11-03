const renderHeaders = (keys) => keys.map((key, index) => 
  <th key={index}>
    {key}
  </th>
);

function TableHead(props) {
    return (
			<thead>
				<tr>
          {/* Blank column related with row button */}
          <th></th>
					{ renderHeaders(props.headers) }
				</tr>
			</thead>
    );
  }
  
  export default TableHead;