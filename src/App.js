import React, { useState, useEffect } from 'react';
import logo from './assets/logo.png';
import merge from './assets/merge.png';
import vipdrops from './assets/vipdrops.png';
import $pickle from './assets/$pickle.png';
import gameinc from './assets/gameinc.png';
import menu from './assets/burguermenu.png';
import pause from './assets/pause.png'
import play from './assets/play.png'
import mintday from './assets/mintday.png'
import song from './assets/songbg.mp3'
import discord from './assets/discord.png';
import twitter from './assets/twitter.png';
import './App.css';
import { BsArrowDown } from 'react-icons/bs';

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
    }
    this.audio = new Audio(song);
    this.audio.loop = true;
  }

  play = () => {
    const audioPromise = this.audio.play()
    if (audioPromise !== undefined) {
      audioPromise
        .then(_ => {
          this.setState({ play: true, pause: false })
        })
        .catch(err => {
          // catch dom exception
          console.info(err)
        })
    }
  }

  pause = () => {
    this.setState({ play: false, pause: true })
    this.audio.pause();
  }

  render() {
    return (
      <div className='w-[40px] my-auto h-[40px] m-6 ml-auto'>
        {this.state.pause ? <button onClick={this.play} className='h-full w-full'><img src={play} className='h-full w-full' /></button> :
          <button onClick={this.pause} className='h-full w-full'><img src={pause} className='h-full w-full' /></button>}
      </div>
    );
  }
}

