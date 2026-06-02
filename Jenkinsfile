pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-creds',
                    url: 'https://github.com/MADHU871/your-repo.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
            }
        }
    }
}