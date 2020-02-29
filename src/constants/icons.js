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

export const vueIcon = { name: 'Vue', src: vueSVG }
export const pythonIcon = { name: 'Python', src: pythonSVG }
export const postgresIcon = { name: 'PostgreSQL', src: postgresSVG }
export const awsLambdaIcon = { name: 'AWS Lambda', src: awsLambdaSVG }
export const reactIcon = { name: 'React', src: reactSVG }
export const codeIgniterIcon = { name: 'Code Igniter', src: codeIgniterSVG }
export const mySQLIcon = { name: 'MySQL', src: mySQLSVG }
export const apacheIcon = { name: 'Apache', src: apacheSVG }
export const visualBasicIcon = { name: 'Visual Basic', src: visualBasicPNG }
export const msOfficeIcon = { name: 'MS Office', src: msOfficeSVG }
export const javaIcon = { name: 'Java', src: javaSVG }

const iconMapping = {
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

export const getIcon = name => iconMapping[name]
