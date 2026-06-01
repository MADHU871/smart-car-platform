
---

# Correct Jenkinsfile (Windows Jenkins)

Copy this EXACTLY into your `Jenkinsfile`:

```groovy
pipeline {

    agent any

    stages {

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

    }

}