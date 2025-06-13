pipeline {
    agent any
    tools {
        nodejs 'Node18' // Use Node.js version configured in Jenkins
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/your-username/my-static-site.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Lint') {
            steps {
                sh 'npx eslint *.js || true' // Run ESLint, continue on failure
                sh 'npx stylelint **/*.css' // Run Stylelint for CSS
            }
        }
        stage('Build') {
            steps {
                sh 'mkdir -p dist && cp *.html *.css dist/' // Copy files to a dist folder
            }
        }
        stage('Deploy') {
            steps {
                // Example: Deploy to a local server or Netlify
                sh 'echo "Deploying to hosting service..."'
                // Add deployment steps (see Step 6)
            }
        }
    }
    post {
        always {
            cleanWs() // Clean workspace
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
