import { useState } from 'react'
import avatar from './assets/avatar.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex items-center text-center justify-center py-20 h-[70vh]">
        <div>
          <h1 className="font-serif text-8xl">Annie Sexton</h1>
          <p className="text-blue-500 uppercase tracking-wider text-xl">Product Developer &nbsp;•&nbsp; Software Engineer</p>
          <p className="mt-20 text-lg leading-8 max-w-[600px]">I’m a multi-faceted product developer that’s passionate about designing and developing great software on the web. </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-gray-50 py-20">
        <h2 className="font-serif text-3xl">About Me</h2>
        <div className="flex my-20 mx-6 grid grid-cols-3 max-w-[1000px] gap-5">
          <div>
            <img src={avatar} alt="Profile photo of Annie Sexton – Software Engineer, Product Developer"/>
            <div className="text-center text-gray-400 mt-5">Pronouns: she/her</div>
          </div>
          <div className="col-span-2 px-7 text-left">
            <p className="mb-9 leading-8 text-lg">During my 11 years working as an engineer, I’ve fallen in love with every aspect of product development, from to programming, to strategy, to design. While my roots are in development, I’ve collected a wide breadth of skills across many areas of expertise, thanks to my endless curiosity and hunger for learning.</p>
            <p className="leading-8 text-lg mb-9 ">Outside of work I love to travel, cook and write fiction. I was born and raised in the heart of Texas in Austin, and in 2019, after a considerable amount of globe-trotting, I decided to make a home for myself in the lush Pacific Northwest, in Portland, Oregon.</p>
            <p className="leading-8 text-lg">I'm also the proud founder of <a href="https://typist.app" target="_blank" className="text-blue-500">Typist</a>, a refreshingly simple note-taking app for developers.</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-20">
        <div className="flex justify-center uppercase">
          <a className="text-blue-500" href="https://typist.app" target="_blank">Typist App</a>
          <div className="text-blue-500 mx-4">•</div>
          <a className="text-blue-500" href="https://www.linkedin.com/in/annie-sexton-11472a46/" target="_blank">LinkedIn</a>
          <div className="text-blue-500 mx-4">•</div>
          <a className="text-blue-500" href="https://twitter.com/_anniebabannie_" target="_blank">Twitter</a>
        </div>
      </div>

    </>
  )
}

export default App
