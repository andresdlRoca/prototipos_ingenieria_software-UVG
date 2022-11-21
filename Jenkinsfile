pipeline {
    agent any
    environment {
        PATH = "C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\bin;${env.PATH}"
    }
    stages {
        stage('Build FrontEnd') { 
	  
            steps {
		        dir('react-uvgente'){
                    bat 'npm install' 
		        }
            }
        }
        stage('Build BackEnd') { 
	  
            steps {
		dir('node-api-postgres'){
                    bat 'npm install' 
		 }
            }
        }
        stage('Unit Tests') {
            steps {
                 ws('C:/Users/rober/Documents/GitHub/prototipos_ingenieria_software-UVG/react-uvgente'){
                    bat 'npm install' 
                    bat 'npm install css-mediaquery'
                    bat 'npm run test a' 
		   }
            }
        }
        stage('Integration Tests') {
            steps {
                 dir('node-api-postgres'){
                    bat 'npm install' 
                    bat 'npm install express pg-pool pg'
                    bat 'npm install --save-dev mocha chai supertest'
                    bat 'npm run test' 
		 }
            }
        }
	stage('E2E Tests') {
            steps {
                 dir('C:/Users/rober/Documents/GitHub/prototipos_ingenieria_software-UVG/playwright'){
                    bat 'npm install' 
                    bat 'npm install -D @playwright/test'
                    bat 'npm install npx playwright install'
                    bat 'npm run e2e' 
		 }
            }
        }
    }
}