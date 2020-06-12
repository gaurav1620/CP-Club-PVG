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
                    <div onClick={()=>this.changeMenu(0)} className='noicehvr'><p>Blogs</p></div>
                    <div onClick={()=>this.changeMenu(1)} className='noicehvr'><p>Home</p></div>
                    <div onClick={()=>this.changeMenu(2)} className='noicehvr'><p>Guides</p></div>
                </div>

                {this.state.index === 1?<Home/>:this.state.index === 0?<Blog/>:<Info/>}
                
                <div className='footer'>

                    <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                        <h3>Socials</h3>
                        <div style={{display: 'inlineBlock'}}>
                            <a  style={{marginRight:'100px'}} href='https://github.com/gaurav1620/cp-club-pvg' 
                                target='_blank'>
                                <img src='github-11-xxl.png' width='50px' height='50px'/>
                            </a>
                            <a href='https://chat.whatsapp.com/BhMFqfAfRuLEGN90q3BQCD' 
                                target='_blank'>
                                <img src='whatsapp-xxl.png' width='50px' height='50px'/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        );
        
    }
}

export default App;
