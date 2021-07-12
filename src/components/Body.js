import React, { Component } from 'react';
import Form from './Form'
import Results from './Results'
import youtube from '../supports/youtube'

class Body extends Component {
    state = {
        tags: [],
        title: '',
        channelTitle: '',
        views: '',
        description: ''
        
    }
    handleSubmit = async (term) => {
        var id_split = term.split("v=")[1]
        const response = await youtube.get('/videos',{
            params:{
                id: id_split
            }
        }
        )
        this.setState({
            everything: response.data.items,
            tags: response.data.items[0].snippet.tags,
            title: response.data.items[0].snippet.title,
            description: response.data.items[0].snippet.localized.description
        })
    }
    render (){
        return(
            <div className="w-full container mx-auto my-12">
                <Form handleFormSubmit = {this.handleSubmit}/>
                <Results tags={this.state.tags} title = {this.state.title} description = {this.state.description}/>
            </div>
        )
    }
}
export default Body;