"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  MapPin,
  Mail,
  Download,
  ArrowUpRight,
  Calendar,
  GraduationCap,
  Briefcase,
  Award,
  Globe,
  ChevronRight,
  Code2,
  Brain,
  Cpu,
  MonitorSmartphone,
  Settings2,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

// Data

const skillGroups: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  Backend: ["Node.js", "Express.js", "Django"],
  Database: ["MongoDB", "PostgreSQL", "MySQL" ],
  Tools: ["Git", "VS Code", "Postman", "Linux", "Figma", "Vercel","Canva", "WordPress","MS Office"],
  Programming: ["C", "C++", "C#"],
  
};

const professionalSkills = {
  Management: [
    "Project Management",
    "Team Leadership",
    "Time Management",
  ],

  Communication: [
    "Client Communication",
    "Presentation",
    "Negotiation",
  ],

  Business: [
    "Business Development",
    "Problem Solving",
    "Vendor Management",
    "Planning & Strategy",
  ],

  Marketing: [
    "Digital Marketing",
    "Social Media Marketing",
    "Graphics Design",
    "Content Strategy",
  ],
};

const experiences = [
  {
    role: "IT & Operations Manager",
    company: "Hexa Enterprise Ltd.",
    type: "Part-Time",
    period: "May 2026 – Present",
    current: true,
    points: [
      "Lead IT infrastructure, digital operations, and vendor management for the enterprise",
      "Developed internal tooling and workflow automations — improved team efficiency by 40%",
      "Oversee cross-functional tech initiatives and digital transformation roadmap",
    ],
    stack: ["React", "Node.js", "MongoDB", "Linux"],
  },
  {
    role: "Marketing & IT Executive",
    company: "4P Dynamic Solutions",
    type: "Part-Time",
    period: "April 2025 – March 2026",
    current: true,
    points: [
      "Managed corporate WordPress websites, including content updates, performance monitoring, and technical support",
"Led digital marketing initiatives, social media management, and Facebook page growth through targeted campaigns and audience engagement",
"Coordinated client meetings, tender submissions, field marketing activities, delivery operations, and maintained strong client relationships from acquisition to project completion"
    ],
    stack: ["React", "Next.js", "Node.js", "PostgreSQL"],
  },
];
    const extracurriculars = [
      {
    
              role: "Graphic Design Coordinator",
              organization: "Hult Prize at IUBAT",
              period: "2 Seasons (2024, 2025)",
              current: false,
              points: [
                "Designed promotional materials, including posters, banners, and social media graphics for university events and campaigns.",
                "Collaborated with cross-functional teams to develop consistent branding and marketing assets.",
                "Created digital and print designs while ensuring brand consistency across all communication channels.",
                "Supported event marketing initiatives that increased student engagement and participation.",
                "Managed design revisions and delivered creative assets within project deadlines.",
              ],
            },
            {
              role: "Graphics Team Lead",
              organization: "National Content Writing Olympiad Season 1",
              period: "June 2025 – February 2026",
              current: true,
              points: [
                "Led the graphics team in designing promotional materials for a national-level academic competition.",
                "Designed social media posts, banners, certificates, and event branding materials.",
                "Coordinated with content, marketing, and event management teams to deliver creative assets on schedule.",
                "Reviewed design deliverables to maintain visual consistency and quality standards.",
                "Mentored team members and supported collaborative design workflows throughout the event lifecycle.",
              ],
},
    ];
const educations = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "IUBAT",
    full: "International University of Business Agriculture and Technology",
    period: "2023 – Present",
    badge: "4th Year",
    current: true,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Milestone College",
    full: "Science · Dhaka",
    period: "2020 – 2022",
    badge: "Completed",
    current: false,
  },
  
];
       
    const researchInterests = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
  },
  {
    icon: Cpu,
    title: "Machine Learning",
  },
  {
    icon: Code2,
    title: "Software Engineering",
  },
  {
    icon: Globe,
    title: "Intelligent Web Systems",
  },
  {
    icon: Settings2,
    title: "Business Process Automation",
  },
];


