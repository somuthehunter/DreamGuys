import { Code  } from "lucide-react";
import { Smartphone  } from "lucide-react";
import { Layout  } from "lucide-react";
import { Activity  } from "lucide-react";
import { Users} from "lucide-react";
import { BarChart } from "lucide-react";


import ratna from "../assets/ratna.png";
import nps from "../assets/nps.png";
import proyas from "../assets/proyas.png";
import rupak from "../assets/rupak.jpg";
import debu from "../assets/debu.jpg";
import pitu from "../assets/pitu.jpg";


export const navItems = [
  { label: "Features", href: "#feat" },
  { label: "Developers", href: "#dev" },
  { label: "Workflow", href: "#flow" },
  { label: "Services", href: "#service" },
  { label: "Testimonials", href: "#testis" },
  { label: "Contact Us", href: "#contact" },
];

export const testimonials = [
  {
    user: "Irshad Alam",
    company: "National Public School - Panjipara",
    image: nps,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Sanjay Sarkar",
    company: "Ratnasmriti Gems and Jewellers",
    image: ratna,
    text: "Thrilled with the project outcome! The team's creativity and problem-solving brought our vision to life.",
  },
  {
    user: "Manas Saha",
    company: "Proyas Talent Search",
    image: proyas,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  }
 
];

export const features = [
  {
    icon: <Code />,
    text: "User-Friendly Development Environment",
    description:
      "Easily build and manage your projects with a streamlined and intuitive code editor designed for web and app development.",
  },
  {
    icon: <Smartphone />,
    text: "Cross-Platform Compatibility",
    description:
      "Develop applications that work seamlessly across web, mobile, and desktop platforms with a single codebase.",
  },
  {
    icon: <Layout />,
    text: "Ready-to-Use Templates",
    description:
      "Kickstart your projects with a variety of pre-built templates for web apps, mobile apps, and machine learning dashboards.",
  },
  {
    icon: <Activity />,
    text: "Real-Time Code Execution",
    description:
      "Test and preview your applications instantly as you code, enabling rapid debugging and iteration.",
  },
  {
    icon: <Users />,
    text: "Team Collaboration Tools",
    description:
      "Collaborate in real-time with your team on development projects, enhancing productivity and idea sharing.",
  },
  {
    icon: <BarChart />,
    text: "Integrated Analytics",
    description:
      "Leverage built-in analytics to monitor app performance, user behavior, and data trends for informed decision-making.",
  },
];


export const checklistItems = [
  {
    title: "Seamless Code Integration",
    description:
      "Integrate new features and updates smoothly with version control systems to ensure a continuous development workflow.",
  },
  {
    title: "Collaborative Code Reviews",
    description:
      "Facilitate team collaboration through structured code reviews, ensuring quality and best practices across all platforms.",
  },
  {
    title: "AI-Powered Development Tools",
    description:
      "Leverage AI tools to automate repetitive tasks, optimize code, and reduce development time in both web and mobile applications.",
  },
  {
    title: "Rapid Deployment & Scaling",
    description:
      "Quickly deploy applications across multiple environments and scale seamlessly to meet growing user demands.",
  },
];

export const pricingOptions = [
  {
    title: "Web Development",
    price: "Depend",
    features: [
      "Responsive Team",
      "24/7 Support",
      "Web Analytics",
      "Admin Dashboard",
    ],
  },
  {
    title: "App Development",
    price: "Depend",
    features: [
      "Dynamic Team ",
      "Cross-platform App",
      "24/7 support",
      "Advanced dashboard ",
    ],
  },
  {
    title: "AI - Based Project",
    price: "Depend",
    features: [
      "Data Analytics",
      "Machine Learning models",
      "Efficient use of Cloud platform",
      "MLOps ",
    ],
  },
];




export const developers = [
  {
    name: "Pritam Dutta",
    designation: "Full Stack Developer",
    expertise: ["React", "JavaScript", "CSS" , "Python" , "Django" , "postgresql"],
    photo: pitu,
    linkedIn: "https://www.linkedin.com/in/pritam-dutta-27bb12268/",
    whatsapp: "https://wa.me/+916295184794",
    facebook:"https://www.facebook.com/profile.php?id=100027328621647",
  },
  {
    name: "Rupak Swar",
    designation: "Backend Developer",
    expertise: ["Node.js", "Express", "MongoDB" , "Python" , "Django"],
    photo: rupak,
     linkedIn: "https://www.linkedin.com/in/rupak-swar-54a101259",
    whatsapp: "https://wa.me/+917431911822",
    facebook:"https://www.facebook.com/rupak.swar/",
  },
  {
    name: "Debangshu Dey",
    designation: "Frontend Developer",
    expertise: ["React", "JavaScript", "CSS"],
    photo: debu,
    linkedIn: "http://linkedin.com/in/debangshu--dey",
    whatsapp: "https://wa.me/+916291176902",
    facebook:"https://www.facebook.com/share/12EHgLKjcYU/?mibextid=wwXIfr",
  },
];