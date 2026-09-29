
document.addEventListener('DOMContentLoaded', () => {
  const skillsData = {
    technical: [
      {
        id: 'python',
        name: 'Python',
        level: 'Expert',
        progress: 95,
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>`,
        subtitle: 'Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn',
        exp: '1+ Years Exp'
      },
      {
        id: 'sql',
        name: 'SQL',
        level: 'Expert',
        progress: 95,
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
        subtitle: 'PostgreSQL, BigQuery, Snowflake, Window Funcs, CTEs',
        exp: 'Daily Driver'
      },
      {
        id: 'powerbi',
        name: 'Power BI',
        level: 'Expert',
        progress: 92,
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
        subtitle: 'DAX, Power Query, Data Modeling, Row-Level Security',
        exp: 'Certified PL-300'
      },
      {
        id: 'excel',
        name: 'Advanced Excel',
        level: 'Expert',
        progress: 95,
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="8" y1="13" x2="16" y2="13"></line><line x1="8" y1="17" x2="16" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
        subtitle: 'XLOOKUP, Power Pivot, VBA/Macros, Financial Models',
        exp: 'Financial Modeling'
      },
      {
        id: 'tableau',
        name: 'Tableau & Looker',
        level: 'Advanced',
        progress: 98,
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
        subtitle: 'Interactive Cross-Filtering, Storytelling, Heat Maps, Geo-Spatial',
        exp: 'Executive Reporting'
      },
      {
        id: 'data-modeling',
        name: 'Data Warehousing',
        level: 'Advanced',
        progress: 95,
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
        subtitle: 'Star Schema, Snowflake Schema, DBT, Normalization, Cloud DW',
        exp: 'Scalable Architecture'
      },
      {
        id: 'stats',
        name: 'Hypothesis & Stats',
        level: 'Proficient',
        progress: 90,
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>`,
        subtitle: 'A/B Regression, Confidence Intervals, ANOVA, Churn Estimation',
        exp: 'Applied Analytics'
      },
      {
        id: 'etl',
        name: 'ETL & Data Cleaning',
        level: 'Advanced',
        progress: 90,
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>`,
        subtitle: 'Automated Pipelines, Airflow, Missing Value Handling, Validation',
        exp: 'Pipeline Automation'
      }
    ],
    business: [
      {
        id: 'biz-analysis',
        name: 'Business Analysis',
        level: 'Expert',
        progress: 95,
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>`,
        subtitle: 'Process mapping, root cause analysis, ROI modeling, bottleneck isolation',
        exp: 'Strategic Focus'
      },
      {
        id: 'kpi-frameworks',
        name: 'KPI Frameworks',
        level: 'Expert',
        progress: 92,
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
        subtitle: 'Executive scorecards, ARR/MRR health metrics, unit economics, CLV',
        exp: 'C-Suite Ready'
      },
      {
        id: 'storytelling',
        name: 'Data Storytelling',
        level: 'Expert',
        progress: 95,
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
        subtitle: 'Converting quantitative findings into compelling, actionable business narratives',
        exp: 'High Impact'
      },
      {
        id: 'stakeholder',
        name: 'Stakeholder Alignment',
        level: 'Advanced',
        progress: 90,
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
        subtitle: 'Bridging technical engineering workflows and non-technical business leaders',
        exp: 'Cross-Functional'
      },
      {
        id: 'decision-making',
        name: 'Data-Driven Decisions',
        level: 'Expert',
        progress: 94,
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
        subtitle: 'Evidence-backed strategic roadmaps, cost optimization, risk reduction',
        exp: 'Proven Track Record'
      },
      {
        id: 'reporting',
        name: 'Executive Reporting',
        level: 'Expert',
        progress: 92,
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>`,
        subtitle: 'Automated periodic decks, variance tracking, quarterly investor updates',
        exp: 'Leadership Decks'
      },
      {
        id: 'problem-solving',
        name: 'Critical Problem Solving',
        level: 'Expert',
        progress: 96,
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path></svg>`,
        subtitle: 'Resolving multi-variable enterprise bottlenecks with logical clarity',
        exp: 'Analytical Focus'
      },
      {
        id: 'requirements',
        name: 'Requirements Gathering',
        level: 'Advanced',
        progress: 92,
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`,
        subtitle: 'User story definitions, scope prioritization, analytics scoping & roadmapping',
        exp: 'Agile Delivery'
      }
    ]
  };

  // Certifications Data
  const certificationsData = [
    {
      id: 'google-analytics',
      issuer: 'Route',
      badgeClass: 'Route',
      title: 'Data Analysis Diploma Certificate',
      date: '   May 2026 • In Progress',
      skills: ['Python', 'Machine Learning', 'Statistical Analysis', 'Predictive Modeling'],
      desc: 'Comprehensive training in end-to-end data pipelines, regression models, statistical hypothesis testing, and production Python scripts for predictive.',
      image: './assets/images/Data Analysis Diploma Certificate.png',
      verifyUrl: ''
    },
  ];

  // Projects / Analytical Case Studies Data
  const projectsData = [
    {
      id: 'Breadfast Executive E-Commerce & Product Intelligence Dashboard',
      tags: ['POWER BI', 'DAX', 'HTML5 & CSS3', 'Status'],
      title: 'Breadfast Executive E-Commerce & Product Intelligence Dashboard',
      leadDesc: 'An enterprise-grade, two-page interactive Business Intelligence portal designed for Breadfast (Egypt"s leading quick-commerce & on-demand grocery delivery platform) The project moves beyond native Power BI visuals by incorporating custom HTML5, CSS3 @keyframes animations, and dynamic SVG graphics to deliver an interactive web-app experience adhering strictly to Breadfast s corporate visual identity (#AA0082 Berry and #FDF1E7 Warm Blush)..',
     businessObjective: '1-High-Level Revenue Health: What are the company-wide sales, profit margins, completed orders, and active customer counts?<br>2-Regional Expansion & Fulfillment: Which geographical regions drive revenue, and how is order delivery speed distributed (Same Day vs Express vs Standard)?<br>3-Product & Sub-Category Profitability: Which product lines generate the highest profit margins, and which sub-categories are loss-makers?<br>4-Unit Economics: What is the Average Order Value (AOV), Profit per Order, and average Basket Size across customer segments?',
    keyFindings: 'Total Sales: $2.30M<br>Total Profit: $286K (12.4% Overall Profit Margin)<br>Total Orders: 9,994 Completed Orders<br>Total Quantity Sold: 38K Units<br>Active Customer Base: 793 Unique Customers<br>Catalog Coverage: 1,862 Active SKUs',
      tools: [ 'Power BI', 'Excel / DAX', 'HTML5 & CSS3', 'Status'],
      image: 'assets/images/project.PNG',
      badge: 'LIVE DASHBOARD',
      githubUrl: 'https://github.com/mostafakaram893/breadfast-retail-intelligence-dashboard',
      demoUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNWIwMTFlZWItZjVhYS00MDY3LTlhYWYtY2RkYjcwMTI5NjNkIiwidCI6IjI1Y2UwMjYxLWJiZDYtNDljZC1hMWUyLTU0MjYwODg2ZDE1OSJ9',
      fullCaseStudy: {
        architecture: 'PostgreSQL database ingestion -> Automated Python data validation & cleaning scripts -> Power BI Star Schema Model with 45+ custom DAX measures.',
        impactMetric2: '-95% Reporting Cycle Time',
        impactMetric3: '100% Audit Compliance'
      }
    },
    {
      id: 'university-management-system',
      tags: ['Draw.io', 'SQL Server', 'T-SQL', 'Power BI'],
      title: ' University Management & Academic Analytics System',
      leadDesc: 'An end-to-end relational database design, implementation, and business intelligence reporting project for an enterprise academic institution. This project covers conceptual data modeling (ERD), a normalized relational database schema (DDL & DML in T-SQL), and an executive 3-page interactive Power BI dashboard.',
      businessObjective: 'Pinpoint exact lifecycle drop-off milestones before renewal expiration. Identify early friction patterns across feature adoption metrics.',
      keyFindings: 'Decreased quarterly churn by 18% by isolating at-risk usage dips 60 days prior to contract renewal, pinpointing 4 friction touchpoints in onboarding.',
      tools:  ['Draw.io', 'SQL Server', 'T-SQL', 'Power BI'],
      image: 'assets/images/project2.PNG',
      badge: 'PREDICTIVE MODEL',
      githubUrl: 'https://github.com/mostafakaram893/university-management-system',
      demoUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYzQ4ZjQyNGUtYWI4MC00NGVmLTljOWQtNTQxODdhZjBlMTE1IiwidCI6IjI1Y2UwMjYxLWJiZDYtNDljZC1hMWUyLTU0MjYwODg2ZDE1OSJ9',
      fullCaseStudy: {
        dataset: '850,000 anonymized SaaS user activity logs, session frequencies, and contract renewal timelines.',
  architecture: 'Conceptual Modeling (ERD): Designed with Draw.io, establishing entity boundaries, cardinality constraints, and weak/identifying entity sets.<br>Relational Implementation (SQL Server): 13 normalized tables adhering to 3NF/BCNF standards with full referential integrity and domain constraints.<br>Business Intelligence & Reporting: Power BI Desktop (.pbix) report delivering academic, faculty, research, and campus resource insights.',
        impactMetric3: '+24% Feature Engagement'
      }
    },

    {
      id: ' Fluentive — Digital Marketing & Lead Conversion Intelligence Dashboard',
      tags: ['POWER BI', 'DAX', 'Power Query (ETL)'],
      title: ' Fluentive — Digital Marketing & Lead Conversion Intelligence Dashboard',
      leadDesc: 'An executive digital marketing performance and lead generation analytics dashboard developed using Microsoft Power BI and DAX. This project models end-to-end sales funnel performance, evaluating multi-channel campaign ROI, lead acquisition costs, and sales team conversion efficiency.',
businessObjective: 'Lead Status Breakdown (Donut/Pie Chart): Real-time segmentation by status (Converted, Follow Up, Not Interested).<br>Sales Representative Performance (Bar Chart): Tracking lead handling volume and conversion ratios per sales rep.<br>Platform Acquisition (Clustered Bar Chart): Comparative acquisition volume between Instagram (IG) and Facebook (FB).<br>Campaign Performance (Column Chart): Comparing total leads versus conversions by individual campaign.<br>Interactive Multi-Level Slicers: Dynamic slicing by Campaign Name, Date, Study Level, and Delivery Mode (Online vs. Offline).',
    keyFindings: 'Total Leads: Aggregate volume of incoming marketing leads across all active channels.<br>Total Converted: Number of successfully converted paying clients.<br>Conversion Rate (%): Lead-to-customer conversion efficiency.<br>Cost Per Lead (CPL): Marketing acquisition spend efficiency per acquired lead.<br>Total Budget: Total capital allocated across social advertising campaigns.',
      tools: ['POWER BI', 'DAX', 'Power Query (ETL)'],
      image: 'assets/images/project3.png',
      badge: 'LIVE DASHBOARD',
      githubUrl: 'https://github.com/mostafakaram893/fluentive-marketing-analytics#-repository-structure',
      demoUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYjIxOWI4ZTctOWI5MC00NzI5LTljYjUtYzA4MmJmNjBlM2I4IiwidCI6IjI1Y2UwMjYxLWJiZDYtNDljZC1hMWUyLTU0MjYwODg2ZDE1OSJ9',
      fullCaseStudy: {
       architecture: 'BI Tool: Microsoft Power BI Desktop<br>Data Modeling: Power Query (ETL), DAX measures<br>Data Source: CRM Lead Tracking & Campaign Performance Datasets',
        impactMetric2: '-95% Reporting Cycle Time',
        impactMetric3: '100% Audit Compliance'
      }
    },
    {
      id: 'IMDb Movie Database & Box Office Analytics Dashboard',
      tags: ['POWER BI', 'DAX', 'Power Query (ETL)'],
      title: 'IMDb Movie Database & Box Office Analytics Dashboard',
      leadDesc: 'An interactive Power BI business intelligence dashboard providing deep exploratory data analysis on the global film industry using the IMDb Movie Database. The project investigates box office gross revenues, production budgets, audience IMDb scores, and social media engagement metrics across actors and directors.',
businessObjective: 'Box Office Economics: Correlation between production budget and global gross revenue, identifying the most profitable genres (Action, Adventure, Comedy).<br>Critical & Audience Reception: Distribution of IMDb scores across content ratings (PG, PG-13, R, G) and release decades.<br>Talent & Star Power Impact: Analysis of lead actor and director social engagement (Facebook likes) against movie commercial success.<br>Trend & Historical Analysis: Longitudinal analysis of film releases, durations, and revenue trends from classic cinema to modern releases.',
    keyFindings: 'Total Leads: Aggregate volume of incoming marketing leads across all active channels.<br>Total Converted: Number of successfully converted paying clients.<br>Conversion Rate (%): Lead-to-customer conversion efficiency.<br>Cost Per Lead (CPL): Marketing acquisition spend efficiency per acquired lead.<br>Total Budget: Total capital allocated across social advertising campaigns.',
      tools: ['POWER BI', 'DAX', 'Power Query (ETL)'],
      image: 'assets/images/project4.png',
      badge: 'LIVE DASHBOARD',
      githubUrl: 'https://github.com/mostafakaram893/imdb-movie-analytics',
      demoUrl: 'https://app.powerbi.com/view?r=eyJrIjoiMGEwNTk4NTAtMzY5Mi00NjNmLWExZjAtNjIwN2FiYjIyYzIxIiwidCI6IjI1Y2UwMjYxLWJiZDYtNDljZC1hMWUyLTU0MjYwODg2ZDE1OSJ9',
      fullCaseStudy: {
      architecture: 'Business Intelligence: Microsoft Power BI Desktop<br>ETL & Data Cleaning: Power Query (missing value imputation, data type formatting, column splitting)<br>Calculations: DAX (Data Analysis Expressions) for dynamic aggregations and KPI indicators',
        impactMetric2: '-95% Reporting Cycle Time',
        impactMetric3: '100% Audit Compliance'
      }
    }
  ];


  /* ==========================================================================
     2. RENDER FUNCTIONS
     ========================================================================== */

  // Render Skills based on active category
  function renderSkills(category = 'technical') {
    const container = document.getElementById('skillsContainer');
    if (!container) return;

    // Apply smooth switch animation
    container.classList.add('switching');

    setTimeout(() => {
      const items = skillsData[category] || [];
      container.innerHTML = items.map(skill => `
        <div class="skill-card reveal-element revealed">
          <div class="skill-card-top">
            <div class="skill-card-icon">${skill.icon}</div>
            <span class="skill-badge-level">${skill.level}</span>
          </div>
          <h3 class="skill-card-name">${skill.name}</h3>
          <p class="skill-card-sub">${skill.subtitle}</p>
          <div class="skill-progress-wrap">
            <div class="skill-progress-bar">
              <div class="skill-progress-fill" style="width: ${skill.progress}%"></div>
            </div>
            <div class="skill-progress-meta">
              <span>Proficiency: ${skill.progress}%</span>
              <span>${skill.exp}</span>
            </div>
          </div>
        </div>
      `).join('');

      container.classList.remove('switching');
    }, 180);
  }

  // Render Certifications Grid
  function renderCertifications() {
    const container = document.getElementById('certsContainer');
    if (!container) return;

    container.innerHTML = certificationsData.map((cert, index) => `
      <div class="cert-card reveal-element delay-${index + 1}">
        <div class="cert-thumb-box" onclick="window.openCertLightbox('${cert.id}')" role="button" aria-label="View ${cert.title}">
          <img src="${cert.image}" alt="${cert.title}" class="cert-thumb-img" loading="lazy">
          <div class="cert-thumb-overlay">
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
              Click to Enlarge
            </span>
          </div>
        </div>
        <div class="cert-card-content">
          <div>
            <div class="cert-meta-row">
              <span class="cert-issuer-tag">${cert.issuer}</span>
              <span class="cert-date">${cert.date}</span>
            </div>
            <h3 class="cert-title">${cert.title}</h3>
            <p class="cert-skills-line">${cert.skills.join(' • ')}</p>
            <p class="cert-desc">${cert.desc}</p>
          </div>
          <div class="cert-card-footer">
            <button class="btn btn-glass btn-sm btn-block" onclick="window.openCertLightbox('${cert.id}')">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span>View Certificate</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Render Projects List
  function renderProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container) return;

    container.innerHTML = projectsData.map((project, index) => `
      <article class="project-case-card reveal-element delay-${index + 1}">
        <div class="project-preview-wrap" onclick="window.openProjectLightbox('${project.id}')" role="button" aria-label="View Project ${project.title}">
          <span class="project-preview-badge">${project.badge}</span>
          <img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy">
          <div class="project-preview-overlay">
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              Inspect Case Study
            </span>
          </div>
        </div>

        <div class="project-details-wrap">
          <div class="project-tags-row">
            <span>•</span>
            <span>${project.tags.join(' • ')}</span>
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-lead-desc">${project.leadDesc}</p>

          ${index !== 1 ? `
          <div class="case-box">
            <span class="case-box-label">Key Business Questions Answered</span>
            <p class="case-box-text">${project.businessObjective}</p>
          </div>

          <div class="case-box highlight">
            <span class="case-box-label">✦ Core Business Metrics (KPIs)</span>
            <p class="case-box-text">${project.keyFindings}</p>
          </div>
          ` : ''}

          <div class="project-chips-row">
            ${project.tools.map(tool => `<span class="tool-chip">${tool}</span>`).join('')}
          </div>

          <div class="project-actions-row">
            <button class="btn btn-primary btn-sm" onclick="window.openProjectLightbox('${project.id}')">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>View Project Details</span>
            </button>
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-glass btn-sm">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>GitHub Repo</span>
            </a>
            ${project.demoUrl ? `
              <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-glass btn-sm">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <span>Live Demo</span>
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `).join('');
  }


  /* ==========================================================================
     3. TAB SWITCHING LOGIC (Technical vs Business Skills)
     ========================================================================== */
  const tabTechnical = document.getElementById('tabTechnical');
  const tabBusiness = document.getElementById('tabBusiness');

  if (tabTechnical && tabBusiness) {
    tabTechnical.addEventListener('click', () => {
      tabTechnical.classList.add('active');
      tabBusiness.classList.remove('active');
      renderSkills('technical');
    });

    tabBusiness.addEventListener('click', () => {
      tabBusiness.classList.add('active');
      tabTechnical.classList.remove('active');
      renderSkills('business');
    });
  }


  /* ==========================================================================
     4. MODALS & LIGHTBOX MANAGEMENT
     ========================================================================== */

  // Elements
  const certModal = document.getElementById('certModal');
  const projectModal = document.getElementById('projectModal');
  const cvModal = document.getElementById('cvModal');

  // Open Certificate Modal
  window.openCertLightbox = function(certId) {
    const cert = certificationsData.find(c => c.id === certId);
    if (!cert || !certModal) return;

    document.getElementById('modalCertImg').src = cert.image;
    document.getElementById('modalCertImg').alt = cert.title;
    document.getElementById('modalCertIssuer').textContent = cert.issuer;
    document.getElementById('certModalTitle').textContent = cert.title;
    document.getElementById('modalCertDate').textContent = cert.date;
    document.getElementById('modalCertDesc').textContent = cert.desc;
    document.getElementById('modalCertVerifyLink').href = cert.verifyUrl;

    const skillsWrap = document.getElementById('modalCertSkills');
    skillsWrap.innerHTML = cert.skills.map(s => `<span class="badge-pill">${s}</span>`).join('');

    openModal(certModal);
  };

  // Open Project Details Modal
  window.openProjectLightbox = function(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !projectModal) return;

    const body = document.getElementById('projectModalBody');
    body.innerHTML = `
      <div class="modal-project-header">
        <div class="project-tags-row">
          <span>•</span>
          <span>${project.tags.join(' • ')}</span>
        </div>
        <h2 class="project-title" id="projectModalTitle">${project.title}</h2>
        <p class="project-lead-desc">${project.leadDesc}</p>
      </div>

      <div class="modal-project-img-wrap">
        <img src="${project.image}" alt="${project.title}" class="modal-project-img">
      </div>

      <div class="modal-project-grid">
        <div class="modal-project-card">
          <h4 class="modal-card-title">Architecture &amp; Pipeline</h4>
          <p class="modal-card-text">${project.fullCaseStudy.architecture}</p>
        </div>
      </div>

      <div class="case-box highlight" style="margin-bottom: 1.5rem;">
        <span class="case-box-label">✦ Measurable Commercial Impact</span>
        <div class="pill-tags-row" style="margin-top: 0.5rem;">
          <span class="mini-pill">🛡️ ${project.fullCaseStudy.impactMetric3}</span>
        </div>
      </div>

      <div class="project-actions-row">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          <span>Explore GitHub Source</span>
        </a>
        ${project.demoUrl ? `
          <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-glass btn-sm">
            <span>Open Interactive Dashboard &rarr;</span>
          </a>
        ` : ''}
      </div>
    `;

    openModal(projectModal);
  };

  // Open CV Modal
  function openCvModal() {
    if (cvModal) openModal(cvModal);
  }

  // Generic Open Modal
  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('active');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  // Generic Close Modal
  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('active');
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Close buttons bindings
  document.getElementById('closeCertModal')?.addEventListener('click', () => closeModal(certModal));
  document.getElementById('closeProjectModal')?.addEventListener('click', () => closeModal(projectModal));
  document.getElementById('closeCvModal')?.addEventListener('click', () => closeModal(cvModal));
  document.getElementById('heroCvBtn')?.addEventListener('click', openCvModal);
  document.getElementById('navCvBtn')?.addEventListener('click', openCvModal);

  // Close on backdrop click
  [certModal, projectModal, cvModal].forEach(modal => {
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Close on ESC key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      [certModal, projectModal, cvModal].forEach(modal => closeModal(modal));
    }
  });


  /* ==========================================================================
     5. STICKY NAVBAR, SCROLLSPY & MOBILE MENU
     ========================================================================== */
  const header = document.getElementById('header');
  const navMenu = document.getElementById('navMenu');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active Section ScrollSpy
    let currentSection = '';
    const scrollPosition = window.scrollY + 180;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu toggle
  menuToggle?.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  // Auto close mobile menu when link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('open');
    });
  });


  /* ==========================================================================
     6. INTERSECTION OBSERVER (Scroll Reveal Animations)
     ========================================================================== */
  function initScrollAnimations() {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-element').forEach(el => observer.observe(el));
  }


  /* ==========================================================================
     7. CONTACT FORM VALIDATION & FORMSPREE SUBMISSION
     ========================================================================== */
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgavdnva';

  const contactForm = document.getElementById('contactForm');
  const toast = document.getElementById('toastNotification');
  const toastTitle = document.getElementById('toastTitle');
  const toastMsg = document.getElementById('toastMessage');

  // Show a toast notification; pass isError=true for the red error variant
  function showToast(title, message, isError = false) {
    if (!toast) return;
    toastTitle.textContent = title;
    toastMsg.textContent = message;

    // Swap icon SVG between success (checkmark) and error (X)
    const iconEl = toast.querySelector('.toast-icon');
    if (iconEl) {
      iconEl.innerHTML = isError
        ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
             <circle cx="12" cy="12" r="10"></circle>
             <line x1="15" y1="9" x2="9" y2="15"></line>
             <line x1="9" y1="9" x2="15" y2="15"></line>
           </svg>`
        : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
             <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
             <polyline points="22 4 12 14.01 9 11.01"></polyline>
           </svg>`;
    }

    toast.classList.toggle('toast-error', isError);
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 5000);
  }

  const SPINNER_HTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spin">
      <line x1="12" y1="2" x2="12" y2="6"></line>
      <line x1="12" y1="18" x2="12" y2="22"></line>
      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
      <line x1="2" y1="12" x2="6" y2="12"></line>
      <line x1="18" y1="12" x2="22" y2="12"></line>
      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
    </svg>
    <span>Sending Message...</span>
  `;

  contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput    = document.getElementById('userName');
    const emailInput   = document.getElementById('userEmail');
    const messageInput = document.getElementById('userMessage');
    const nameError    = document.getElementById('nameError');
    const emailError   = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const submitBtn    = document.getElementById('submitBtn');

    let isValid = true;

    // --- Reset previous errors ---
    [nameInput, emailInput, messageInput].forEach(input => input.classList.remove('error'));
    [nameError, emailError, messageError].forEach(err => err.textContent = '');

    // --- Validate Name ---
    if (!nameInput.value.trim()) {
      nameInput.classList.add('error');
      nameError.textContent = 'Please enter your name';
      isValid = false;
    }

    // --- Validate Email ---
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
      emailInput.classList.add('error');
      emailError.textContent = 'Please enter a valid email address';
      isValid = false;
    }

    // --- Validate Message ---
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      messageInput.classList.add('error');
      messageError.textContent = 'Message must be at least 10 characters';
      isValid = false;
    }

    if (!isValid) return;

    // --- Loading state: disable button, show spinner ---
    const originalHTML = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = SPINNER_HTML;

    try {
      const formData = {
        name:        nameInput.value.trim(),
        email:       emailInput.value.trim(),
        inquiryType: document.getElementById('inquiryType')?.value || '',
        message:     messageInput.value.trim()
      };

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body:    JSON.stringify(formData)
      });

      if (response.ok) {
        // --- Success ---
        contactForm.reset();
        showToast(
          'Message Sent Successfully!',
          'Thank you for reaching out — Mostafa will reply to you shortly.',
          false
        );
      } else {
        // --- Formspree returned an API error ---
        const data = await response.json().catch(() => ({}));
        const hint = data?.errors?.[0]?.message || 'Please try again or email directly.';
        showToast('Submission Failed', hint, true);
      }
    } catch (_err) {
      // --- Network / fetch error ---
      showToast(
        'Connection Error',
        'Could not reach the server. Check your internet connection and try again.',
        true
      );
    } finally {
      // --- Always restore the button ---
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalHTML;
    }
  });


  /* ==========================================================================
     8. INITIALIZE PAGE
     ========================================================================== */
  renderSkills('technical');
  renderCertifications();
  renderProjects();
  initScrollAnimations();

});