const projects = [
  {
    name: "E-Property",
    description:
      "Full-stack property management platform...",
    stack: ["Next.js", "Node.js", "MongoDB", "Express"],
    color: "indigo" as const,
    github: "https://github.com/Ifti-07/E-Property",
   
  },
  {
    name: "HireHub",
    description:
      "Responsive frontend for a job portal",
    stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    color: "emerald" as const,
    github: "https://github.com/Ifti-07/Hire-Hub",
    
  },
  {
    name: "Amirjan Hometex",
    description:
      "Full-stack clothing e-commerce platform...",
    stack: ["React", "MongoDB", "Node.js", "Express"],
    color: "violet" as const,
    github: "https://github.com/Ifti-07/Amirjan-hometex",
  
  },
  {
    name: "Todo App",
    description:
      "Full-stack task management application...",
    stack: ["React", "MongoDB", "Node.js", "Express"],
    color: "amber" as const,
    github: "https://github.com/Ifti-07/Todo-App",
   
  },
  {
    name: "Ashiq Ur Rashid Ifti Resume",
    description: "Responsive frontend for ATS-friendly resume website",
    stack: ["Next.js","Tailwind CSS"],
    color: "violet" as const,
    github: "https://github.com/Ifti-07/Resume-Website",
}
];

const certifications = [
  { name: "NSDA Web Design Level-3", issuer: "Government of the People's Republic of Bangladesh", year: "2026" },
  { name: "NSDA Web Design & Development For Freelancing level-4", issuer: "Government of the People's Republic of Bangladesh", year: "2026" },
  { name: "NSDA Web Application Development With Python level-5", issuer: "Government of the People's Republic of Bangladesh", year: "2026" },
  { name: "Digital Marketing", issuer: "NextgenIt", year: "2023" },
  { name: "Graphic Design Coordinator", issuer: "Hult Prize At IUBAT", year: "2024,2025" },
];

const stats = [
  { value: "3+", label: "Projects", sub: "Industry Standard" },
  { value: "1+", label: "Yrs Experience", sub: "Professional coding" },
  { value: "20+", label: "Technologies", sub: "Actively used" },
  { value: "5", label: "Certifications", sub: "Professional certs" },
];

//Style maps 

const projectPalette = {
  indigo: {
    bar: "bg-indigo-500",
    badge: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300",
    dot: "bg-indigo-500",
  },
  emerald: {
    bar: "bg-emerald-500",
    badge: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300",
    dot: "bg-emerald-500",
  },
  violet: {
    bar: "bg-violet-500",
    badge: "bg-violet-50 text-violet-700 dark:bg-violet-950/70 dark:text-violet-300",
    dot: "bg-violet-500",
  },
  amber: {
    bar: "bg-amber-500",
    badge: "bg-amber-50 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300",
    dot: "bg-amber-500",
  },
};

const skillPalette: Record<string, { badge: string; dot: string; header: string }> = {
  Frontend: {
    badge: "bg-indigo-50 text-indigo-700 border border-indigo-200/80 dark:bg-indigo-950/50 dark:text-indigo-300 dark:border-indigo-800/50",
    dot: "bg-indigo-500",
    header: "text-indigo-500 dark:text-indigo-400",
  },

  Backend: {
    badge: "bg-emerald-50 text-emerald-700 border border-emerald-200/80 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800/50",
    dot: "bg-emerald-500",
    header: "text-emerald-500 dark:text-emerald-400",
  },

  Database: {
    badge: "bg-violet-50 text-violet-700 border border-violet-200/80 dark:bg-violet-950/50 dark:text-violet-300 dark:border-violet-800/50",
    dot: "bg-violet-500",
    header: "text-violet-500 dark:text-violet-400",
  },

  Tools: {
    badge: "bg-slate-100 text-slate-600 border border-slate-200/80 dark:bg-slate-800/60 dark:text-slate-300 dark:border-slate-700/50",
    dot: "bg-slate-400",
    header: "text-slate-400 dark:text-slate-500",
  },

  Programming: {
    badge: "bg-amber-50 text-amber-700 border border-amber-200/80 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800/50",
    dot: "bg-amber-500",
    header: "text-amber-500 dark:text-amber-400",
  },
};




