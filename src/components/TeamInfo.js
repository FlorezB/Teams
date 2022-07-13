import React from 'react'

class TeamInfo extends React.Component {
    render () {
        return (
            <article className='flex'>
                <h2>{this.props.name} - {this.props.date}</h2>
                <img src={this.props.image} alt="Club's logo"/>
                <p className='size'>
                    {this.props.stadium} - Adress : {this.props.adress}
                </p>
                <p>
                    Contact 
                    <br />
                     tel : {this.props.tel} 
                    <br />
                    email : {this.props.email}
                </p>
            </article>
        )
    }
}
export default TeamInfo