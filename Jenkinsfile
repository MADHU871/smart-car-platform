pipeline {

```
agent any

stages {

    stage('Git Checkout') {

        steps {

            echo 'Source Code Downloaded'

        }

    }

    stage('Frontend Install') {

        steps {

            dir('frontend') {

                bat 'npm install'

            }

        }

    }

    stage('Frontend Build') {

        steps {

            dir('frontend') {

                bat 'npm run build'

            }

        }

    }

    stage('Backend Install') {

        steps {

            dir('backend') {

                bat 'npm install'

            }

        }

    }

    stage('Backend Test') {

        steps {

            dir('backend') {

                bat 'node --version'

                bat 'npm --version'

            }

        }

    }

}

post {

    success {

        echo 'Smart Car Pipeline Success'

    }

    failure {

        echo 'Smart Car Pipeline Failed'

    }

}
```

}
