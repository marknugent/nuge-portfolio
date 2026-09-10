/**
 * Canonical project data — one entry per project, per the content model doc.
 *
 * Each project's page body is an ordered list of `beats`. A beat is one of:
 *
 *   { type: "beat" }     eyebrow + optional heading + text[] + optional images[]
 *                        `lead: true` renders the text at lead size (the
 *                        opening "Background" beat on every case study).
 *   { type: "section" }  a full-width section break: optional kicker + heading
 *   { type: "outcome" }  the red outcome band
 *
 * A beat's images are an ordered group (`images`) with a `layout`:
 *   "full"  — spans the whole grid
 *   "inset" — indented to align with the beat's text column
 *   "pair"  — two images side by side (stacks at narrow widths)
 * A beat that needs a second group with a different layout — an inset
 * wireframe followed by a full-width pair, say — adds `images2` / `layout2`.
 *
 * `years` / `company` are omitted where the record genuinely doesn't say —
 * the metadata table renders only the rows that have values.
 */

const IMG = "/images/port-page-img/";

export default [
  /* ------------------------------------------------------------------ 1 */
  {
    slug: "cisco-cda",
    tier: 1,
    title: "Cisco Cross-Domain Automation",
    category: "SaaS desktop web app",
    role: "Interaction design, conceptual design",
    company: "Cisco Systems",
    years: "2022 – 2023",
    list_description:
      "A no-code workflow tool that lets Cisco customers automate tasks across networking domains.",
    subhead: "No-code SaaS workflow tool for networking applications",
    card_image: {
      src: `${IMG}cda-workspace-zoom@2x.png`,
      alt: "Cisco Cross-Domain Automation workspace",
      position: "top left"
    },
    hero: {
      src: `${IMG}cda-workspace-zoom@2x.png`,
      alt: "The Cross-Domain Automation workspace",
      caption: "The workflow workspace"
    },
    beats: [
      {
        type: "beat",
        eyebrow: "Background",
        lead: true,
        text: [
          "I worked on a new Cisco product for automating processes across networking domains. We called the product Cross-Domain Automation and it would later launched under the name Cisco Workflows. It lets users create workflows that chain actions across disparate networking systems using a graphical builder without writing code. I was a senior interaction designer on a small team of interaction and visual designers, working closely with product managers and engineers."
        ],
        images: [
          {
            src: `${IMG}cda-personas-zoom@2x.png`,
            alt: "Personas developed for Cross-Domain Automation",
            zoom: true,
            caption: "Personas developed for the project"
          }
        ],
        layout: "inset"
      },
      {
        type: "beat",
        eyebrow: "Alignment",
        heading: "Diagrams, taxonomies, and shared concepts",
        text: [
          "Beyond core interaction design, I created conceptual diagrams, taxonomies, and other artifacts to drive alignment on users, goals, and in-product concepts.",
          "The state diagrams here cover both single-user and multi-user approval flows."
        ],
        images: [
          {
            src: `${IMG}cda-wireframe-zoom@2x.png`,
            alt: "Cross-Domain Automation wireframe",
            zoom: true
          },
          {
            src: `${IMG}cda-statediagram-zoom@2x.png`,
            alt: "State diagram covering single-user and multi-user approval flows",
            zoom: true
          }
        ],
        layout: "pair"
      },
      {
        type: "beat",
        eyebrow: "Focus",
        heading: "Designing for the network operator",
        text: [
          "My purview was on UI aimed out our network operator persona (“Tarek”), producing screens and flows for viewing, running, and monitoring workflows.",
          "I designed in Figma within Cisco's Magnetic design system and built a prototype rich enough for testers to explore freely in an unmoderated study."
        ],
        images: [
          {
            src: `${IMG}cda-wfexecution-zoom@2x.png`,
            alt: "Workflow execution view",
            zoom: true,
            caption: "Workflow execution"
          }
        ],
        layout: "inset"
      },
      {
        type: "beat",
        eyebrow: "Run views",
        heading: "Observing a workflow run",
        text: [
          "The workflow run views shown here, including a chronological timeline and a design-view overlay on the workflow's graphical representation, are examples of that UI."
        ],
        images: [
          {
            src: `${IMG}cda-timeline-zoom@2x.png`,
            alt: "Chronological timeline view of a workflow run",
            zoom: true,
            caption: "Timeline view of a workflow run"
          },
          {
            src: `${IMG}cda-designview-zoom@2x.png`,
            alt: "Design-view overlay on the workflow's graphical representation",
            zoom: true,
            caption: "Design view, overlaid on the workflow graph"
          }
        ],
        layout: "full"
      },
      {
        type: "outcome",
        text: "The prototype scored well in user testing during my time on the project: 4.4/5 satisfaction, 4.6/5 usability. I left before launch. The product shipped as “Cisco Workflows,” and a former colleague later told me the interface was praised by a partner as &ldquo;one of the best Cisco UIs&rdquo; they'd seen."
      }
    ]
  },

  /* ------------------------------------------------------------------ 2 */
  {
    slug: "sifive",
    tier: 1,
    title: "SiFive Core Designer & Chip Designer",
    category: "SaaS desktop web apps",
    role: "User research, UX/UI design, visual design, UX writing",
    company: "SiFive",
    years: "2018 – 2020",
    type_label: "Desktop web apps",
    list_description:
      "Category-defining SaaS tools for configuring CPU cores and finished microchips.",
    subhead: "SaaS applications for the semiconductor industry",
    card_image: {
      src: `${IMG}newSCD_@2x.png`,
      alt: "SiFive Core Designer",
      position: "top left"
    },
    hero: {
      src: `${IMG}newSCD_@2x.png`,
      alt: "Core Designer configurator",
      caption: "Core Designer configurator — refresh concept"
    },
    beats: [
      {
        type: "beat",
        eyebrow: "Background",
        lead: true,
        text: [
          "The CPU core market is dominated by the Intel/ARM duopoly. SiFive, a semiconductor startup, challenges that with the open-source RISC-V instruction set, which was invented by SiFive's founders as a Berkeley research project, alongside new methods for automating CPU core configuration and generation. I joined as SiFive's first product designer, working on two planned SaaS products: Core Designer, for configuring CPU cores, and Chip Designer, for designing complete microchips."
        ]
      },
      {
        type: "beat",
        eyebrow: "Research",
        heading: "Proto-personas and first concepts",
        text: [
          "After extensive discussions with CPU design engineers and prospective users, I built proto-personas and started on UI concepts for a fairly unique product involving constraints from both CPU design generally and our technology specifically. I sketched on paper, wireframed in Balsamiq, and landed on a tabbed interface with related settings grouped together.",
          "Once the team aligned on the basic pattern, I built medium-fidelity Sketch mockups and clickable InVision (later Figma) prototypes for feedback and hallway usability testing."
        ],
        images: [
          {
            src: `${IMG}wireframe-zoom2@2x.png`,
            alt: "Early Core Designer wireframe",
            zoom: true,
            caption: "Early Core Designer wireframe, Balsamiq"
          }
        ],
        layout: "inset",
        images2: [
          {
            src: `${IMG}start-page-zoom@2x.png`,
            alt: "Core Designer choose-core start page",
            zoom: true
          },
          {
            src: `${IMG}currentSCD@2x.png`,
            alt: "Core Designer configuration page",
            zoom: true
          }
        ],
        layout2: "pair"
      },
      {
        type: "beat",
        eyebrow: "Pattern",
        heading: "Begin from a standard core and iterate",
        text: [
          "Users start from a standard design pre-populated with defaults, adjust settings, then generate and download a dev kit containing the core in HDL code for simulation and development tools.",
          "The goal was to let users iterate on CPU core designs far faster than the industry norm, where customers are often limited to off-the-shelf cores or a slow, expensive custom process through sales engineers."
        ],
        images: [
          {
            src: `${IMG}scd-med-fi-zoom@2x.png`,
            alt: "Medium-fidelity Core Designer mockup",
            zoom: true,
            caption: "Medium-fidelity mockup, Sketch"
          }
        ],
        layout: "inset"
      },
      {
        type: "beat",
        eyebrow: "Launch",
        heading: "Visual design and launch",
        text: [
          "Before launch, SiFive brought in a design firm for a new brand and website; Core Designer's visual design was adapted to match, including signature per-core graphics the firm created for the start page.",
          "Core Designer launched in late 2018 and was used by companies like Intel and Qualcomm. It was also used as a sales tool that lets prospects spec and generate test cores for evaluation."
        ],
        images: [
          {
            src: `${IMG}cd2-zoom@2x.png`,
            alt: "Core Designer design view",
            zoom: true
          }
        ],
        layout: "full"
      },
      {
        type: "beat",
        eyebrow: "Iteration",
        heading: "Steady improvement, and some code",
        text: [
          "Since launch I steadily added features and improved the UI, moving to Figma as my main design and collaboration tool.  Pictured is a mockup advocating for (and specifying) a range-slider control that a developer then implemented.",
          "I also learned enough of our stack (Django, React, Styled Components) to submit my own pull requests to our codebase for UI enhancements."
        ],
        images: [
          {
            src: `${IMG}slider-zoom@2x.png`,
            alt: "Range slider mockup and specification",
            zoom: true
          }
        ],
        layout: "inset"
      },
      {
        type: "beat",
        eyebrow: "Refresh",
        heading: "A refresh concept",
        text: [
          "This is a later refinement of Core Designer's interface, with better information density, more restrained use of color, and clearer grouping of specs."
        ],
        images: [
          {
            src: `${IMG}newSCD_@2x.png`,
            alt: "Core Designer refresh concept",
            zoom: true,
            caption: "Refresh concept"
          }
        ],
        layout: "full"
      },
      {
        type: "outcome",
        text: "Core Designer launched and is in active use internally and at customers including Intel and Qualcomm, generating revenue and supporting sales."
      },
      {
        type: "section",
        kicker: "Second product — concept stage, never launched",
        heading: "Chip Designer",
        id: "chip"
      },
      {
        type: "beat",
        eyebrow: "Concept",
        lead: true,
        text: [
          "Chip Designer was a more ambitious concept: a cloud app for designing custom microchips. It remained in the concept and design stage when I left the company, but it's work I'm proud of. Same process as Core Designer to start: paper sketches, then collaborative Balsamiq wireframes."
        ],
        images: [
          {
            src: `${IMG}cd-wireframe-zoom@2x.png`,
            alt: "Chip Designer wireframes",
            zoom: true
          }
        ],
        layout: "inset"
      },
      {
        type: "beat",
        eyebrow: "Main UI",
        heading: "The chip as a document",
        text: [
          "The main UI (here, the “El Camino Real” screen) follows the pattern of apps like Xcode or Keynote: central canvas showing the chip's block diagram as the document, properties panel on the right. The difference is that the left panel holds a library of available IP blocks to add to the chip, rather than document or project navigation.",
          "The properties panel shows general chip info by default, and switches to a selected block's settings when one is chosen."
        ],
        images: [
          {
            src: `${IMG}SChD-zoom@2x.png`,
            alt: "Chip Designer main UI mockup",
            zoom: true
          }
        ],
        layout: "full"
      },
      {
        type: "beat",
        eyebrow: "Area Inspector",
        heading: "Budgeting space on the chip",
        text: [
          "The Area Inspector, shown here as a modal, is a concept for tracking how much chip space various IP blocks consume, managing that area budget is a core part of SoC design. The pattern borrows from OS disk-space utilities."
        ],
        images: [
          {
            src: `${IMG}SChD-area-zoom@2x.png`,
            alt: "Chip Designer Area Inspector mockup",
            zoom: true
          }
        ],
        layout: "full"
      }
    ]
  },

  /* ------------------------------------------------------------------ 3 */
  {
    slug: "romulus",
    tier: 1,
    title: "Romulus",
    category: "Desktop web app",
    role: "User research, UX/UI design, visual design",
    company: "Seneca Systems",
    years: "2015 – 2017",
    list_description:
      "A web-based CRM for local government, used to track citizen requests and monitor office performance.",
    subhead: "A web-based CRM for local governments",
    title_scale: "large", // short title, set at display size as in the mockup
    card_image: {
      src: `${IMG}rom-filtercd-zoom@2x.png`,
      alt: "Romulus case list",
      position: "top left"
    },
    hero: {
      src: `${IMG}rom-filtercd-zoom@2x.png`,
      alt: "Case list with filtering",
      caption: "Case list with filtering, final design"
    },
    beats: [
      {
        type: "beat",
        eyebrow: "Background",
        lead: true,
        text: [
          "I was hired by Seneca Systems to lead design for Romulus, a CRM local governments use to track citizen requests, monitor performance, and streamline workflow. An MVP was already live with paying customers when I joined. My job was to lead a 2.0-level redesign that added key features while making the product easier to use."
        ]
      },
      {
        type: "beat",
        eyebrow: "Research",
        heading: "Personas, scenarios, and a spec",
        text: [
          "I built personas and scenarios from research with actual and prospective users, then wrote and presented a full spec — since this was effectively a new product, the spec kept everyone aligned on features and served as a reference through the design process."
        ],
        images: [
          {
            src: `${IMG}rom-persona-zoom@2x.png`,
            alt: "A persona used during the design process",
            zoom: true,
            caption: "A persona used during the design process"
          }
        ],
        layout: "inset"
      },
      {
        type: "beat",
        eyebrow: "Design",
        heading: "Wireframes and task flows",
        text: [
          "I produced a large set of wireframes and task flows in consultation with our CTO, interviewing customers and gathering feedback on in-process mockups along the way.",
          "He implemented most of the app as he built it; I contributed revisions, HTML/CSS refinements, and bug fixes directly to the codebase."
        ],
        images: [
          {
            src: `${IMG}rom-wf-zoom@2x.png`,
            alt: "Romulus wireframes and task flows",
            zoom: true,
            caption: "Wireframes and task flows"
          }
        ],
        layout: "inset",
        images2: [
          {
            src: `${IMG}rom-login-zoom@2x.png`,
            alt: "Onboarding — choose-password page"
          }
        ],
        layout2: "full"
      },
      {
        type: "beat",
        eyebrow: "Detail",
        heading: "Search and notifications",
        text: [
          "Two details from the shipped product: search results across cases and contacts, and the notification settings that came out of the email and messaging work."
        ],
        images: [
          {
            src: `${IMG}rom-search-zoom@2x.png`,
            alt: "Detail: search results"
          },
          {
            src: `${IMG}rom-not-zoom@2x.png`,
            alt: "Email settings with notifications overlay",
            zoom: true
          }
        ],
        layout: "full"
      },
      {
        type: "outcome",
        text: "The redesign landed well with users, investors, and prospects — our sales team closed new customers, and VCs including Initialized Capital and Cowboy Ventures invested after our CEO's Y Combinator Demo Day presentation."
      },
      {
        type: "section",
        heading: "Iteration and additional work"
      },
      {
        type: "beat",
        eyebrow: "Refinement",
        heading: "Feedback after launch",
        text: [
          "I kept interviewing users and running usability tests after launch. When we expanded the email and messaging feature — itself a significant redesign — I used the opportunity to fix a number of defects usability testing had surfaced."
        ],
        images: [
          {
            src: `${IMG}rom-convmodal-zoom@2x.png`,
            alt: "Create Conversation modal box"
          }
        ],
        layout: "full"
      },
      {
        type: "beat",
        eyebrow: "System",
        heading: "An emerging design system",
        text: [
          "As Romulus's scope and team grew, we needed consistency and clearer guidance for new engineers. I built a Sketch library of standardized UI elements — the start of a real design system."
        ],
        images: [
          {
            src: `${IMG}rom-elements-zoom@2x.png`,
            alt: "UI elements guide",
            zoom: true
          }
        ],
        layout: "full"
      },
      {
        type: "beat",
        eyebrow: "Exploration",
        heading: "Design refresh",
        text: [
          "Later, experimental mockups explored a simpler, lighter visual language and a more economical use of color, including a rethink of the case list beyond a standard clickable data grid."
        ],
        images: [
          {
            src: `${IMG}rom-casedetail-zoom@2x.png`,
            alt: "Alternate mockup for the Case detail page",
            zoom: true
          },
          {
            src: `${IMG}rom-casemaster-zoom@2x.png`,
            alt: "Alternate mockup for the Case list page",
            zoom: true
          }
        ],
        layout: "full"
      }
    ]
  },

  /* ------------------------------------------------------------------ 4 */
  {
    slug: "i360-calls-mobile",
    tier: 1,
    title: "i360 Calls Mobile",
    category: "iOS and Android apps",
    role: "UI design, visual design",
    company: "i360",
    years: "2013 – 2015",
    list_description:
      "Native iOS and Android apps used by thousands of campaign and nonprofit volunteers to conduct phone surveys.",
    subhead: "Mobile apps used by phone-bank staff to conduct surveys",
    card_image: {
      src: `${IMG}ios-calls-iphone-zoom.png`,
      alt: "i360 Calls iPhone screens",
      position: "center top"
    },
    hero: {
      src: `${IMG}ios-calls-wireframe-zoom.png`,
      alt: "i360 Calls wireframes",
      caption: "Wireframes for the call flow"
    },
    beats: [
      {
        type: "beat",
        eyebrow: "Background",
        lead: true,
        text: [
          "i360's Predictive Dialer routed survey calls from campaigns and advocacy groups to live volunteers through a client app, where they'd administer the survey or log outcomes like wrong numbers. The existing client was desktop-only and aging — management wanted native iOS and Android apps volunteers could use on their own devices, alongside a rebuilt web client."
        ]
      },
      {
        type: "beat",
        eyebrow: "Users",
        heading: "Volunteers, not power users",
        text: [
          "Users were mostly volunteers and entry-level staff with no special expertise beyond basic web browsing. I didn't have access to target-demographic testers, but our own non-technical staff used and tested the app and gave real feedback."
        ],
        images: [
          {
            src: `${IMG}ios-calls-iphone-zoom.png`,
            alt: "i360 Calls iPhone screens",
            zoom: true,
            caption: "iPhone screens"
          }
        ],
        layout: "inset"
      },
      {
        type: "beat",
        eyebrow: "Constraints",
        heading: "Designed to be heard as much as seen",
        text: [
          "The UI had to work alongside spoken instructions and audio cues from the server, not just the screen — and with no budget for an extended design phase, I moved fast to produce wireframes, mockups, and developer guidance."
        ],
        images: [
          {
            src: `${IMG}ios-calls-ipad-zoom.png`,
            alt: "i360 Calls iPad layout",
            caption: "iPad layout"
          }
        ],
        layout: "full"
      },
      {
        type: "beat",
        eyebrow: "Delivery",
        heading: "Every phase, both platforms",
        text: [
          "I owned every phase — wireframes through iOS/Android comps, testing, and copy for prompts, labels, and error messages.",
          "Following Apple's Auto Layout guidance (this was around the iPhone 6/6+ screen-size expansion), I gave developers detailed adaptive-layout direction, aimed for platform-appropriate conventions with cross-platform consistency, and supplied all graphic assets plus detailed visual guides as development progressed."
        ],
        images: [
          {
            src: `${IMG}ios-calls-android-zoom.png`,
            alt: "i360 Calls Android screens",
            zoom: true
          },
          {
            src: `${IMG}ios-calls-markedup@2x.png`,
            alt: "Marked-up visual guide supplied to developers",
            zoom: true
          }
        ],
        layout: "pair"
      },
      {
        type: "beat",
        eyebrow: "Testing",
        heading: "Testing on real devices",
        text: [
          "I tested across a range of my own iOS devices and an Android tablet to cover different screen sizes and models."
        ],
        images: [
          {
            src: `${IMG}ios-calls-testdevices@2x.png`,
            alt: "The range of test devices used",
            caption: "Test devices"
          }
        ],
        layout: "inset"
      },
      {
        type: "outcome",
        text: "I left as the apps entered final QA, so I didn't see the initial launch reception firsthand — but former colleagues report the apps were well received, and they've since shipped to production with thousands of users."
      }
    ]
  },

  /* ------------------------------------------------------------------ 5 */
  {
    slug: "kleptocracy",
    tier: 2,
    title: "China's Kleptocracy",
    category: "Interactive infographic",
    role: "Design and production",
    company: "Hudson Institute",
    years: "2018",
    list_description:
      "An interactive infographic for the Hudson Institute's Kleptocracy Initiative, built in HTML, CSS, and JavaScript.",
    subhead:
      "Visualizing how Chinese political leaders hide wealth behind family networks and shadow businesses",
    card_image: {
      src: `${IMG}china-1-zoom2@2x.png`,
      alt: "China's Kleptocracy infographic",
      position: "center top"
    },
    // No hero: china-1 and china-2 share the infographic's own title block, so
    // a hero here would repeat it immediately above the Reflection beat.
    beats: [
      {
        type: "beat",
        eyebrow: "Background",
        lead: true,
        text: [
          "The Hudson Institute's Kleptocracy Initiative wanted an interactive infographic showing how Chinese political leaders amass fortunes and conceal them through family networks and opaque business groups. Working from materials Hudson's staff provided, I designed mockups in Sketch and built the final piece in HTML, jQuery, and CSS3 animation. I also copy-edited the accompanying articles and wrote the headline and subhead.",
          "The interactive graphic can be seen <a href=\"https://spinline.net/china/\">here</a>."
        ]
      },
      {
        // Image-only beat: the prose was cut, the picture stays in sequence.
        type: "beat",
        images: [
          {
            src: `${IMG}china-2-zoom@2x.png`,
            alt: "Detail from the China's Kleptocracy infographic",
            zoom: true,
            caption: "Detail from the published piece"
          }
        ],
        layout: "inset"
      }
    ]
  },

  /* ------------------------------------------------------------------ 6 */
  {
    slug: "beltway-nonprofit",
    tier: 2,
    title: "Beltway Nonprofit Site",
    category: "Magazine-style website",
    role: "Visual design",
    company: "ReadyMadeWeb (subcontract)",
    years: "2013",
    list_description:
      "Visual design mockups for a DC think tank's public website, produced as a subcontractor for interactive firm ReadyMadeWeb.",
    card_image: {
      src: `${IMG}cea-1-zoom.png`,
      alt: "Beltway nonprofit site",
      position: "top center"
    },
    hero: {
      src: `${IMG}cea-1-zoom@2x.png`,
      alt: "Home page mockup for the think tank's website",
      caption: "Home page mockup"
    },
    beats: [
      {
        type: "beat",
        eyebrow: "Background",
        lead: true,
        text: [
          "As a contractor for ReadyMadeWeb, I produced desktop mockups for a redesign of a DC think tank and advocacy group's website. ReadyMadeWeb had already set the information architecture and rough wireframes — my job was visual design to hand off to their Drupal developer."
        ]
      },
      {
        type: "beat",
        eyebrow: "Process",
        heading: "Styles, feedback, final comps",
        text: [
          "I designed a few different visual styles for the client to choose from, refined the one they picked based on staff feedback, and delivered final home page and article page mockups."
        ],
        images: [
          {
            src: `${IMG}cea-2-zoom@2x.png`,
            alt: "Article page mockup",
            caption: "Article page mockup"
          }
        ],
        layout: "full"
      }
    ]
  },

  /* ------------------------------------------------------------------ 8 */
  {
    slug: "sifive-logos",
    tier: 2,
    title: "TileLink & Rocket Chip Logos",
    category: "Logo design",
    role: "Visual design",
    company: "SiFive",
    years: "2018 – 2020",
    list_description:
      "Logos for two open-source semiconductor projects — TileLink, an on-chip interconnect standard, and Rocket Chip, a CPU core generator.",
    card_image: {
      src: "/images/port-panels/t-tilelink@2x.png",
      alt: "TileLink logo",
      position: "center"
    },
    hero: {
      src: "/images/port-panels/t-tilelink@2x.png",
      alt: "The TileLink logo",
      caption: "TileLink"
    },
    beats: [
      {
        type: "beat",
        eyebrow: "Background",
        lead: true,
        text: [
          "SiFive was involved in several open-source semiconductor projects. A colleague asked if I'd design logos for two of them: TileLink, a standard for interconnects between regions of a chip, and Rocket Chip, an open-source CPU core generator. I produced the logos and associated usage guides. Logo design isn't my focus, but I enjoyed it and I'm happy with how they turned out."
        ],
        images: [
          {
            src: `${IMG}tilelink-logo.png`,
            alt: "The TileLink logo — an isometric interlocking mark beside the TileLink wordmark",
            frame: "logo",
            frame_bg: "#EBEBEB" // matches the file's own ground
          },
          {
            src: `${IMG}rocket-chip-logo.png`,
            alt: "The Rocket Chip logo — a rocket inside a microchip outline, above the Rocket Chip wordmark",
            frame: "logo",
            frame_bg: "#2E2E2E" // dark variant — matches the file's own ground
          }
        ],
        layout: "pair"
      }
    ]
  },

  /* --------------------------------------------------- excluded from list */
  {
    slug: "calls-web",
    tier: 1,
    excluded: true,
    title: "i360 Calls for Web",
    category: "Desktop web application",
    role: "UX/UI design, visual design, HTML/CSS",
    company: "i360",
    years: "2013 – 2015",
    list_description:
      "A rebuilt AngularJS web client for i360's phone-survey platform, replacing an aging ASP.NET Web Forms app.",
    beats: []
  }
];
