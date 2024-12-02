pipeline {
    agent any

    environment {
        GIT_REPO = 'https://github.com/NavKaur11/group5.git'
        BRANCH_NAME = 'master' // Set the branch that we want to build
    }

    stages {
        stage('Checkout Code') {
            steps {
                git url: "${GIT_REPO}", branch: "${BRANCH_NAME}"
            }
        }

        stage('Build Project') {
            steps {
                script {
                    // Add your build commands here
                    echo 'Building the project...'
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
