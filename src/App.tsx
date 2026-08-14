import './App.css'
import ExperienceItem from './WorkExperienceItem';
import logo from "./assets/annie-sexton-logo.png";
import avatar from "./assets/annie-avatar.jpg";
import thumbnailGit from "./assets/thumbnail-git-organized.png";
import thumbnailHerokuSSL from "./assets/thumbnail-heroku-ssl.png";
import thumbnailRubyConf from "./assets/thumbnail-rubyconf2018.png";
import thumbnailCompression from "./assets/thumbnail-compression.png";
import thumbnailJsOrigin from "./assets/thumbnail-jsorigin.png";
import annie1 from "./assets/annie-1.jpg";
import ExperienceDescription from './ExperienceDescription';
import WritingLink from './components/WritingLink';
import VideoCard from './components/VideoCard';

// Videos I produced for the Fly.io YouTube channel.
// View counts are a snapshot — refresh them when they start to feel stale.
const flyVideos = [
  { id: "QmTyKqoAb5M", date: "2026-04-22", title: "Auth without tokens", views: "4.1K views" },
  { id: "FTOvkqBmg2c", date: "2026-03-04", title: "Durable storage – without disks?", views: "3.3K views" },
  { id: "-gDjLF7x27k", date: "2026-02-24", title: "N-tier architecture is not your only option.", views: "7.1K views" },
  { id: "O0iG4HSsr-I", date: "2026-02-17", title: "Litestream solves the #1 SQLite problem. This is how.", views: "10.5K views" },
  { id: "0ycZjV8Ducw", date: "2025-05-28", title: "The coolest Fly.io feature you’re not using.", views: "2.3K views" },
  { id: "74c1ByGvFPE", date: "2025-04-18", title: "What is MCP and how do you use it? | Model Context Protocol", views: "14.8K views" },
  { id: "9VYwzmOjGkU", date: "2025-01-16", title: "Demystifying VPNs for web devs", views: "7.6K views" },
  { id: "yxNpIL2MqEY", date: "2024-12-12", title: "We use containers now. Here’s why.", views: "21.8K views" },
  { id: "y0Kxi-DTLjU", date: "2024-12-05", title: "Kubernetes without nodes", views: "11.3K views" },
  { id: "dy2RJdDEvO0", date: "2024-11-26", title: "We built an orchestrator from scratch. Here’s why.", views: "16.8K views" },
  { id: "DxHn9P5zr-g", date: "2024-10-08", title: "We did something *weird* with our CLI.", views: "12.1K views" },
  { id: "wVil7wG-1yg", date: "2024-09-24", title: "We don’t use containers, and here’s why.", views: "12M views" },
];

