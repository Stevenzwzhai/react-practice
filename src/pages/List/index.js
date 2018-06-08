import React, { Component } from 'react'
import {changeName, changeAge} from '../../action/Change'
import {connect} from 'react-redux'
class List extends Component {
    changeName = (name) => {
        console.log(this.props, name)
        this.props.changeName(name)
    }

    changeAge = (age) => {
        this.props.changeAge(age)
    }
    getList = () => {

    }
    render() {
        return (
            <div>
                {this.props.name}
                <div className="title">change list</div>
                <button onClick={this.changeName.bind(this, '12212121')}>change name</button>
                <button onClick={this.changeAge}>change age</button>
                <button onClick={this.getList}>getList</button>
                <ul>
                    <li>12</li>
                    <li>11</li>
                    <li>15</li>
                    <li>13</li>
                    <li>17</li>
                </ul>
            </div>
        )
    }
}

export default connect(state => ({}), {changeName, changeAge})(List)