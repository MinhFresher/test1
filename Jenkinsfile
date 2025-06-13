pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your/repo.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Nothing to build for HTML/CSS'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                mkdir -p /tmp/html-site
                cp -r * /tmp/html-site/
                cd /tmp/html-site
                python3 -m http.server 8081 &
                '''
            }
        }

        stage('Ngrok') {
            steps {
                sh '''
                ./ngrok http 8081 > /dev/null &
                sleep 5
                curl 127.0.0.1:4040/api/tunnels
                '''
            }
        }
    }
}
