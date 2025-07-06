import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Quotes = dynamic(() => import("../containers/Quotes"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Achievements = dynamic(() => import("../containers/Achievements"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const Contacts = dynamic(() => import("../containers/Contacts"));
const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"));
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import { GithubUserType } from "../types";
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function Home({ githubProfileData }: { githubProfileData: any }) {
  const link = "https://wa.me/6281224964214?text=Halo%20Andika,%20saya%20tertarik%20untuk%20bekerja%20sama%20dengan%20Anda!";

  return (
    <div>
       <SpeedInsights />
      <SEO />
      <Navigation />
      <Greetings />
      <Quotes />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Feedbacks />
      <Projects />
      <Achievements />
      <Contacts />
      <GithubProfileCard {...githubProfileData} />

      {/* WhatsApp Floating Button */}

<button
        onClick={() => window.open(link, '_blank')}
        className="whatsapp-float"
        aria-label="Chat via WhatsApp"
      >
        <div className="chat-icon">
          <i className="ni ni-chat-round"></i>
        </div>
      </button>

    </div>
  );
}

// Home.prototype = {
//   githubProfileData: PropTypes.object.isRequired,
// };


export async function getStaticProps() {
  const githubProfileData: GithubUserType = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then(res => res.json());

  return {
    props: { githubProfileData },
  };
}
