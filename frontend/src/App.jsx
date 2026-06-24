import { useEffect, useMemo, useState } from 'react'

const API_BASE_URL = import.meta.env.VITE_API_URL

const fallbackProfile = {
  name: 'James Christian Pineda',
  role: 'Full-Stack Developer',
  location: 'Central Luzon, Philippines',
  email: 'pinedajames679@gmail.com',
  linkedin: 'https://www.linkedin.com/in/james-christian-pineda/',
  github: 'https://github.com/namjameseu',
  resumeUrl: '/James-Christian-Pineda-Resume.txt',
  summary:
    'I build practical web applications across React, Laravel, Node.js, REST APIs, and MySQL, with hands-on experience supporting releases, database migrations, deployments, and production workflows.',
  highlights: [
    'Production-minded full-stack development across frontend, backend, and database layers',
    'Comfortable with staging releases, migrations, rollback support, and support workflows',
    'Strong React, Laravel, Node.js, REST API, and MySQL delivery foundation',
    'Cum Laude B.S. Information Technology graduate with team leadership experience',
  ],
  experience: [
    {
      company: 'Shore360, Inc.',
      role: 'Full-Stack Developer',
      period: 'Feb 2024 - Present',
      location: 'Clark, Pampanga, Philippines',
      achievements: [
        'Developed and maintained full-stack features that support client and staff management workflows.',
        'Built and supported React, Node.js, MySQL, and REST API features used in day-to-day operations.',
        'Handled staging and production deployments, database migrations, release checks, and rollback support.',
      ],
    },
    {
      company: 'Capstone/Thesis Project',
      role: 'Team Leader / Frontend Mobile Developer',
      period: 'May 2023 - Dec 2023',
      location: 'Pampanga State University',
      achievements: [
        'Led a capstone team through planning, task coordination, risk tracking, and delivery milestones.',
        'Built React Native mobile frontend features while coordinating progress across the team.',
      ],
    },
    {
      company: 'VXI',
      role: 'Intern',
      period: 'Jan 2020',
      location: 'Clark, Pampanga, Philippines',
      achievements: ['Assisted applicants with digital registration, ensuring smooth onboarding.'],
    },
  ],
  education: [
    {
      school: 'Pampanga State University - Mexico Campus',
      degree: 'B.S. in Information Technology',
      period: '2020 - 2024',
      honor: 'Cum Laude',
    },
    {
      school: 'Systems Plus College Foundation - Miranda Branch',
      degree: 'Senior High School',
      period: '2018 - 2020',
      honor: 'With High Honors',
    },
    {
      school: 'Don Jesus Gonzales High School',
      degree: 'Junior High School',
      period: '2014 - 2018',
      honor: 'With Honors',
    },
  ],
}

const fallbackSkills = {
  Frontend: [
    { name: 'React.js', proficiency: 92 },
    { name: 'Next.js', proficiency: 82 },
    { name: 'TypeScript', proficiency: 86 },
    { name: 'Tailwind CSS', proficiency: 88 },
    { name: 'Material UI', proficiency: 82 },
    { name: 'Ant Design', proficiency: 80 },
  ],
  Backend: [
    { name: 'Laravel', proficiency: 86 },
    { name: 'AdonisJS', proficiency: 78 },
    { name: 'PHP', proficiency: 84 },
    { name: 'Node.js', proficiency: 88 },
    { name: 'REST APIs', proficiency: 90 },
  ],
  Database: [
    { name: 'MySQL', proficiency: 88 },
    { name: 'PostgreSQL', proficiency: 76 },
  ],
  'Tools & DevOps': [
    { name: 'Git', proficiency: 88 },
    { name: 'Bitbucket', proficiency: 84 },
    { name: 'GitHub', proficiency: 86 },
    { name: 'Jira', proficiency: 80 },
    { name: 'CI/CD Workflows', proficiency: 82 },
    { name: 'AWS', proficiency: 74 },
    { name: 'Cursor & ChatGPT', proficiency: 90 },
  ],
}