function App() {

  return (
    <>
      <div className="flex flex-col gap-14 items-center text-center justify-center md:py-56 px-10 py-24">
        <img src={logo} className="max-w-[644px] max-h-[76px] w-full"/>
        <p className="text-gray-500 uppercase tracking-wider md:text-xl text-base">Developer Educator &nbsp;•&nbsp; Software Engineer</p>
        <div className="max-w-[650px] p-6 rounded-lg bg-gray-50 border-gray-200 border flex md:flex-row flex-col gap-10 items-center md:text-left text-center">
          <img src={avatar} className="rounded-lg" width="138" alt="Headshot of Annie Sexton, Product Developer, Designer and Engineer" />
          <div className="text-md leading-7">I'm a multi-faceted software developer and educator with over 15 years of experience. I specialize in nerd-sniping engineers into learning cool things through articles, talks, and videos.</div>
        </div>
      </div>

      <div className="bg-[url('assets/light-gradient-bg.png')] bg-cover shadow-inner px-10 py-20 w-full">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-center text-4xl mb-20 uppercase font-bold">Popular Videos</h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {flyVideos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-heropattern bg-cover shadow-inner px-10 py-40 w-full">
        <div className="max-w-[900px] text-center mx-auto paragraph">
        <h2 className="text-center text-4xl mb-20 uppercase font-bold">Technical Writing & Talks</h2>

          <div className="md:flex flex-col gap-5">

            <WritingLink
              title="Compression is prediction"
              desc="I was reading about compression recently when I stumbled upon something crazy: that compressors and LLMs are, at their core, trying to solve the exact same problem. Both are built on the same bet — that if you can predict what comes next, you barely have to store it..."
              src="https://ngrok.com/blog/compression-is-prediction"
              thumbnail={thumbnailCompression}
            />

            <WritingLink
              title="TALK: JavaScript: The Origin Story"
              subtitle="Epic Web Conf 2025"
              desc="JavaScript was hacked together in 10 days as a “toy language,” and somehow became the backbone of the modern web. This talk traces that unlikely path: the browser wars, AJAX, jQuery, V8 and the birth of Node, and the framework era that followed..."
              src="https://www.epicweb.dev/talks/javascript-the-origin-story"
              thumbnail={thumbnailJsOrigin}
            />

            <WritingLink
              title="Git Organized: A Better Git Flow"
              desc="Imagine this: you’ve been paged to investigate a production incident, and after some digging, you identify the commit with the breaking code. You decide to revert the change. Unfortunately, in doing so, a new bug is introduced! As it turns out, hidden...."
              src="https://render.com/blog/git-organized-a-better-git-flow"
              thumbnail={thumbnailGit}
            />

            <WritingLink
              title="Understanding SSL on Heroku"
              desc="There are two ways to enable SSL for your Heroku app’s custom domains. The options are listed in order of recommended use: Automated Certificate Management (ACM) and Heroku SSL. In general, Automated..."
              src="https://devcenter.heroku.com/articles/understanding-ssl-on-heroku"
              thumbnail={thumbnailHerokuSSL}
            />

            <WritingLink
              title="TALK: The Dangers of Tribal Knowledge"
              subtitle="RubyConf 2018"
              desc="Are you constantly tapped on the shoulder for answers? Tired of being the Google for your team? Or perhaps you’re the new kid, having to ask a dozen different people to find answers to all your questions? These are the consequences of tribal knowledge..."
              src="https://www.youtube.com/watch?v=o-JL-so5Gm8&t=4s"
              thumbnail={thumbnailRubyConf}
            />
          </div>
        </div>
      </div>


      <div className="bg-[url('assets/dark-gradient-bg.png')] bg-cover shadow-inner px-10 py-40 w-full">
        <div className="max-w-[900px] text-center mx-auto paragraph">
          <div className="flex gap-8 justify-center w-full mb-10">
            <img src={annie1} alt="" className="rounded-lg w-48 ring-white ring-2 shadow-lg" />
          </div>
          <p className="text-white">As a self-taught engineer, I've always had a passion for learning and education. I strive to instill the same curiosity in others through my writing, videos, and talks.</p>
          <p className="text-white">Outside of work I love to draw comics and hang out with my dog, Arlo. I was born and raised in the heart of Texas in Austin, and in 2019, after a considerable amount of globe-trotting, I decided to make a home for myself in the lush Pacific Northwest, in Portland, Oregon.</p>
        </div>
      </div>

      <div className="bg-[url('assets/light-gradient-bg.png')] bg-cover shadow-inner px-10 py-20 w-full">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-center text-2xl mb-40 mt-20 uppercase opacity-60">Work History</h2>

          <ExperienceItem
            company="ngrok"
            companySubtitle="Unified ingress platform for apps, APIs and AI agents"
          >
            <ExperienceDescription title="Developer Educator" duration="Jun 2026 - Present">
              <p>Research technical concepts relevant to working developers and turn them into in-depth articles and videos.</p>
              <p>Recent work includes <a href="https://ngrok.com/blog/compression-is-prediction" target="_blank">Compression is prediction</a>, a deep dive into the shared foundation of data compressors and LLMs — walking through entropy coding, Shannon entropy, and context modeling with interactive visualizations.</p>
            </ExperienceDescription>
          </ExperienceItem>

          <ExperienceItem
            company="Fly.io"
            companySubtitle="Public cloud for deploying apps close to users"
          >
            <ExperienceDescription title="Developer Advocate & Video Content Creator" duration="Jul 2024 - Jun 2026">
              <p>Built and hosted Fly.io's YouTube channel, producing technical videos for professional developers on cloud infrastructure, containers, databases, and AI tooling. Several videos surpassed 200K views, and one over 12 million.</p>
              <p>Covered the full range from deep infrastructure explainers — VM orchestration, edge routing, running Kubernetes without nodes — to hands-on tutorials on Dockerfiles, WebSockets, VPNs, and SQLite replication with Litestream.</p>
              <p>Owned the full production pipeline: topic research, scripting, filming, and editing.</p>
            </ExperienceDescription>
          </ExperienceItem>

          <ExperienceItem
            company="Render"
            companySubtitle="Platform-as-a-Service to build and host web services"
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
          <div className="grid md:grid-cols-12 md:gap-12">
            <div className="col-span-4"> </div>
            <div className="col-span-8">
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
