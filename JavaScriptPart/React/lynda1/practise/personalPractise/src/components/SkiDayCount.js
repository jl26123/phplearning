import React from 'react'
import '../css/ui.css'

const className = React.createClass({
	render(){
		return(
			<div className="ski-day-count">
				<div className="total-days">
					<span>5 days</span>
				</div>
				<div className="powder-days">
					<span>2 days</span>
				</div>
				<div className='backcountry-days'>
					<span>1 hiking day</span>
				</div>
			</div>
		)
	}
});