function App() {
  const[misteryClicked, setMisteryClicked] = useState(false);

  return (
    <div className="App">
      {/* <video autoPlay loop muted playsInline id="video" className='back-video object-cover absolute left-0 top-0 overflow-hidden z-0'>
       <source src={video} type='video/mp4' />
      </video> */}
      <div className='sticky top-0 w-full h-[100px] flex flex-row md:px-[10%] z-20'>
        <img src={logo} className="h-full" alt="logo" />
        <Music />
        <a className='my-auto ml-2 m-6 w-[40px]' target="_blank" rel="noopener noreferrer" href='https://discord.com/invite/Dickmfer'><img src={discord} className="w-full" /></a>
        <a className='my-auto ml-2 m-6 w-[40px]' target="_blank" rel="noopener noreferrer" href='https://twitter.com/DickmferWTF'><img src={twitter} className="w-full" /></a>
        {/* <a className='my-auto ml-2 m-6 w-[40px]' href='https://dickmfer.wtf'><img src={menu} className="w-full" /></a> */}
      </div>
      <header className="min-h-screen bg-homeImg bg-cover bg-no-repeat bg-center -mt-[100px] z-20 flex flex-col md:px-[10%] xl:px-[33%]">
        {/* <h2 className='text-8xl md:text-9xl text-black mt-auto font-bold homeTitle'>Join the degen revolution</h2> */}
        {/* <button className='rounded-3xl z-20 mt-auto font-bold bg-green-400 hover:bg-white hover:text-green-400 text-white text-2xl w-[80%] md:w-[30%] md:h-[60px] h-[40px] mx-auto'><a className='w-full h-full' href="https://mint.dickmfer.wtf">Mint</a></button> */}
        <a href='#about' className='text-7xl z-20 mt-auto text-white mx-auto mb-12 animate-bounce'><BsArrowDown /></a>
      </header>
      <div className="min-h-screen -mt-[100px] md:-mt-[50px] md:px-[20%] bg-gradient-to-b from-[#605A60] to-[#000000] flex flex-col xl:flex-row-reverse xl:min-h-fit" id='about'>
        <img src={mintday} className="pt-[100px] w-full xl:h-[50%] xl:w-[50%] mx-auto my-auto p-6" alt="logo" />
        <p className='text-2xl xl:text-4xl text-white px-6 pt-12 text-justify xl:my-auto'>
          Hey mooorty... (BURP) Sorry I mean dick! squeeze that buthold, and don't lose this seed (WL), put it way up inside your butthole as it is your magic key to the DickMfer dimension! Your entry pass to dickland!
          <br/><br/>
          2500 little pieces of shit will be born this december 17th and the revolution will start... Aliens, floating asses, farts, creapy posions, nightmares, crazy shit!
          <br/><br/>
          These NFTs will be the base of the collection and will have access to the MERGE. In the future, the use cases may increase as we continue to work on the project and expand it.
        </p>
      </div>
      <div className="min-h-screen md:px-[20%] bg-gradient-to-b from-[#000000] to-[#001C32] flex flex-col xl:flex-row xl:min-h-fit">
        <img src={merge} className="pt-[100px] w-full xl:h-[50%] xl:w-[50%] mx-auto my-auto p-6" alt="logo" />
        <p className='text-2xl xl:text-4xl text-white px-6 text-justify xl:my-auto'>
          We merge the best of different communities to create the most talented and extense MFERS network in web3. Here "a nobody is somebody", and this will be the perfect place to expand your web3 network. Yeah mfers, network is everyting.
          <br/><br/>
          With strategic collabs, we will be able to provide our lovely little dicks with unique opportunities in the NFT space, with an exclusive discord and planned networking. Ho ho ho... and of course we intend to bring real life value to all of you. This is how we see the future of web 3 in the next years. In our vision, everything is valuable cuz we live in a reality of internetworks! Shit! that sounds like the matrix...
        </p>
      </div>
      <div className="min-h-screen md:px-[20%] bg-gradient-to-b from-[#001C32] to-[#012837] flex flex-col xl:flex-row-reverse xl:min-h-fit">
        <img src={vipdrops} className="pt-[100px] w-full xl:h-[50%] xl:w-[50%] mx-auto my-auto p-6" alt="logo" />
        <p className='text-2xl xl:text-4xl text-white px-6 text-justify xl:my-auto'>
          Cuz we know that you always want more and that you are very curious, we announce that a new drop will come... SO HOLD THAT PICKLE DICK!, you're going to love what's coming!
          <br/><br/>
          These VIP drops will serve to upgrade your DICKS and you will be able to get more BENEFITS.
          <br/><br/>
          Along the VIP drops, we will present a sub-project that we want to develop with the funds raised, in this first stage, related to the Game INC concept.
        </p>
      </div>
      <div className="min-h-screen md:px-[20%] bg-gradient-to-b from-[#012837] to-[#00320E] flex flex-col xl:flex-row xl:min-h-fit">
        <img src={gameinc} className="pt-[100px] w-full xl:h-[50%] xl:w-[50%] mx-auto my-auto p-6" alt="logo" />
        <p className='text-2xl xl:text-4xl text-white px-6 text-justify xl:my-auto'>
          Game INC is the future of the collection. Thanks to this concept we will be able to bring real-life profits to our community.
          <br/><br/>
          With the funds raised in different ways, we will create a mobile videogame which will be monetized in traditional ways to generate IRL profit.
          <br/><br/>
          This profit will be redistributed with the dick holders generating a sweet real passive income. If everything goes well, we aim to expand this into a game studio.
        </p>
      </div>
      
      <div className="min-h-screen md:px-[20%] bg-gradient-to-b from-[#00320E] to-[#000000] flex flex-col xl:flex-row-reverse xl:min-h-fit">
        <img src={$pickle} className="pt-[100px] w-full xl:h-[50%] xl:w-[50%] mx-auto my-auto p-6" alt="logo" />
        <p className='text-2xl xl:text-4xl text-white px-6 text-justify xl:my-auto'>
          In order to return the profits to our community, we will develop our very own native token $TBD which will be backed by the profits returned to the community from the subprojects like game inc. 
          <br/><br/>
          The tokenomics and token issuance is not defined yet as this is a later stage of the project, but every staked dick will receive an amount of tokens, which can be more if your dick is upgraded with the VIP drops.
          <br/><br/>
          To obtain money from this token you will be able to either sell it in the open market or claim funds backing this token to our treasury trough our official site.
        </p>
      </div>
      <div className="min-h-screen max-w-screen overflow-hidden md:px-[20%] py-[10%] bg-gradient-to-b from-[#000000] to-[#000000] flex xl:min-h-fit">
        <button onClick={() => {setMisteryClicked(true)}} className={misteryClicked ? 'text-4xl md:text-9xl xl:text-9xl px-6 text-center mx-auto misteryLetter xl:my-auto' : 'text-9xl md:text-9xl xl:text-9xl px-6 text-center mx-auto misteryLetter xl:my-auto'}>{misteryClicked ? "AREA 51 IS WORKING IN SOMETHING ULTRASECRET... VIP DROP" : "?"}</button>
      </div>
    </div>
  );
}

export default App;
