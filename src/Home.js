import React from 'react';
import './App.css';

class Home extends React.Component {
    render(){
        return (
            <div className='simple-block'>
                <div className='blog' >
                    <h3 style={{textAlign:'center'}}>What is Competetive Programming ? </h3>
                    <p>The aim of competitive programming is to write source code of computer programs which are able to solve given problems. A vast majority of problems appearing in programming contests are mathematical or logical in nature. Typical such tasks belong to one of the following categories: combinatorics, number theory, graph theory, geometry, string analysis and data structures. Problems related to artificial intelligence are also popular in certain competitions.

Irrespective of the problem category, the process of solving a problem can be divided into two broad steps: constructing an efficient algorithm, and implementing the algorithm in a suitable programming language (the set of programming languages allowed varies from contest to contest). These are the two most commonly tested skills in programming competitions.

In most contests, the judging is done automatically by host machines, commonly known as judges. Every solution submitted by a contestant is run on the judge against a set of (usually secret) test cases. Normally, contest problems have an all-or-none marking system, meaning that a solution is "Accepted" only if it produces satisfactory results on all test cases run by the judge, and rejected otherwise. However, some contest problems may allow for partial scoring, depending on the number of test cases passed, the quality of the results, or some other specified criteria. Some other contests only require that the contestant submit the output corresponding to given input data, in which case the judge only has to analyze the submitted output data.

Online judges are online environments in which testing takes place. Online judges have ranklists showing users with the biggest number of accepted solutions and/or shortest execution time for a particular problem. </p>
                </div>
                <div className='blog'>
                    <h3 style={{textAlign:'center'}}>Why to start CP ? </h3>
                    <ul style={{paddingLeft:'10px'}}>
                        <li>
                            <h4>Improves understanding of DS and Algorithms</h4>
                            <p>

                                You may have implemented a lot of data structures and algorithms in college or classes, but you have always worked with small constraints. But when the data becomes large, we need to use various other (more efficient ) algorithms to limit the CPU time and the memory used. E.g., if you want to find the Fibonacci number for n = 100, it takes more than 56000 years to compute it using the standard recursive algorithm, however by using simple dynamic programming you can prevent the exponential useless calls to the function by storing previous results which will give you the answer in a few microseconds.
                            </p>
                        </li>
                        <li>
                            <h4>Improves logic</h4>
                            <p>Your logic improves by practice. You weren't this smart to being with. 
                                With CP, you continuously train yourself with algorithmic problems that 
                                test the better out of your current logic skills. With more and more practice, you get better.
                            </p>
                        </li>
                        <li>
                            <h4>Speeds coding up</h4>
                            <p>With an improved logic, you will be able to solve problems faster, decide faster, and put it into code faster without going to and fro thinking about the best approach to code it. Bonus benefit - There are many 2-3 hrs contest for Competitive Programming, so if you are in the habit of giving those, you must have increased your typing speed.</p>
                        </li>
                        <li>
                            <h4>You will start writing the best possible code in every situation </h4>
                            <p>C, C++, and Java are all compiled languages. That is, they interact directly with the system, and by extension, give you 100% control (figuratively) of how your code runs.
If you are doing CP in these languages (which you should), you will regularly run into situations where your code hangs short by a few milliseconds or takes a little too much memory. Micro-optimizations play a huge part then.</p>
                        </li>

                        <li>
                            <h4>And last but not least, CP helps you crack hiring coding rounds </h4>
                            <p>Coding rounds have always used Competitive Programming as a test of the candidate's potential. I don't 100% agree with it, but you can't do anything about it. So practicing CP here will always increase your chances of getting selected.</p>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;
