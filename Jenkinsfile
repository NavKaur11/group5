pipeline {
    agent any

    tools {
        nodejs "NodeJS 20" // Replace with the actual name you configured in Jenkins
    }

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/NavKaur11/group5.git', branch: 'master'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm --version'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
