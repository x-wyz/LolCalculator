import React, { Component } from 'react';
import './characterselect.css';

class CharacterSelect extends Component {
	constructor(props){
		super(props);
		this.state = {
			current: ""
		}
		this.updateCurrent = this.updateCurrent.bind(this);
	}

	updateCurrent(event){
		this.setState({
			current: event.target.value
		})
	}

	render(){
		const championlistKeys = Object.keys(this.props.championlist);
		const current = this.state.current;
		return (
			<div className="character-select">
				<input list="championlist" name="champion" className="champion-options" onChange={this.updateCurrent} />
				<datalist id="championlist">
					{
						championlistKeys.map(key => <option value={key.toUpperCase()} />)
					}
				</datalist>
				<button type="button" className="update-champ-btn" onClick={() => this.props.onChange(current)} >Update</button>
				{
					this.props.makeTarget === true ? <button type="button" className="update-target-btn" onClick={this.props.targetDummy} >Target Dummy</button> : null
				}
			</div>
		)
	}
}

export default CharacterSelect;
