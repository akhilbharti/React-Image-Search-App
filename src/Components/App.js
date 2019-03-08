import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component{
    state= { images: [] };

    onSearchSubmit = async (value) =>{
    const response =await unsplash.get('/search/photos', {
            params:{query:value },
        });
        this.setState({images:response.data.results});

    }
    render(){

        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
                Found: {this.state.images.length} images
                <ImageList images = {this.state.images}/>
            </div>
        );
    }
}



export default App;