pipeline {
    agent { dockerfile true }
    environment {
        CI = 'true'
    }
    stages {
        stage('Success') {
            steps {
                sh 'echo run success'
            }
        }
    }
}
