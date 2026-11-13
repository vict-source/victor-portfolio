
const expertise = [
  {
    number: "01",
    title: "Programming & Query Languages",
    description:
      "Programming and query languages for developing data solutions, automating workflows and working with structured information.",
    skills: ["Python", "SQL", "JavaScript", "TypeScript"],
  },
  {
    number: "02",
    title: "Data Engineering & Orchestration",
    description:
      "Technologies and practices for building, transforming, scheduling and managing reliable data pipelines.",
    skills: ["Apache Airflow", "dbt", "ETL / ELT", "Data Modelling"],
  },
  {
    number: "03",
    title: "Streaming & Distributed Processing",
    description:
      "Technologies used in distributed data processing, event-driven systems and real-time data architectures.",
    skills: ["Apache Kafka", "Apache Spark", "Stream Processing", "Distributed Systems"],
  },
  {
    number: "04",
    title: "Cloud & Infrastructure",
    description:
      "Cloud platforms and infrastructure tools for deploying, managing and scaling data systems.",
    skills: ["Google Cloud Platform", "Docker", "Terraform", "Linux", "Git"],
  },
  {
    number: "05",
    title: "Databases & Data Storage",
    description:
      "Database technologies and concepts for storing, organising and managing structured data.",
    skills: ["PostgreSQL", "MySQL", "Database Design", "Normalization"],
  },
  {
    number: "06",
    title: "Data Pipeline Design & Architecture",
    description:
      "Core engineering concepts for designing maintainable, scalable and dependable data infrastructure.",
    skills: ["Data Modelling", "Pipeline Design", "Data Integration", "Workflow Automation"],
  },
]

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080f1c] text-white">

      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-12">
        <a href="#" className="text-2xl font-bold tracking-tight">
          VA<span className="text-teal-400">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
          <a href="#about" className="transition hover:text-teal-400">About</a>
          <a href="#expertise" className="transition hover:text-teal-400">Expertise</a>
          <a href="#experience" className="transition hover:text-teal-400">Experience</a>
          <a href="#approach" className="transition hover:text-teal-400">Approach</a>
          <a href="#training" className="transition hover:text-teal-400">Training & Tutoring</a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-teal-400/40 px-5 py-2.5 text-sm text-teal-300 transition hover:bg-teal-400 hover:text-gray-950"
        >
          Let's Talk ↗
        </a>
      </nav>

      {/* Hero */}
      <section className="mx-auto grid min-h-[75vh] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-12">
        <div>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-teal-400/20 bg-teal-400/5 px-4 py-2 text-xs tracking-widest text-teal-300">
            <span className="h-2 w-2 rounded-full bg-teal-400"></span>
            DATA ENGINEER
          </div>

          <p className="mb-4 text-sm tracking-[0.25em] text-gray-400">
            HELLO, I'M VICTOR ADEYANJU
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Building
            <br />
            reliable
            <br />
            <span className="text-teal-400">data systems.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-gray-400">
            I focus on data engineering, building structured data
            pipelines, transforming raw information and developing
            reliable data infrastructure. My interests include workflow
            orchestration, distributed processing, databases and cloud
            technologies.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#about"
              className="rounded-full bg-teal-400 px-7 py-3.5 text-sm font-semibold text-gray-950 transition hover:bg-teal-300"
            >
              Explore My Profile →
            </a>

            <a
              href="#contact"
              className="rounded-full border border-gray-700 px-7 py-3.5 text-sm text-white transition hover:border-teal-400"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-8 border-t border-gray-800 pt-7">
            <div>
              <p className="text-xl font-bold text-white">Python</p>
              <p className="mt-1 text-xs text-gray-500">Programming</p>
            </div>
            <div>
              <p className="text-xl font-bold text-white">SQL</p>
              <p className="mt-1 text-xs text-gray-500">Data management</p>
            </div>
            <div>
              <p className="text-xl font-bold text-white">Airflow</p>
              <p className="mt-1 text-xs text-gray-500">Orchestration</p>
            </div>
          </div>
        </div>

        {/* Profile Photograph */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[390px]">
            <div className="absolute -inset-3 rounded-3xl border border-teal-400/20"></div>

            <div className="relative h-[430px] overflow-hidden rounded-3xl border border-teal-400/20 bg-[#142b3a] sm:h-[500px]">
              <img
                src="/victor-profile.jpeg"
                alt="Victor Adeyanju"
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#080f1c] via-[#080f1c]/60 to-transparent p-7">
                <p className="text-xs tracking-widest text-teal-300">
                  DATA ENGINEER
                </p>
                <p className="mt-2 text-xl font-semibold">
                  Victor Adeyanju
                </p>
                <p className="mt-1 text-sm text-gray-300">
                  Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-gray-800 bg-[#0b1422] px-6 py-28 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 text-sm font-medium tracking-[0.25em] text-teal-400">
            01 / ABOUT ME
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Engineering
                <br />
                reliable
                <br />
                <span className="text-teal-400">data systems.</span>
              </h2>
              <div className="mt-8 h-1 w-20 rounded-full bg-teal-400"></div>
            </div>

            <div className="space-y-6 text-base leading-8 text-gray-400">
              <p className="text-lg leading-9 text-gray-200">
                I am a Data Engineer focused on building and improving
                the systems that collect, process, transform and organise
                data.
              </p>

              <p>
                My experience includes working with operational datasets,
                improving data quality, standardising records and using
                SQL transformations to prepare structured information
                for business use.
              </p>

              <p>
                I am developing my capabilities across data pipeline
                engineering, workflow orchestration, distributed
                processing, database systems and cloud infrastructure.
              </p>

              <p>
                I also enjoy sharing knowledge through beginner-friendly
                Data Engineering training and personalised Mathematics
                tutoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section
        id="expertise"
        className="border-t border-gray-800 px-6 py-28 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 text-sm font-medium tracking-[0.25em] text-teal-400">
            02 / TECHNICAL EXPERTISE
          </div>

          <div className="mb-16 max-w-2xl">
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Technologies and
              <br />
              <span className="text-teal-400">engineering foundations.</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              My technical focus covers programming, data pipelines,
              orchestration, distributed processing, databases and cloud
              infrastructure. These technologies represent my working
              tools and areas of continued technical development.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-gray-800 bg-[#0b1422] p-8 transition hover:-translate-y-1 hover:border-teal-400/40"
              >
                <p className="mb-6 text-sm font-semibold tracking-widest text-teal-400">
                  {item.number}
                </p>

                <h3 className="mb-4 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mb-6 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-gray-700 px-3 py-1.5 text-xs text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section
        id="experience"
        className="border-t border-gray-800 bg-[#0b1422] px-6 py-28 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 text-sm font-medium tracking-[0.25em] text-teal-400">
            03 / EXPERIENCE
          </div>

          <div className="mb-16 max-w-2xl">
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Professional
              <br />
              <span className="text-teal-400">experience.</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Practical experience working with operational data,
              improving data quality and preparing structured datasets.
            </p>
          </div>

          <div className="relative ml-2 space-y-14 border-l border-gray-700 pl-8">
            <div className="relative">
              <div className="absolute -left-[2.55rem] top-1 h-4 w-4 rounded-full border-4 border-[#0b1422] bg-teal-400"></div>

              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-2xl font-semibold">
                    Data Operations & Engineering
                  </h3>
                  <p className="mt-2 text-teal-400">
                    PC Place Nigeria
                  </p>
                </div>

                <span className="w-fit rounded-full border border-gray-700 px-4 py-2 text-xs text-gray-400">
                  Professional Experience
                </span>
              </div>

              <p className="mt-5 max-w-3xl leading-8 text-gray-400">
                Worked with product and operational datasets to improve
                data quality, support structured reporting and make
                business information more accessible.
              </p>

              <ul className="mt-6 max-w-3xl space-y-4 text-sm leading-7 text-gray-400">
                <li>
                  • Processed and maintained more than 500 records covering
                  product pricing, inventory, specifications and attributes.
                </li>
                <li>
                  • Cleaned and standardised datasets to improve consistency
                  and data quality across operational records.
                </li>
                <li>
                  • Used SQL transformations to prepare structured datasets
                  for inventory, pricing and performance reporting.
                </li>
                <li>
                  • Contributed to process improvements that reduced manual
                  data processing by approximately 30%.
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "SQL",
                  "Data Cleaning",
                  "Data Standardisation",
                  "Data Transformation",
                  "Operational Data",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-gray-700 px-3 py-1.5 text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Approach */}
      <section
        id="approach"
        className="border-t border-gray-800 px-6 py-28 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 text-sm font-medium tracking-[0.25em] text-teal-400">
            04 / ENGINEERING APPROACH
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
                Building
                <br />
                <span className="text-teal-400">reliable data systems.</span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-gray-400">
                Good data engineering goes beyond moving information
                between systems. It involves designing dependable
                workflows, maintaining data quality and making
                infrastructure easier to operate and scale.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  number: "01",
                  title: "Data Pipeline Development",
                  description:
                    "Building workflows that extract, transform and load data from different sources.",
                },
                {
                  number: "02",
                  title: "Data Quality & Reliability",
                  description:
                    "Creating consistent, structured datasets through validation, cleaning and transformation.",
                },
                {
                  number: "03",
                  title: "Workflow Orchestration",
                  description:
                    "Managing dependencies, scheduling processes and coordinating data workflows.",
                },
                {
                  number: "04",
                  title: "Scalable Infrastructure",
                  description:
                    "Understanding the technologies and architecture behind dependable data platforms.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="flex gap-5 rounded-2xl border border-gray-800 bg-[#0b1422] p-6"
                >
                  <span className="text-sm font-semibold text-teal-400">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training and Tutoring */}
      <section
        id="training"
        className="border-t border-gray-800 bg-[#0b1422] px-6 py-28 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 text-sm font-medium tracking-[0.25em] text-teal-400">
            05 / TRAINING & PRIVATE TUTORING
          </div>

          <div className="mb-16 max-w-2xl">
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Learn with clarity.
              <br />
              <span className="text-teal-400">Build with confidence.</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              I offer beginner-friendly Data Engineering training
              and personalised private Mathematics lessons. My
              approach focuses on breaking down complex concepts
              into clear, practical and understandable learning
              experiences.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">

            {/* Data Engineering Training */}
            <div className="rounded-2xl border border-gray-800 bg-[#080f1c] p-8 transition hover:border-teal-400/40 sm:p-10">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-400/10 text-3xl text-teal-400">
                {"</>"}
              </div>

              <p className="text-xs font-semibold tracking-widest text-teal-400">
                FOR BEGINNERS
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Data Engineering Training
              </h3>

              <p className="mt-5 text-sm leading-8 text-gray-400">
                Starting a career in Data Engineering can feel
                overwhelming. I help beginners understand the
                fundamentals, develop technical confidence and
                build a clear learning foundation.
              </p>

              <div className="mt-8">
                <p className="mb-4 text-sm font-semibold text-gray-200">
                  Learning areas
                </p>

                <ul className="space-y-3 text-sm text-gray-400">
                  {[
                    "Introduction to Data Engineering",
                    "Python programming fundamentals",
                    "SQL and relational databases",
                    "Data modelling and database concepts",
                    "ETL and ELT processes",
                    "Introduction to data pipelines",
                    "Understanding modern data technologies",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-teal-400">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-gray-800 pt-6">
                <p className="text-xs tracking-widest text-gray-500">
                  TRAINING APPROACH
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Beginner-friendly explanations, guided exercises
                  and practical learning.
                </p>
              </div>
            </div>

            {/* Mathematics Tutoring */}
            <div className="rounded-2xl border border-gray-800 bg-[#080f1c] p-8 transition hover:border-teal-400/40 sm:p-10">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-400/10 text-3xl text-teal-400">
                ∑
              </div>

              <p className="text-xs font-semibold tracking-widest text-teal-400">
                ONE-TO-ONE LEARNING
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Private Mathematics Tutoring
              </h3>

              <p className="mt-5 text-sm leading-8 text-gray-400">
                Personalised Mathematics lessons designed around
                each learner's academic needs, current understanding
                and learning objectives.
              </p>

              <div className="mt-8">
                <p className="mb-4 text-sm font-semibold text-gray-200">
                  Learning areas
                </p>

                <ul className="space-y-3 text-sm text-gray-400">
                  {[
                    "Algebra and foundational Mathematics",
                    "Calculus",
                    "Statistics and Probability",
                    "Trigonometry",
                    "Further Mathematics",
                    "Quantitative reasoning",
                    "Problem-solving and examination preparation",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-teal-400">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-gray-800 pt-6">
                <p className="text-xs tracking-widest text-gray-500">
                  TEACHING APPROACH
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Individual attention, simplified explanations,
                  structured lessons and practice exercises.
                </p>
              </div>
            </div>
          </div>

          {/* Training CTA */}
          <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-teal-400/20 bg-teal-400/5 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h3 className="text-xl font-semibold">
                Ready to start learning?
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-400">
                Get in touch to discuss beginner Data Engineering
                training or personalised Mathematics tutoring.
              </p>
            </div>

            <a
              href="#contact"
              className="shrink-0 rounded-full bg-teal-400 px-7 py-3.5 text-sm font-semibold text-gray-950 transition hover:bg-teal-300"
            >
              Enquire About Classes ↗
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-gray-800 px-6 py-28 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 text-sm font-medium tracking-[0.25em] text-teal-400">
            06 / CONTACT
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
                Let's build
                <br />
                <span className="text-teal-400">something reliable.</span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-gray-400">
                Interested in Data Engineering opportunities,
                technical collaboration, beginner training or
                private Mathematics tutoring? Feel free to get in touch.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:victoradeyanju036@gmail.com"
                className="flex items-center justify-between rounded-2xl border border-gray-800 bg-[#0b1422] p-6 transition hover:border-teal-400/50"
              >
                <div>
                  <p className="text-xs tracking-widest text-gray-500">
                    EMAIL
                  </p>
                  <p className="mt-2 text-base font-medium text-white">
                     victoradeyanju036@gmail.com
                  </p>
                </div>
                <span className="text-xl text-teal-400">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/victor-adeyanju-b81b3729a/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-gray-800 bg-[#0b1422] p-6 transition hover:border-teal-400/50"
              >
                <div>
                  <p className="text-xs tracking-widest text-gray-500">
                    LINKEDIN
                  </p>
                  <p className="mt-2 text-base font-medium text-white">
                    Connect with me
                  </p>
                </div>
                <span className="text-xl text-teal-400">↗</span>
              </a>

              <a
                href="https://github.com/vict-source"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-gray-800 bg-[#0b1422] p-6 transition hover:border-teal-400/50"
              >
                <div>
                  <p className="text-xs tracking-widest text-gray-500">
                    GITHUB
                  </p>
                  <p className="mt-2 text-base font-medium text-white">
                    Explore my GitHub
                  </p>
                </div>
                <span className="text-xl text-teal-400">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Victor Adeyanju. All rights reserved.
          </p>
          <p>Designed with purpose. Built around data.</p>
        </div>
      </footer>
    </main>
  )
}

export default App
