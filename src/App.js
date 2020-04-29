import React from 'react';
import './App.css';
import Blog from './Blog.js'
import Info from './Info.js'
import Home from './Home.js'
class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            index : 1,
        }
    }

    changeMenu(ind){

        if(this.state.index !== ind)this.setState({
            index : ind,
        })
    }

    render(){
        return (
            

            <div className="App">
                <div className="App-header" >
                    <h3>Competitive Programming Club PVG</h3>
                </div>

                <div className='menu'>
                    <div onClick={()=>this.changeMenu(1)} className='noicehvr'><p>Home</p></div>
                    <div onClick={()=>this.changeMenu(2)} className='noicehvr'><p>Blogs</p></div>
                    <div onClick={()=>this.changeMenu(3)} className='noicehvr'><p>Info</p></div>
                </div>

                {this.state.index === 1?<Home/>:this.state.index === 2?<Blog/>:<Info/>}


            </div>
        );
        
    }
}

export default App;
