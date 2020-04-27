import React from 'react';
import './App.css';
import './Hover.css';
import './blog.css';

class App extends React.Component {
    render(){

        const article1="Competitive Programming is a sport, I mean literally. Take any sport, let’s consider cricket for that matter, you walk in to bat for the first time. Swing and a miss, do it couple of times and you’ll eventually hit one over the ropes. Now, consider a programming contest as a game of cricket, metaphorically. Compile a code and submit, you may get a WA (Wrong Answer). Make changes to code and eventually you will get your first AC (Accepted/Correct Answer). Let me give you a sneak peek, about 20% of questions in a programming contest are simple conversion of plain english to a code of your favourite programming language.Walk right into it, you will learn the unwritten rules of the game as you play harder and get better. And believe me, you don’t need to know any “fancy name” algorithm or data-structure to get started. Ever heard of “Waft shot”, yet you’re the best batsman in your street, right?";

        const headerStyle = {flex:'1',flexDirection:'row',alignItems:'strech',justifyContent:'space-between',
            width:'100%',height:'auto',backgroundColor:'#00bfa5',color:'#000',top:'0',left:'0',padding:'0px',
        }
        const menuStyle={flex:'1',display:'flex',flexDirection:'row',justifyContent:'space-around',
            margin:'auto',textAlign:'center'
        }
        const menuItem={backgroundColor:'#000',color:'#fff',display:'box',flex:'1',margin:'0'};

        const article1style = {margin:'auto',padding:'25px',width:'70%',wordSpacing:'7px',marginTop:'80px',fontSize:'17px',}

        return (
            

            <div className="App">
                <header className="App-header">
                    <div style={headerStyle}>
                        
                        <div style={{flex:'1',alignSelf:'center',margin:'auto',textAlign:'center'}}>
                            <h3>Competetive Programming Club PVG</h3>
                        </div>

                        <div style={menuStyle}>
                             <div className='noicehvr' >
                                 <p>Home</p>
                             </div>
                             <div className='noicehvr' >
                                 <p>Blogs</p>
                             </div>
                             <div className='noicehvr' >
                                 <p>References</p>
                             </div>
                        </div>

                    </div>
                </header>
                <div className='blog' style={article1style}>
                    <p>
                        {article1} 
                    </p>
                </div>
            </div>
        );
        
    }
}

export default App;
