import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import digitalArt from '../assets/digital_artist_male.jpg'

export const Home = () => {
  return (
    <div className="homepage">
      <div className="section">
        <h4 className="color-pal-1 py-1">Hi, my name is</h4>
        <h1 className="color-pal-2 fw-bolder">Gautam Bafna.</h1>
        <h1 className="color-pal-4 py-1 fw-bolder"> I build things for the web.</h1>
        <h5 className="color-pal-3 py-1">
          I’m a <span className="color-pal-1"> Software Engineer </span>
          who loves building Websites & Web-apps.
        </h5>
      </div>

      <div className="home" id="About">
        <div>
          <h2 className="color-pal-4 fw-bolder creative-header">
            <span className="color-pal-1 ">01.</span> About Me
          </h2>

          {/* <h5 className="color-pal-3 p-2"> Creative Full-stack MERN/MEAN developer & developing responsive websites.</h5> */}
          <h5 className="mx-2">Skills :</h5>
          <div>
            <span className="badge text-bg-light p-2 m-2 fs-6">Javascript(ES6+)</span>
            <span className="badge text-bg-light p-2 m-2 fs-6">React JS</span>
            <span className="badge text-bg-light p-2 m-2 fs-6">Docker</span>
            <span className="badge text-bg-light p-2 m-2 fs-6">Git</span>
            <span className="badge text-bg-light p-2 m-2 fs-6">Core Java</span>
            <span className="badge text-bg-light p-2 m-2 fs-6">Python</span>
            <span className="badge text-bg-light p-2 m-2 fs-6">Flask</span>
            <span className="badge text-bg-light p-2 m-2 fs-6">Modern libraries and Frameworks</span>
            <span className="badge text-bg-light p-2 m-2 fs-6">HTML</span>
            <span className="badge text-bg-light p-2 m-2 fs-6">CSS</span>
            <span className="badge text-bg-light p-2 m-2 fs-6">TailwindCSS</span>
            <span className="badge text-bg-light p-2 m-2 fs-6">Twilio</span>
          </div>
        </div>
        {/*<img
          src="https://pbs.twimg.com/profile_images/1369317140445224961/Tj91NbPc.jpg"
          alt="profile"
          className="mt-5"
          style={{
            width: "15rem",
            height: "15rem",
            padding: "0.5rem",
            borderRadius: "1rem",
          }}
        />*/}
        <img
          src={digitalArt}
          alt="profile"
          className="mt-5"
          style={{
            width: "20rem",
            height: "20rem",
            padding: "0.5rem",
            borderRadius: "1rem",
          }}
        />
      </div>

      <div className="section ">
        <h2 className="color-pal-4 fw-bolder" id="Work">
          <span className="color-pal-1">02.</span> Where I've Worked
        </h2>
        <div className="pt-3">
          <p className="fs-5">
            Software Engineer - Frontend <span className="color-pal-1 ">@Flairminds Software Pvt. Ltd.</span>
          </p>
          <p className="color-pal-4">July 2023 - Present</p>
          <ul className="color-pal-3">
            <h5  className="color-pal-4 fw-bolder" style={{marginTop:"10px"}}>Construction Loan Management System:</h5>
            <li>Developed end-to-end front-end architectureusingReact.jswith integrated Stripe-based subscription management and loan limitations. Built an LLM-powered UI for intelligent document interaction—users can upload files, chat withthemodel,ask questions, and export summaries as PDF s. Designed workflows for loan draw requests, including real-time chat, multi-role (Borrower, Inspector,Lender) management, and Excel-based team onboarding.</li>
              <h5  className="color-pal-4 fw-bolder" style={{marginTop:"10px"}}>Employee Management System:</h5>
            <li>
             Enabled HR to add users/associates, define roles, andgrantspecificpermissions to employees. Developed a leave management system where users can applyfor leave, teamleads can approve requests, and automated email notifications are sent upon applicationandapproval.Implemented a streamlined deployment workflow using GitHub Actions, enabling seamless deploymentofchanges to Azure App Services upon Git push</li>
            <h5  className="color-pal-4 fw-bolder" style={{marginTop:"10px"}}>Financial Calculator UI & Functionality Development </h5>
            <li>
               Functionality Development : Developed a dynamic financial calculatorwithfund flow, P&L, and borrowing base computations. Enabled graph-based visualizations, fileuploadsfordata-driven calculations, and drag-and-drop row management. Used React Flowto let usersvisuallyconnect nodes and send values to the backend.
            </li>
            <h5  className="color-pal-4 fw-bolder" style={{marginTop:"10px"}}>Full-Stack Banking Application:</h5>
            <li>
              Led the development of a React-based loan applicationsystemwith dynamic form builders, enabling banks to customize layouts and fields, resultingina40%reduction in form deployment time.
            </li>
            <h5  className="color-pal-4 fw-bolder" style={{marginTop:"10px"}}>AI-Powered (Nexla) Chat Platform</h5>
            <li>
             Built a responsive, ChatGPT/Claude-ai/CursorAI like UI withreal-timeWebSocket communication, PDF uploads, and interactive Q&A over company-wide datausingcustomtagging logic. Enabled users to explore interconnected enterprise data, view flowdiagrams, andanalyzetrends using React-based charts; supported multiple modes for better UX. Integrated LLMs toallowdata-driven answers across the organization's documents. Designed scalable architecture to handlelargefiles,structured data, and real-time responses.
            </li>
          </ul>
        </div>
        <div className="pt-3">
          <p className="fs-5">
            Data Science Internship <span className="color-pal-1 ">@Verzeo</span>
          </p>
          <p className="color-pal-4">July 2021 - Aug 2022</p>
          <ul className="color-pal-3">
            <li>Worked on data visualization, data cleaning, and prepossessing to improve data quality and insights. Implementedvariousmachine learning algorithms for data analysis and predictive modeling. Analyzed large datasets, identified patterns, andgeneratedinteractive visualizations for better decision-making.</li>
          </ul>
        </div>
      </div>
      <div className="section">
        <h2 className="color-pal-4 fw-bolder creative-header">
          <span className="color-pal-1 ">03.</span> Projects
        </h2>
        <p className="fs-5 py-2">I have worked on some projects, you should checkout .</p>
        <Link className="link" to="/projects">
          <button className="btn link-btn">Browse Projects</button>
        </Link>
      </div>
      {/* <div className="section">
        <h2 className="color-pal-4 fw-bolder creative-header">
          <span className="color-pal-1 ">04.</span> Blogs
        </h2>
        <p className="fs-5 py-2">I am also working on some Technical Blogs. You can visit the Blogs Here</p>
        <Link className="link" to="/blogs">
          <button className="btn link-btn">My Blogs</button>
        </Link>
      </div> */}
      <div className="section text-center " style={{ marginBottom: "2rem" }} id="Contact">
        <h2 className="color-pal-4 fw-bold "> Get In Touch</h2>
        <a className="btn soc-btn" href="https://www.linkedin.com/in/gautam-bafna-49b879165/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a className="btn soc-btn" href="https://github.com/gautambafna26" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a className="btn soc-btn" href="https://www.instagram.com/gautambafna26?igsh=OWgwOGQxaHdzMzY2" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        {/* <a className="btn soc-btn" href="https://twitter.com/Gautam_J_21" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a> */}
        <button className="btn soc-btn" onClick={() => (window.location = "mailto:bafnagautam26@gmail.com")}>
          <EmailIcon />
        </button>
      </div>
    </div>
  );
};