pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Check out the code from the Git repository
                git 'https://github.com/NavKaur11/group5.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Navigate to the navneetReact directory and install project dependencies using npm
                dir('navneetReact') {
                    script {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests globally (outside of navneetReact directory)
                script {
                    // Ensure proper permissions and run Jest
                    sh 'chmod -R 777 node_modules'
                    sh 'npx jest'
                }
            }
        }

        stage('Build React App') {
            steps {
                // Navigate to the navneetReact directory and build the React project for production
                dir('navneetReact') {
                    script {
                        sh 'npm run build'
                    }
                }
            }
        }
    }

    post {
        success {
            // This block runs if the pipeline is successful
            echo 'Pipeline Build Successful'
        }
        failure {
            // This block runs if the pipeline fails
            echo 'Pipeline Build Failed'
        }
        always {
            // This block runs regardless of success or failure
            echo 'Pipeline execution completed.'
        }
    }
}
