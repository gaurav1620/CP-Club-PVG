import React from 'react';
import './App.css';

class Blog extends React.Component {
    render(){

        const article1="Competitive Programming is a sport, I mean literally. Take any sport, let’s consider cricket for that matter, you walk in to bat for the first time. Swing and a miss, do it couple of times and you’ll eventually hit one over the ropes. Now, consider a programming contest as a game of cricket, metaphorically. Compile a code and submit, you may get a WA (Wrong Answer). Make changes to code and eventually you will get your first AC (Accepted/Correct Answer). Let me give you a sneak peek, about 20% of questions in a programming contest are simple conversion of plain english to a code of your favourite programming language.Walk right into it, you will learn the unwritten rules of the game as you play harder and get better. And believe me, you don’t need to know any “fancy name” algorithm or data-structure to get started. Ever heard of “Waft shot”, yet you’re the best batsman in your street, right?";
        return (
            <div className='simple-block'>
                <div className='blog' >
                    <h4>What is CP ? </h4>
                    <p>{article1}</p>
                </div>
                <div className='blog' >
                    <h4>What is CP ? </h4>
                    <p>{article1}</p>
                </div>
                <div className='blog' >
                    <h4>What is CP ? </h4>
                    <p>{article1}</p>
                </div>
            </div>
        );
    }
}

export default Blog;
