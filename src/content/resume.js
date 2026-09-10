/**
 * Résumé content, per the normalized résumé data doc.
 *
 * `dates` / `place` render in the left rail of each experience row;
 * `summary` paragraphs and `bullets` render in the right.
 * Inline HTML is allowed in `summary` and `bullets` for links and emphasis.
 *
 * Note: the Redbone Group role (May 2026 – Present) is intentionally absent —
 * it isn't in the current résumé and the mockup doesn't show it. See the
 * handoff notes; add it here when ready.
 */
export default {
  // Standfirst under the page title. Omit or set to "" to hide the line.
  availability: "Open to contract or full-time UX roles.",

  experience: [
    {
      dates: "Aug 2024 – Apr 2026",
      place: "Sandpoint, Idaho",
      title: "Associate, Davillier Law Group",
      summary: [
        "A career detour into law: a paralegal, then an associate upon passing the Idaho bar. Estate planning, legal research, litigation, and appellate brief writing."
      ],
      bullets: []
    },
    {
      dates: "June 2020 – Nov 2023",
      place: "San Jose, Calif.",
      title: "Senior Interaction Designer, Cisco Systems",
      summary: [
        "At Cisco, I worked on two products: Managed Services Accelerator, a SaaS product for managing network services, and, since 2022, a network automation product. I collaborated cross-functionally with product managers, product owners, and stakeholders to plan and develop design features."
      ],
      bullets: [
        "Designed a significant portion of the MVP for a SaaS cross-domain automation product: competitive review of comparable products, prototyped main pages and workflows, collaborated on user testing",
        "Prepared user journeys, conceptual diagrams, wireframes, high-fidelity UI mockups, and prototypes",
        "Produced annotated design specs and worked closely with engineers throughout the development process"
      ]
    },
    {
      dates: "Feb 2018 – May 2020",
      place: "San Mateo, Calif.",
      title: "Senior Staff Designer, SiFive",
      summary: [
        "At SiFive, I was UX designer for our SaaS products, primarily <a href=\"/portfolio/sifive/\">Core Designer</a>, web-based software for configuring microprocessor cores, and <a href=\"/portfolio/sifive/#chip\">Chip Designer</a>, a cloud service for assembling components of silicon chips. Core Designer is now used by customers at Qualcomm, Intel, and other well-known companies.",
        "I worked closely with engineers, product managers, executives, and salespeople to design products that solved our users' problems while supporting our business objectives. My activities at SiFive included user research, UI design, prototyping, visual design, and helping manage our feature roadmap."
      ],
      bullets: [
        "Served as design lead for SiFive Cloud Services and its Core Designer and Chip Designer SaaS products",
        "Design work included wireframes, prototypes, and visual design",
        "Assisted engineers by working directly in code (Styled Components, SCSS, HTML, Python/Django) to refine the user experience"
      ]
    },
    {
      dates: "Nov 2015 – Apr 2017",
      place: "Redwood City, Calif.",
      title: "Product Designer, Seneca Systems",
      summary: [
        "At Seneca Systems, a company backed by Y Combinator, Initialized Capital, and Cowboy Ventures, I was sole designer for <a href=\"/portfolio/romulus/\">Romulus</a>, a CRM for local governments. Romulus was adopted by city governments nationwide, including Chicago, Houston, Minneapolis, Oakland, Miami, and Boston.",
        "I collaborated with our CEO, CTO, salespeople, and customer-experience staff to set the product's direction. Working closely with engineers in an Agile environment, I managed our project backlog and led planning meetings and sprint retrospectives."
      ],
      bullets: [
        "Conducted user research; created wireframes, task flows, visual design",
        "Worked with developers, customer experience lead, and salespeople",
        "After delivering the app redesign, paid user count grew fivefold",
        "Wrote help documentation and copy for the company's public website"
      ]
    },
    {
      dates: "Nov 2013 – Apr 2015",
      place: "Arlington, Va.",
      title: "UX Designer/Developer, i360",
      summary: [
        "At i360, a data analysis company for political strategists, I served as a UX designer, visual designer, and front-end developer in an Agile environment. I designed and refined features on a web-based portal that handled complex functions for gathering and analyzing political data.",
        "I also designed iOS and Android user interfaces for two mobile applications: i360 Walk, which supported door-to-door canvassers, and <a href=\"/portfolio/i360-calls-mobile/\">i360 Calls</a>, part of a phone-canvassing system. Both apps were used by thousands of volunteers and were praised by i360's clients for their ease of use."
      ],
      bullets: [
        "Conducted user research; created wireframes, task flows, visual design",
        "Worked with developers, customer experience lead, and salespeople",
        "Rewrote portal HTML/CSS using an <a href=\"https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/\">Object-Oriented CSS</a> approach"
      ]
    },
    {
      dates: "May 2011 – Sept 2013",
      place: "Washington, D.C.",
      title: "Art Director &amp; Senior Editor, American Ideas Institute",
      summary: [
        "At <em>TAC</em> Magazine, in addition to editorial projects, I was responsible for design and art direction for the website and print edition. I also adapted the magazine for Kindle, producing a Kindle edition each issue, and designed the template for a weekly email newsletter.",
        "I led a redesign of the magazine's website — wireframes, design comps, HTML/CSS, and integration with a WordPress-based CMS. After the redesign, traffic increased threefold, with one month bringing more than two million page views."
      ],
      bullets: []
    },
    {
      dates: "July 2009 – May 2011",
      place: "Washington, D.C.",
      title: "Associate Editor, <em>The American Interest</em>",
      summary: [
        "My art direction duties for <em>The American Interest</em> included magazine layout, designing spreads, creating illustration concepts, and commissioning illustrations from artists.",
        "I also created wireframes and design comps for a redesign of the <em>AI</em>'s website. From this design I produced WordPress templates for the <em>AI</em>'s blogs, including Walter Russell Mead's popular “Via Meadia” blog."
      ],
      bullets: []
    },
    {
      dates: "Jan 2008 – Apr 2009",
      place: "Washington, D.C.",
      title: "Web Designer, Hanley Wood",
      summary: [
        "Hanley Wood is a media and e-commerce company focused on its family of trade publications for the building industry. At Hanley Wood, much of my work consisted of producing HTML and CSS during a transition of their online publications to the Tridion CMS. I also did design and coding work on their network of sites that sell house plans online."
      ],
      bullets: []
    }
  ],

  testimonials: [
    {
      tone: "dark",
      before: "Mark did an outstanding job as our UX, UI, do-everything guy. ",
      highlight:
        "He led the design of our mobile applications, which are considered to be among the best in class.",
      after:
        " Mark is extremely adaptable to changing circumstances. He always brings a great attitude and is extremely dependable.",
      name: "Andrew Clark",
      credit:
        "Executive Director, GenOpp; was Project Manager at i360. Source: LinkedIn recommendation"
    },
    {
      tone: "light",
      before:
        "Mark was hired to work for us primarily as an editor who was also responsible for print layout. But we soon discovered that he had a passion for improving user interfaces. ",
      highlight:
        "Mark completely reconceived and modernized our website during his tenure",
      after:
        ", introducing visual elements that are still active on the site today. A brilliant and ambitious hire, he was a pleasure to work with.",
      name: "Damir Marusic",
      credit:
        "Publisher, <em>The American Interest</em>. Source: Hired.com recommendation"
    }
  ],

  skills: [
    {
      label: "Software",
      body: "Sketch, Figma, Claude Code, Illustrator, Photoshop, Balsamiq, InDesign, InVision, Adobe Animate, OmniGraffle, Xcode, Visual Studio, Atom"
    },
    {
      label: "Skills",
      body: "Prototyping, wireframes, visual design, user research. HTML/CSS, JavaScript, Styled Components, Sass, BEM. Writing, copy-editing, proofreading."
    }
  ],

  education: [
    {
      label: "University of Missouri",
      body: "BA, Fine Arts (concentration in graphic design)"
    },
    { label: "Ave Maria School of Law", body: "JD" }
  ],

  writing: {
    intro:
      "“<a href=\"https://marknugent.tumblr.com/\">Markup</a>” is my design-focused blog. Favorite posts: an argument against <a href=\"https://marknugent.tumblr.com/post/129247361676/show-me-the-urls\">browsers truncating URLs</a>, an account of my mortifying experience as a victim of <a href=\"https://marknugent.tumblr.com/post/98203319356/linkedins-evil-ux\">LinkedIn's dark UX patterns</a>, and a defense of the design of <a href=\"https://marknugent.tumblr.com/post/154531448751/in-defense-of-apples-magic-mouse-2\">Apple's Magic Mouse</a>.",
    pieces: [
      {
        title: "A proposal for grouping fractional digits of Bitcoin",
        source: "Medium",
        url: "https://medium.com/@mark.nugent.iv/grouping-bitcoins-fractional-digits-an-idea-whose-time-has-come-22d9dad8ac51"
      },
      {
        title: "The Fight for Food Rights",
        source: "TAC",
        url: "http://www.theamericanconservative.com/articles/the-fight-for-food-rights/"
      },
      {
        title: "You Want a Statin With That?",
        source: "AI Online",
        url: "http://www.the-american-interest.com/2010/08/20/you-want-a-statin-with-that/"
      }
    ]
  }
};
