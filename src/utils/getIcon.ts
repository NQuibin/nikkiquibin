interface Icon {
  title: string
  filename: string
}

const icons: { [key: string]: Icon } = {
  apache: {
    title: 'Apache',
    filename: 'apache.svg',
  },
  awsLambda: {
    title: 'AWS Lambda',
    filename: 'aws-lambda.svg',
  },
  codeIgniter: {
    title: 'Code Igniter',
    filename: 'codeigniter.svg',
  },
  java: {
    title: 'Java',
    filename: 'java.svg',
  },
  msOffice: {
    title: 'MS Office',
    filename: 'ms-office.svg',
  },
  mySQL: {
    title: 'MySQL',
    filename: 'mysql.svg',
  },
  postgreSQL: {
    title: 'PostgreSQL',
    filename: 'postgres.svg',
  },
  python: {
    title: 'Python',
    filename: 'python.svg',
  },
  react: {
    title: 'React',
    filename: 'react.svg',
  },
  visualBasic: {
    title: 'Visual Basic',
    filename: 'visual-basic.png',
  },
  vue: {
    title: 'Vue',
    filename: 'vue.svg',
  },
}

export const getIcon = (name: string): Icon => {
  return icons[name]
}