const fallbackProjects = [
  {
    title: 'MyShore Platform Contributions',
    description:
      'Contributed full-stack features for client and staff management workflows, including operational support, database changes, and release coordination for a business platform.',
    impact: 'Supported real production workflows across client, staff, database, and deployment areas.',
    tech_stack: ['React.js', 'Node.js', 'MySQL', 'REST APIs', 'CI/CD'],
    featured: true,
  },
  {
    title: 'Full-Stack Portfolio API',
    description:
      'Built a Laravel and MySQL API for profile data, categorized skills, project records, and validated contact form submissions.',
    impact: 'Turns static portfolio content into API-backed, maintainable data.',
    tech_stack: ['Laravel', 'PHP', 'MySQL', 'REST APIs'],
    featured: true,
  },
  {
    title: 'Capstone Mobile Application',
    description:
      'Led a university capstone team while building mobile frontend features and managing delivery progress, risks, and milestones.',
    impact: 'Combined hands-on React Native development with team delivery leadership.',
    tech_stack: ['React Native', 'Project Leadership', 'Frontend Development'],
    featured: false,
  },
]

const credibilitySignals = [
  'Available for full-stack roles and project work',
  '2+ years building and supporting production workflows',
  'React + Laravel + Node + MySQL delivery stack',
  'Release, migration, and production support experience',
]

const proofPoints = [
  { value: '2+', label: 'Years Experience' },
  { value: '4', label: 'Core Stacks' },
  { value: '24/7', label: 'Support Mindset' },
]

const skillGroupNotes = {
  Frontend: 'Interfaces, component workflows, and responsive product screens.',
  Backend: 'APIs, server-side workflows, validation, and integrations.',
  Database: 'Schema changes, queries, migrations, and relational data modeling.',
  'Tools & DevOps': 'Version control, release support, deployment checks, and AI-assisted delivery.',
}

const initialContactForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function App() {
  const [profile, setProfile] = useState(fallbackProfile)
  const [skills, setSkills] = useState(fallbackSkills)
  const [projects, setProjects] = useState(fallbackProjects)
  const [isLoading, setIsLoading] = useState(true)
  const [contactForm, setContactForm] = useState(initialContactForm)

  useEffect(() => {
    const loadPortfolioData = async () => {
      if (!API_BASE_URL) {
        setIsLoading(false)
        return
      }

      try {
        const [profileResponse, skillsResponse, projectsResponse] = await Promise.all([
          fetch(`${API_BASE_URL}/profile`),
          fetch(`${API_BASE_URL}/skills`),
          fetch(`${API_BASE_URL}/projects`),
        ])

        if (profileResponse.ok) {
          setProfile(await profileResponse.json())
        }

        if (skillsResponse.ok) {
          setSkills(await skillsResponse.json())
        }

        if (projectsResponse.ok) {
          setProjects(await projectsResponse.json())
        }
      } catch {
        // Fallback content remains visible when the optional API is unavailable.
      } finally {
        setIsLoading(false)
      }
    }

    loadPortfolioData()
  }, [])

  const skillGroups = useMemo(() => Object.entries(skills), [skills])
  const email = profile.email ?? fallbackProfile.email
  const github = profile.github ?? fallbackProfile.github
  const linkedin = profile.linkedin ?? fallbackProfile.linkedin
  const resumeUrl = profile.resumeUrl ?? fallbackProfile.resumeUrl

  const handleContactChange = (event) => {
    const { name, value } = event.target
    setContactForm((currentForm) => ({ ...currentForm, [name]: value }))
  }

  const socialLinks = [
    { label: 'LinkedIn', href: linkedin },
    { label: 'GitHub', href: github },
    { label: 'Email', href: `mailto:${email}` },
    { label: 'Resume', href: resumeUrl, download: true },
  ].filter((link) => Boolean(link.href))

  const contactComposeHref = useMemo(() => {
    const subject = encodeURIComponent(contactForm.subject || 'Portfolio contact')
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\n${contactForm.message}`,
    )

    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${subject}&body=${body}`
  }, [contactForm, email])

  const handleContactSubmit = (event) => {
    event.preventDefault()
    window.open(contactComposeHref, '_blank', 'noopener,noreferrer')
  }

  return (
    <main id="main-content" className="relative min-h-screen overflow-hidden">
      <a href="#top" className="skip-link">
        Skip to portfolio
      </a>
      <div className="aurora" aria-hidden="true" />
      <nav
        aria-label="Portfolio navigation"
        className="sticky top-0 z-20 mx-auto flex max-w-7xl items-center justify-between border-b border-white/10 bg-slate-950/60 px-6 py-5 text-sm text-slate-300 backdrop-blur-xl lg:px-8"
      >
        <a href="#top" className="font-semibold tracking-[0.35em] text-white" aria-label="Back to top">
          JCP
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {['skills', 'experience', 'projects', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} className="capitalize transition hover:text-purple-300">
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section id="top" className="section-reveal mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-20">
        <div className="relative z-10">
          <p className="mb-4 inline-flex rounded-full border border-purple-300/30 bg-purple-300/10 px-4 py-2 text-sm font-medium text-purple-100 shadow-lg shadow-purple-950/20">
            Full-stack developer based in {profile.location}
          </p>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-3xl text-2xl font-semibold leading-tight text-purple-100 sm:text-3xl">
            Building reliable web apps from polished interfaces to production-ready APIs.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-purple-300 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-purple-950/30 transition hover:-translate-y-0.5 hover:bg-purple-200"
            >
              Work With Me
            </a>
            <a
              href={resumeUrl}
              download
              className="rounded-full bg-slate-100 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-white"
            >
              Download Resume
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-500 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-purple-300 hover:text-purple-100"
            >
              View LinkedIn
            </a>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2" aria-label="Portfolio credibility signals">
            {credibilitySignals.map((signal) => (
              <SignalCard key={signal}>{signal}</SignalCard>
            ))}
          </div>
        </div>

        <aside className="float-slow relative rounded-[2rem] border border-purple-200/20 bg-white/[0.07] p-6 shadow-2xl shadow-purple-950/30 backdrop-blur">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-purple-300/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
            <img
              src="/profile-photo.jpg"
              alt={`${profile.name} graduation portrait`}
              className="mx-auto h-48 w-48 rounded-full border border-purple-200/40 bg-slate-900 object-cover object-[center_18%] shadow-2xl shadow-purple-950/40"
            />
            <div className="mt-5 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-purple-100">{profile.role}</p>
              <p className="mt-2 text-sm text-slate-400">React, Laravel, Node.js, REST APIs, and MySQL</p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {proofPoints.map(({ value, label }) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-3">
                  <p className="text-xl font-black text-purple-100">{value}</p>
                  <p className="mt-1 text-xs text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-purple-100">Highlights</p>
          <div className="mt-4 grid gap-4">
            {profile.highlights?.map((highlight) => (
              <div key={highlight} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-slate-200 transition hover:-translate-y-0.5 hover:border-purple-300/40">
                {highlight}
              </div>
            ))}
          </div>
          {isLoading && <p className="mt-5 text-sm text-slate-400">Loading API content...</p>}
        </aside>
      </section>

      <Section
        id="skills"
        eyebrow="Technical Stack"
        title="Skills I Use To Build Full-Stack Products"
        description="A practical stack for product screens, API workflows, database-backed features, and reliable releases."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map(([category, items]) => (
            <article key={category} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 transition hover:-translate-y-1 hover:border-purple-300/40 hover:bg-white/[0.07]">
              <h3 className="text-xl font-bold text-white">{category}</h3>
              <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">{skillGroupNotes[category]}</p>
              <div className="mt-5 space-y-4">
                {items.map((skill) => (
                  <div key={`${category}-${skill.name}`}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-purple-100">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-purple-300 to-slate-200"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="experience"
        eyebrow="Experience"
        title="Practical Delivery Across Frontend, Backend, And Releases"
        description="Experience shaped by building features, supporting operations, and helping releases move from staging to production."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {profile.experience?.map((item) => (
            <article key={`${item.company}-${item.role}`} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 transition hover:-translate-y-1 hover:border-purple-300/40 hover:bg-white/[0.07]">
              <p className="text-sm font-semibold text-purple-100">{item.period}</p>
              <h3 className="mt-2 text-2xl font-bold text-white">{item.role}</h3>
              <p className="mt-1 text-slate-300">
                {item.company} · {item.location}
              </p>
              <ul className="mt-5 space-y-3 text-slate-300">
                {item.achievements?.map((achievement) => (
                  <li key={achievement} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-purple-300" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Projects"
        title="Selected Work And Build Experience"
        description="A mix of production contributions, API work, and academic delivery that shows how I approach real product work."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="flex rounded-3xl border border-white/10 bg-white/[0.05] p-6 transition hover:-translate-y-1 hover:border-purple-300/40 hover:bg-white/[0.07]">
              <div className="flex flex-1 flex-col">
                {project.featured && (
                  <span className="mb-4 w-fit rounded-full bg-purple-300/10 px-3 py-1 text-xs font-semibold text-purple-100">
                    Featured
                  </span>
                )}
                <ProjectPreview title={project.title} techStack={project.tech_stack ?? []} />
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-slate-300">{project.description}</p>
                {project.impact && (
                  <p className="mt-5 rounded-2xl border border-purple-300/20 bg-purple-300/[0.08] p-4 text-sm font-medium leading-6 text-purple-50">
                    <span className="block text-xs uppercase tracking-[0.25em] text-purple-200/80">Impact</span>
                    <span className="mt-2 block">{project.impact}</span>
                  </p>
                )}
                <div className="mt-6 flex flex-wrap gap-2">
                  {(project.tech_stack ?? []).map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.demo_url && (
                    <a href={project.demo_url} target="_blank" rel="noreferrer" className="text-sm font-semibold text-purple-100 hover:text-white">
                      Live Demo
                    </a>
                  )}
                  {project.source_url && (
                    <a href={project.source_url} target="_blank" rel="noreferrer" className="text-sm font-semibold text-purple-100 hover:text-white">
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="education"
        eyebrow="Education"
        title="Academic Foundation"
        description="Formal IT training backed by academic recognition and practical capstone leadership."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {profile.education?.map((item) => (
            <article key={item.school} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
              <p className="text-sm font-semibold text-purple-100">{item.period}</p>
              <h3 className="mt-2 text-2xl font-bold text-white">{item.degree}</h3>
              <p className="mt-2 text-slate-300">{item.school}</p>
              {item.honor && <p className="mt-4 font-semibold text-purple-100">{item.honor}</p>}
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="Let's Build Something Useful"
        description="Reach out for full-stack development, API work, Laravel or React features, database-backed workflows, or production support."
      >
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
            <h3 className="text-2xl font-bold text-white">Available for full-stack work</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Send a message for React, Laravel, Node.js, MySQL, API, deployment, or production support opportunities.
            </p>
            <a className="mt-6 inline-flex text-purple-100 hover:text-white" href={`mailto:${email}`}>
              {email}
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <SocialLink key={link.label} {...link} />
              ))}
            </div>
          </div>

          <form
            className="rounded-3xl border border-white/10 bg-white/[0.05] p-6"
            aria-label="Contact form"
            onSubmit={handleContactSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" value={contactForm.name} onChange={handleContactChange} autoComplete="name" />
              <Field label="Email" name="email" type="email" value={contactForm.email} onChange={handleContactChange} autoComplete="email" />
            </div>
            <Field label="Subject" name="subject" value={contactForm.subject} onChange={handleContactChange} />
            <Field label="Message" name="message" value={contactForm.message} onChange={handleContactChange} multiline />
            <button
              type="submit"
              className="mt-5 inline-flex rounded-full bg-purple-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-purple-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </Section>
    </main>
  )
}

function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="section-reveal mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-100">{eyebrow}</p>
      <h2 className="mt-3 max-w-4xl text-3xl font-black tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">{description}</p>}
      <div className="mt-8">{children}</div>
    </section>
  )
}

function SignalCard({ children }) {
  return (
    <div className="rounded-2xl border border-purple-300/20 bg-purple-300/[0.08] px-4 py-3 text-sm font-semibold text-slate-100 shadow-lg shadow-purple-950/10 backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-200/50">
      {children}
    </div>
  )
}

function ProjectPreview({ title, techStack }) {
  const primaryTech = techStack.slice(0, 3)

  return (
    <div className="project-preview mb-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-4">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
      </div>
      <div className="mt-5 grid gap-3">
        <div className="h-3 w-3/4 rounded-full bg-purple-200/70" />
        <div className="h-3 w-1/2 rounded-full bg-white/20" />
        <div className="grid grid-cols-3 gap-2 pt-2">
          {primaryTech.map((tech) => (
            <div key={`${title}-${tech}`} className="rounded-xl border border-purple-300/20 bg-purple-300/10 p-3">
              <div className="h-2 rounded-full bg-purple-200/70" />
              <p className="mt-2 truncate text-[10px] font-semibold text-slate-100">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SocialLink({ label, href, download = false }) {
  return (
    <a
      href={href}
      download={download || undefined}
      target={download || href.startsWith('mailto:') ? undefined : '_blank'}
      rel={download || href.startsWith('mailto:') ? undefined : 'noreferrer'}
      className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-purple-300/50 hover:text-purple-100"
    >
      {label}
    </a>
  )
}

function Field({ label, name, value, onChange, type = 'text', multiline = false, autoComplete }) {
  const fieldId = `contact-${name}`
  const inputClasses =
    'mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-purple-300'

  return (
    <label htmlFor={fieldId} className="mt-4 block text-sm font-medium text-slate-200">
      {label}
      {multiline ? (
        <textarea
          id={fieldId}
          required
          className={`${inputClasses} min-h-36 resize-y`}
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          id={fieldId}
          required
          className={inputClasses}
          name={name}
          type={type}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
        />
      )}
    </label>
  )
}

export default App
