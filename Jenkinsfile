pipeline {
    agent any

    environment {
        GIT_REPO = 'https://github.com/NavKaur11/group5.git'
        BRANCH_NAME = 'master' // Set the branch that we want to build
    }

    tools {
        nodejs "NodeJS 20" // Use the configured NodeJS installation
    }

    stages {
        stage('Checkout Code') {
            steps {
                git url: "${GIT_REPO}", branch: "${BRANCH_NAME}"
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install necessary dependencies, for example, for a Node.js project:
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run tests, for example, for a Node.js project:
                    sh 'npm test'
                }
            }
        }

        stage('Build Project') {
            steps {
                script {
                    // Build the project
                    sh 'npm run build'
                }
            }
        }
    }

    post {
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed.'
        }
    }
}
