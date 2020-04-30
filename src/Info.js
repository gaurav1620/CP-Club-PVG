import React from 'react';
import './App.css'

class Info extends React.Component {
    render(){
        return (
            <div className='simple-block'>
                <h1>Best websites to start CP</h1> 
                <div className='websites'>
                    <h3><a target="_blank" href="https://codechef.com">Codechef </a></h3>
                    <p >Codechef is one of the best place to start as a beginner because 
                        codechef has this unique kind of contest (Long challenge) which goes on for 10 days.
                        This is quite helpful for beginners as they are able to learn new things 
                        during the contest.Other than long challenge there are two other types of contests on
                        Codechef , namely Lunchtime and Coof-off. Both of these are short contests are of 3 and 2.5 hours.
                        Each of the 3 contests take place once a month.
                    </p>
                </div>
                <div className='websites'>
                    <h3><a target="_blank" href="https://hackerrank.com">Hackerrank </a></h3>
                    <p >
                        Hackerrank is another good beginner friendly place to start competetive programming.
                        It has a variety of tutorials on various programming languages and on  
                        <a href='https://www.hackerrank.com/challenges/problem-solving/' target='_blank' > Problem Solving</a>.
                        You can start right away in any tutorial , read it and then find solutions to the questions on that
                        particular topic and submit. But the problem with Hackerrank is that it is not centered on competetive 
                        programming and thus has does not have a wide variety of problems.
                        Also contests are rare on Hackerrank.
                    </p>
                </div>
                <div className='websites'>
                    <h3><a target="_blank" href="https://codeforces.com">Codeforces </a></h3>
                    <p >
                        Codeforces is the best website once you are not total beginner in CP .Codeforces generally has contests every 
                        alternate days (on average), which are short contests of 2 or 2.5 hours.The best thing about Codeforces 
                        is its community.The Codeforces community is very strong , they post fast editorials after every contest
                        and help out people who are stuck at a particular problem.
                        Many top programmers around the world participate mostly in Codeforces contests.
                    </p>
                </div>
                <div className='websites'>
                    <h3><a target="_blank" href="https://spoj.com">SPOJ </a></h3>
                    <p >
                        SPOJ (Sphere Online Judge) is what you can call the library of competetive programming questions.It contains 
                        problems from previous contests of various websites and also has the problems from Google Kickstart and
                        ACM-ICPC to local olympiads.SPOJ has literally thousands of problems on a wide range of topics.
                        But the problem with SPOJ is that they dont post any editorials nor have any type of contests.
                    </p>
                </div>
                <div className='websites'>
                    <h3><a target="_blank" href="https://hackerearth.com">HackerEarth</a></h3>
                    <p >
                        HackerEarth hosts regular contests as well as has various hackathons organised by various companies.
                        I haven't used HackerEarth much so I dont have much info but they have one of the best 
                        <a target="_blank" href='https://www.hackerearth.com/practice/'> practice series </a>
                        wherein there are step by step tutorials and guides to basic algorithms and then problems based on them.
                    </p>
                </div>
            </div>
        );
        
    }
}

export default Info;
