export default function ListItems (props) {
	console.log('hello');
	console.log(props);
	return (
	  <ul>
		{props.items.map((item) => (
		  <li key={item.id}>
			<span>
			  {item.name}
			</span>
			<button onClick={() => props.remove(item)}>X</button>
		  </li>
		))}
	  </ul>
	)
}