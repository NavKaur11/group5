pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Clone the repository
                checkout scm
            }
        }
        stage('Build') {
            steps {
                // Example build step for a Node.js project
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                // Example test step
                sh 'npm test'
            }
        }
        stage('Package') {
            steps {
                // Example package step
                sh 'npm run build'
            }
        }
    }
    post {
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
