import React, { Component } from 'react';
import './App.css';
import soup from './soup.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'
import Title from './components/Title'
import SoupCard from './components/SoupCard'
import SoupCard from './components/SoupCard';

class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        soup: soup,
        unselectedsoup: soup
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectSoup = soup => {
        const findSoup = this.state.unselectedsoup.find(item => item.soup === soup);

        if(findSoup === undefined) {
            // failure to select a new soup
            this.setState({ 
                message: "You guessed incorrectly!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                soup: soup,
                unselectedsoup: soup
            });
        }
        else {
            // success to select a new soup
            const newsoup = this.state.unselectedsoup.filter(item => item.soup !== soup);
            
            this.setState({ 
                message: "You guessed correctly!",
                curScore: this.state.curScore + 1,
                soup: soup,
                unselectedsoup: newsoup
            });
        }

        this.shuffleArray(soup);
    };

    render() {
        return (
            <Wrapper>
                <Navpills
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.soup.map(soup => (
                        <SoupCard
                            soup={soup.soup}
                            image={soup.image}
                            selectSoup={this.selectSoup} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;

