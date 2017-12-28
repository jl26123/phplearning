const {createElement}=React
const {render} = ReactDOM

const style = {
	backgroundColor:'orange',
	color:'red',
	fontFamily:'verdana'
}

/*const title = createElement(
	<h1 id ='title' className='Header' style = {style}></h1>,
	'HelloWorld'
);*/

render(
	<h1 id ='title' className='Header' style = {{backgroundColor:'orange', color:'red',fontFamily:'verdana'}}> HelloWorld</h1>,

	document.getElementById('react-containter')
	);