// App 

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const card =
    "bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-white/[0.07] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200";
  const sectionLabel =
    "text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500 mb-3";

  return (
    <div
      className="min-h-screen bg-[#f8fafc] dark:bg-[#080e1c] transition-colors duration-300 py-6 px-4 md:py-10"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Dark mode toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setDark(!dark)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-white/[0.08] text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-all duration-150 shadow-sm"
          >
            {dark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            {dark ? "Light mode" : "Dark mode"}
          </button>
        </div>

        <div className="space-y-4">
          {/*Profile Card */}
          <div className={`${card} p-5 md:p-6`}>
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              {/* Avatar */}
              <div className="relative flex-shrink-0">
  <div className="w-[72px] h-[72px] md:w-[88px] md:h-[88px] rounded-2xl overflow-hidden shadow-lg shadow-indigo-500/25 ring-2 ring-white dark:ring-slate-800">
    <Image
      src="/image/Profile.png"
      alt="Ashiq Ur Rashid Ifti"
      width={88}
      height={88}
      className="w-full h-full object-cover"
      priority
    />
  </div>

  <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#111827]" />
</div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h1 className="text-xl md:text-[22px] font-bold text-slate-900 dark:text-slate-50 tracking-[-0.02em] leading-tight">
                      Ashiq Ur Rashid Ifti
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                       Full Stack Developer · IT & Operations Executive · CSE Undergraduate
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                  <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3 h-3" />
                    Tongi, Gazipur, Bangladesh
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open to opportunities
                  </span>
                </div>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
CSE undergraduate with experience in Operations, IT and Digital Marketing, Building Modern Web applications with JavaScript, Next.js, Node.js, MongoDB, PostgreSQL, MySQL and WordPress.   </p>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] rounded-lg bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-xs font-semibold transition-colors duration-150 shadow-sm shadow-indigo-500/30"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Resume
                  </a>
                  {[
                    { icon: Mail, label: "Email", href: "mailto:ashiqurrashidifti233@gmail.com" },
                    { icon: FaGithub, label: "GitHub", href: "https://github.com/ifti-o7" },
                    { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/ashiq-ur-rashid-ifti" },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] rounded-lg bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-[#263347] transition-colors duration-150 shadow-sm"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Two-column grid ───────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4 items-start">
            {/* LEFT */}
            <div className="space-y-4">
              {/* About Me */}
              <div className={`${card} p-5`}>
                <p className={sectionLabel}>About Me</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-[1.7]">
I am a 4th year CSE undergraduate with work experience in Web Development, IT operations and Digital Marketing. I have experience in building modern web applications with JavaScript, Next.js, Node.js, MongoDB, PostgreSQL, MySQL and WordPress. I have experience in managing IT, websites, digital marketing campaigns, client relationships and business processes. I love applying technology to solve real-world problems, and building my skillset in software development and business operations.                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-[1.7] mt-2">
I am passionate about solving problems at the intersection of technology and business, and in the long run I hope to build my own technology venture. I love to travel, to discover new cultures, new ideas, new experiences outside of work.                </p>
              </div>

              {/* Experience */}
              <div className={`${card} p-5`}>
                <p className={sectionLabel}>Professional Experience</p>
                <div className="space-y-6">
                  {experiences.map((exp, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            exp.current
                              ? "bg-indigo-50 dark:bg-indigo-950/60"
                              : "bg-slate-100 dark:bg-slate-800"
                          }`}
                        >
                          <Briefcase
                            className={`w-3.5 h-3.5 ${
                              exp.current
                                ? "text-indigo-600 dark:text-indigo-400"
                                : "text-slate-400"
                            }`}
                          />
                        </div>
                        {i < experiences.length - 1 && (
                          <div className="w-px flex-1 bg-slate-100 dark:bg-slate-800 mt-2 min-h-[24px]" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0 pb-1">
                        <div className="flex flex-wrap items-start justify-between gap-1 mb-1.5">
                          <div>
                            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                              {exp.role}
                            </h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                              {exp.company}
                              <span className="mx-1.5 opacity-30">·</span>
                              <span className="text-indigo-600 dark:text-indigo-400">{exp.type}</span>
                            </p>
                          </div>
                          <span className="flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500 whitespace-nowrap">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </span>
                        </div>

                        <ul className="space-y-1">
                          {exp.points.map((pt, j) => (
                            <li key={j} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                              <ChevronRight className="w-3 h-3 text-indigo-400 mt-0.5 flex-shrink-0" />
                              {pt}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-1.5 mt-2.5">
                          {exp.stack.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Extra-Curricular Activities */}
<div className={`${card} p-5`}>
  <p className={sectionLabel}>Extra-Curricular Activities</p>

  <div className="space-y-6">
    {extracurriculars.map((activity, i) => (
      <div key={i} className="flex gap-3">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-lg bg-violet-50 dark:bg-violet-950/60 flex items-center justify-center">
            <Award className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          </div>

          {i < extracurriculars.length - 1 && (
            <div className="w-px flex-1 bg-slate-100 dark:bg-slate-800 mt-2 min-h-[24px]" />
          )}
        </div>

        <div className="flex-1">
          <div className="flex justify-between flex-wrap gap-2">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {activity.role}
              </h3>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                {activity.organization}
              </p>
            </div>

            <span className="text-[11px] text-slate-400 dark:text-slate-500">
              {activity.period}
            </span>
          </div>

          <ul className="mt-2 space-y-1">
            {activity.points.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-400"
              >
                <ChevronRight className="w-3 h-3 text-violet-400 mt-0.5 flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</div>

              {/* Education */}
              <div className={`${card} p-5`}>
                <p className={sectionLabel}>Education</p>
                <div className="space-y-5">
                  {educations.map((edu, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            edu.current
                              ? "bg-emerald-50 dark:bg-emerald-950/60"
                              : "bg-slate-100 dark:bg-slate-800"
                          }`}
                        >
                          <GraduationCap
                            className={`w-3.5 h-3.5 ${
                              edu.current
                                ? "text-emerald-600 dark:text-emerald-400"
                                : "text-slate-400"
                            }`}
                          />
                        </div>
                        {i < educations.length - 1 && (
                          <div className="w-px flex-1 bg-slate-100 dark:bg-slate-800 mt-2 min-h-[20px]" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0 pb-1">
                        <div className="flex flex-wrap items-start justify-between gap-1">
                          <div>
                            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                              {edu.degree}
                            </h3>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{edu.institution}</p>
                            <p className="text-xs text-slate-400 dark:text-slate-500">{edu.full}</p>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className="flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500 whitespace-nowrap">
                              <Calendar className="w-3 h-3" />
                              {edu.period}
                            </span>
                            {edu.current && (
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">
                                {edu.badge}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

          {/* Research Interests */}
          
            <div className={`${card} p-5`}>
              <p className={sectionLabel}>Research Interests</p>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {researchInterests.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex flex-col items-center justify-center text-center py-4"
              >
                <Icon className="w-7 h-7 text-indigo-500 dark:text-indigo-400 mb-3" />

                <h3 className="text-sm font-medium leading-tight text-slate-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>

              {/* Projects */}
              <div className={`${card} p-5`}>
                <p className={sectionLabel}>Featured Projects</p>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                  {projects.map((proj) => {
                    const p = projectPalette[proj.color];
                    return (
                      <div
                        key={proj.name}
                        className="group relative bg-slate-50/80 dark:bg-slate-800/30 rounded-xl border border-slate-200/80 dark:border-white/[0.06] overflow-hidden hover:border-slate-300 dark:hover:border-white/[0.12] hover:shadow-sm transition-all duration-200"
                      >
                        <div className={`h-[3px] ${p.bar}`} />
                        <div className="p-4">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                              {proj.name}
                            </h3>
                            <div className="flex items-center gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0">
                              <a
                                href={proj.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                                aria-label="GitHub"
                              >
                                <FaGithub className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                            {proj.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {proj.stack.map((t) => (
                              <span
                                key={t}
                                className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${p.badge}`}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            

            {/* RIGHT */}
            <div className="space-y-4">
              {/* Skills */}
              <div className={`${card} p-5`}>
                <p className={sectionLabel}>Skills</p>
                <div className="space-y-4">
                  {Object.entries(skillGroups).map(([cat, skills]) => {
                    const sp = skillPalette[cat];
                    return (
                      <div key={cat}>
                        <div className="flex items-center gap-1.5 mb-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${sp.dot}`} />
                          <span className={`text-[10px] font-semibold uppercase tracking-wider ${sp.header}`}>
                            {cat}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {skills.map((s) => (
                            <span
                              key={s}
                              className={`px-2 py-0.5 rounded-md text-[11px] font-medium ${sp.badge}`}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Professional Skill */}
              <div className={`${card} p-5`}>
  <p className={sectionLabel}>Professional Skills</p>

  <div className="space-y-5">
    {Object.entries(professionalSkills).map(([category, skills], index) => {
      const styles = [
        {
          dot: "bg-indigo-500",
          title: "text-indigo-600 dark:text-indigo-400",
          badge:
            "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/20 dark:text-indigo-300 dark:border-indigo-800",
        },
        {
          dot: "bg-emerald-500",
          title: "text-emerald-600 dark:text-emerald-400",
          badge:
            "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-300 dark:border-emerald-800",
        },
        {
          dot: "bg-violet-500",
          title: "text-violet-600 dark:text-violet-400",
          badge:
            "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/20 dark:text-violet-300 dark:border-violet-800",
        },
        {
          dot: "bg-amber-500",
          title: "text-amber-600 dark:text-amber-400",
          badge:
            "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/20 dark:text-amber-300 dark:border-amber-800",
        },
      ];

              const style = styles[index % styles.length];

              return (
                <div key={category}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-2 h-2 rounded-full ${style.dot}`} />

                    <h4
                      className={`text-[10px] font-semibold tracking-[0.18em] uppercase ${style.title}`}
                    >
                      {category}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border ${style.badge}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
              {/* Stats */}
              <div className={`${card} p-5`}>
                <p className={sectionLabel}>Achievements & Stats</p>
                <div className="grid grid-cols-2 gap-2.5">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="bg-slate-50 dark:bg-slate-800/40 rounded-xl p-3 text-center border border-slate-100 dark:border-white/[0.04]"
                    >
                      <p className="text-[26px] font-bold text-indigo-600 dark:text-indigo-400 leading-none">
                        {s.value}
                      </p>
                      <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                        {s.label}
                      </p>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                        {s.sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            

                {/* Languages */}
                <div className={`${card} p-5`}>
                  <p className={sectionLabel}>Languages</p>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                    Bengali
                                  </span>
                                  <span className="text-xs text-emerald-600 dark:text-emerald-400">
                                    Native
                                  </span>
                                </div>
                                <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                                  <div className="h-full w-full bg-emerald-500 rounded-full" />
                                </div>
                              </div>

                              <div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            English
          </span>
          <span className="text-xs text-indigo-600 dark:text-indigo-400">
            Fluent
          </span>
        </div>

                <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <div className="h-full w-[90%] bg-indigo-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>

              {/* Certifications */}
              <div className={`${card} p-5`}>
                <p className={sectionLabel}>Certifications</p>
                <div className="space-y-3">
                  {certifications.map((cert, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Award className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-snug">
                          {cert.name}
                        </p>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                          {cert.issuer} · {cert.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className={`${card} p-5`}>
                <p className={sectionLabel}>Contact</p>
                <div className="space-y-2.5">
                  {[
                    { Icon: Mail, label: "Email", value: "ashiqurrashidifti233@gmail.com", href: "mailto:ashiqurrashidifti233@gmail.com" },
                    { Icon: FaGithub, label: "GitHub", value: "github.com/ifti-07", href: "https://github.com/ifti-07" },
                    { Icon: FaLinkedin, label: "LinkedIn", value: "linkedin.com/in/ashiq-ur-rashid-ifti", href: "https://linkedin.com/in/ashiq-ur-rashid-ifti" },
                    { Icon: Globe, label: "Portfolio", value: "Ashiq Ur Rashid Ifti", href: "#" },
                    { Icon: MapPin, label: "Location", value: "Tongi, Gazipur, Bangladesh", href: null },
                  ].map(({ Icon, label, value, href }) => (
                    <div key={label} className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800/60 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-slate-400 dark:text-slate-500">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="text-xs text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate block"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-xs text-slate-700 dark:text-slate-300 truncate">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center py-2 pb-6">
            <p className="text-[11px] text-slate-400 dark:text-slate-600">
              Developed By AUR Ifti
            </p>
          </div>
        </div>
      </div>
    </div>
   );
}