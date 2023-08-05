import './App.css'
import ExperienceItem from './WorkExperienceItem';
import { ReactComponent as Logo } from "./assets/annie-sexton-logo.svg";
import avatar from "./assets/annie-sexton-headshot.png";
import typistPic from "./assets/typist-screenshot.jpg";
import genshoPic from "./assets/gensho-screenshot.jpg";
import annie1 from "./assets/annie-1.jpg";
import ExperienceDescription from './ExperienceDescription';

function App() {

  return (
    <>
      <div className="flex flex-col gap-14 items-center text-center justify-center py-56">
        <Logo width="644px" height="76px"/>
        <p className="text-gray-500 uppercase tracking-wider text-xl">Product Developer &nbsp;•&nbsp; Designer &nbsp;•&nbsp; Engineer</p>
        <div className="max-w-[650px] p-6 rounded-lg bg-gray-50 border-gray-200 border flex gap-10 items-center text-left">
          <img src={avatar} width="138" alt="Headshot of Annie Sexton, Product Developer, Designer and Engineer" />
          <p className="text-md leading-7">I'm a multi-faceted product developer with over 11 years of product development experience. I love working with talented teams to craft unparalleled user experiences.</p>
        </div>
      </div>

      <div className="bg-gray-100 px-10 py-20 w-full">
        <div className="container mx-auto flex flex-col gap-40">
          <div className="grid grid-cols-2 gap-24 items-center">
            <a href="https://typist.app" target="_blank"><img src={typistPic} alt="Screenshot of Typist website" className="rounded-lg shadow-md shadow-gray-400" /></a>
            <div>
              <div className="flex justify-between mb-3 items-center">
                <p className="text-4xl uppercase font-bold">Typist</p>
                <a href="https://typist.app" target="_blank" className="text-2xl">https://typist.app</a>
              </div>
              <time className="text-lg italic text-gray-400 mb-10 block">Nov 2020 - Nov 2022</time>
              <div className="paragraph">
                <p className="text-xl leading-8">Typist is a refreshingly simple note-taking app built for developers, featuring auto-rendered Github-flavored markdown, ⌘K quick search, code block syntax highlighting, and keyboard shortcuts for days.</p>
                <p className="text-xl leading-8">I've been on a long journey in search of the perfect writing app: something simple enough to quickly jot down notes, but equipped with the features I appreciate as a developer, such as markdown, code block syntax highlighting, and a myriad of keyboard shortcuts. Many apps came close, but each left me wanting. After years of searching, I decided to roll up my sleeves and build something myself.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-24 items-center">
            <div>
              <div className="flex justify-between mb-3 items-center">
                <p className="text-4xl uppercase font-bold">Gensho</p>
                <a href="https://genshoapp.com" target="_blank" className="text-2xl">https://genshoapp.com</a>
              </div>
              <time className="text-lg italic text-gray-400 mb-10 block">Mar 2015 - Apr 2017</time>
              <div className="paragraph">
                <p className="text-xl leading-8">Gensho is a tool that helps users build foreign language flashcards quickly by looking up words as you highlight them. How it works: Copy and paste in any foreign text (anything you'd like to study from, like song lyrics, news articles, etc). Then simply highlight the words you don't know. You can then download that list of words and their definitions, and upload them to literally any flashcard program. Supported languages: Japanese, Spanish, French, German, and Italian.</p>
                <p className="text-xl leading-8">Designed, developed and marketed a SaaS product from the ground up, built in Ruby on Rails and ReactJS.</p>
                <p className="text-xl leading-8">Gensho was a passion project of mine that I eventually turned into a full-fledge SaaS product, and now boasts a healthy following of over 2000 users.</p>
              </div>
            </div>
            <a href="https://genshoapp.com" target="_blank"><img src={genshoPic} alt="Screenshot of Gensho website" className="rounded-lg shadow-md shadow-gray-400" /></a>
          </div>
        </div>
      </div>

      <div className="bg-white px-10 py-40 w-full">
        <div className="max-w-[900px] text-center mx-auto paragraph">
          <div className="flex gap-8 justify-center w-full mb-10">
            <img src={annie1} alt="" className="rounded-lg w-36" />
          </div>
          <p>During my 11 years working as an engineer, I’ve fallen in love with every aspect of product development, from programming, to strategy, to design. While my roots are in development, I’ve collected a wide breadth of skills across many areas of expertise, thanks to my endless curiosity and hunger for learning.</p>
          <p>Outside of work I love to travel, cook and write fiction. I was born and raised in the heart of Texas in Austin, and in 2019, after a considerable amount of globe-trotting, I decided to make a home for myself in the lush Pacific Northwest, in Portland, Oregon.</p>
        </div>
      </div>

      <div className="bg-gray-100 px-10 py-20 w-full">
        <div className="max-w-[800px] mx-auto">
          <ExperienceItem
            company="Render"
          >
            <ExperienceDescription title="Product Lead & UX Engineer" duration="Aug 2021 - Nov 2022">
              <p>Led cross-disciplinary teams to develop platform features that attracted businesses to migrate their applications from our top competitor.</p>
              <p>Worked directly with CEO to plan, define and build features using TypeScript, ReactJS, and GraphQL. Conducted competitive analysis reports to inform new feature development.</p>
            </ExperienceDescription>
          </ExperienceItem>

          <ExperienceItem
            company="Heroku"
            companySubtitle="Salesforce.com"
          >
            <ExperienceDescription title="Product Analyst" duration="Apr 2019 - Jul 2021">
              <p>Developed initial strategy and roadmap for supporting a new product offering (Salesforce Functions)</p>
              <p>Conducted customer research to identify user needs using data from internal support metrics and customer feedback</p>
              <p>Identified customer pain points and developed tools to improve self-service, reducing ticket load on Support</p>
              <p>Designed training material for new support team</p>
            </ExperienceDescription>
            <ExperienceDescription title="Senior Technical Support Engineer" duration="Aug 2016 - Apr 2019">
              <p>Provided in-depth support for Heroku customers on a wide range of technical topics, including performance issues, application outages, and development best practices</p>
              <p>Assisted strategic accounts during app outages</p>
              <p>Developed onboarding material for Heroku support team</p>
              <p>Curated and improved technical documentation</p>
            </ExperienceDescription>
          </ExperienceItem>


          <ExperienceItem
            company="Digital Telepathy"
            companySubtitle="Digital web agency based in San Diego"
          >
            <ExperienceDescription title="Full-stack Engineer & Account Manager" duration="May 2014 - Jul 2016">
              <p>Worked with clients to define project requirements, development roadmap, and acceptance criteria. </p>
              <p>Managed development process from initial concept through site launch.</p>
              <p>Built responsive marketing sites featuring rich interactions built-in JavaScript and CSS.</p>
            </ExperienceDescription>
          </ExperienceItem>
          <div className="grid grid-cols-12">
            <div className="col-span-3"> </div>
            <div className="col-span-9">
              <div className="bg-gradient-to-b h-44 from-teal-600 to-transparent w-[4px]"> </div>
            </div>
          </div>

          <div className="text-center text-2xl mt-20">For a complete work history, see my <a href="https://www.linkedin.com/in/annie-sexton-11472a46/" target="_blank">LinkedIn profile</a>.</div>
        </div>
      </div>

      
      <div className="flex items-center justify-center py-20">
        <div className="flex justify-center uppercase">
          <a href="https://typist.app" target="_blank">Typist App</a>
          <div className="text-teal-600 mx-4">•</div>
          <a href="https://www.linkedin.com/in/annie-sexton-11472a46/" target="_blank">LinkedIn</a>
          <div className="text-teal-600 mx-4">•</div>
          <a href="https://twitter.com/_anniebabannie_" target="_blank">Twitter</a>
        </div>
      </div>

    </>
  )
}

export default App
