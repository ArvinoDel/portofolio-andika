import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const Contacts = dynamic(() => import("../containers/Contacts"));
const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"));
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import { GithubUserType } from "../types";

export default function Home({ githubProfileData }: { githubProfileData: any }) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Feedbacks />
      <Projects />
      <Contacts />
      <GithubProfileCard {...githubProfileData} />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/6281224964214?text=Halo%20Andika,%20saya%20tertarik%20untuk%20bekerja%20sama%20dengan%20Anda!" // Ganti dengan nomor WA kamu
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
      >
             <i className="ni ni-chat-round"></i>

      </a>
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
