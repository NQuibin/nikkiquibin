import vueSVG from 'src/assets/vue.svg'
import pythonSVG from 'src/assets/python.svg'
import postgresSVG from 'src/assets/postgres.svg'
import awsLambdaSVG from 'src/assets/aws-lambda.svg'
import reactSVG from 'src/assets/react.svg'
import codeIgniterSVG from 'src/assets/codeigniter.svg'
import mySQLSVG from 'src/assets/mysql.svg'
import apacheSVG from 'src/assets/apache.svg'
import visualBasicPNG from 'src/assets/visual-basic.png'
import msOfficeSVG from 'src/assets/ms-office.svg'
import javaSVG from 'src/assets/java.svg'

interface Icon {
  name: string
  src: string
}

export const vueIcon: Icon = { name: 'Vue', src: vueSVG }
export const pythonIcon: Icon = { name: 'Python', src: pythonSVG }
export const postgresIcon: Icon = { name: 'PostgreSQL', src: postgresSVG }
export const awsLambdaIcon: Icon = { name: 'AWS Lambda', src: awsLambdaSVG }
export const reactIcon: Icon = { name: 'React', src: reactSVG }
export const codeIgniterIcon: Icon = {
  name: 'Code Igniter',
  src: codeIgniterSVG
}
export const mySQLIcon: Icon = { name: 'MySQL', src: mySQLSVG }
export const apacheIcon: Icon = { name: 'Apache', src: apacheSVG }
export const visualBasicIcon: Icon = {
  name: 'Visual Basic',
  src: visualBasicPNG
}
export const msOfficeIcon: Icon = { name: 'MS Office', src: msOfficeSVG }
export const javaIcon: Icon = { name: 'Java', src: javaSVG }

const iconMapping: { [key: string]: Icon } = {
  vue: vueIcon,
  python: pythonIcon,
  postgres: postgresIcon,
  awsLambda: awsLambdaIcon,
  react: reactIcon,
  codeIgniter: codeIgniterIcon,
  mySQL: mySQLIcon,
  apache: apacheIcon,
  visualBasic: visualBasicIcon,
  msOffice: msOfficeIcon,
  java: javaIcon
}

export const getIcon = (name: string): Icon => iconMapping[name]
