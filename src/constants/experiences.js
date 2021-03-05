export const technologies = {
  apache: {
    name: 'apache',
    label: 'Apache',
  },
  aws: {
    name: 'aws',
    label: 'Amazon Web Services',
  },
  codeigniter: {
    name: 'codeigniter',
    label: 'CodeIgniter',
  },
  flask: {
    name: 'flask',
    label: 'Flask',
  },
  gcp: {
    name: 'gcp',
    label: 'Google Cloud Platform',
  },
  java: {
    name: 'java',
    label: 'Java',
  },
  msOffice: {
    name: 'msOffice',
    label: 'Microsoft Office',
  },
  mysql: {
    name: 'mysql',
    label: 'MySQL',
  },
  postgres: {
    name: 'postgres',
    label: 'PostgreSQL',
  },
  python: {
    name: 'python',
    label: 'Python',
  },
  reactjs: {
    name: 'reactjs',
    label: 'React JS',
  },
  vba: {
    name: 'vba',
    label: 'Visual Basic for Applications',
  },
  vue: {
    name: 'vue',
    label: 'Vue JS',
  },
};

export const experiences = [
  {
    company: 'PartnerStack',
    title: 'Software Engineer',
    location: 'Toronto, ON',
    duration: 'Jan. 2021 - Present',
    description: `A partner relationship management (PRM) platform that also helps
        companies build new revenue channels. Currently developing external APIs
        for public use, and connectors for iPaaS software, Workato in particular.`,
    techStack: [
      technologies.vue,
      technologies.flask,
      technologies.postgres,
      technologies.gcp,
    ],
  },
  {
    company: 'PatientPop',
    title: 'Software Engineer',
    location: 'Santa Monica, CA (Remote)',
    duration: 'Oct. 2019 - Jan. 2021',
    description: `An all-in-one practice growth solution software by automating and
        enhancing the patient journey. Built microservices to manage practice websites,
        patients, and tools such as payments and faxing.`,
    techStack: [
      technologies.vue,
      technologies.python,
      technologies.postgres,
      technologies.aws,
    ],
  },
  {
    company: 'Loopio',
    title: 'Software Developer',
    location: 'Toronto, ON',
    duration: 'Jun. 2018 - Oct. 2019',
    description: `Software to streamline the way organizations respond to RFPs, 
        DDQs, and Security Questionnaires. My team developed third party integrations 
        (Slack, Salesforce, MS Dynamics, etc), reports, and dashboards.`,
    techStack: [
      technologies.reactjs,
      technologies.codeigniter,
      technologies.mysql,
      technologies.apache,
    ],
  },
  {
    company: 'Canada Revenue Agency',
    title: 'Program Officer',
    location: 'Toronto, ON',
    duration: 'May 2017 - Jun. 2018',
    description: `Agency for the Government of Canada that administer tax laws 
        (the IRS of Canada). My role was to develop tools and macros to help 
        auditors automate their daily tasks.`,
    techStack: [technologies.python, technologies.vba, technologies.msOffice],
  },
  {
    company: 'Defense Research Development of Canada',
    title: 'Research Assistant',
    location: 'Toronto, ON',
    duration: 'Jan. 2017 - Mar. 2017',
    description: `The Department of National Defense for the Government of Canada. 
        I helped researchers create applications to record and analyze their result 
        data.`,
    techStack: [technologies.java],
  },
];
