pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/MinhFresher/test1.git'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying static site...'
                // Example: deploy to a web directory on your server
                sh '''
                    rm -rf /var/www/html/*
                    cp -r * /var/www/html/
                '''
            }
        }
    }
}
