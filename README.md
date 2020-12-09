# Serverless ML Powered Building Classifier

This project was bootstrapped with https://github.com/mattmcclean/fastai-container-sam-app, which uses AWS SAM (Serverless Application Model) to provision the infrastructure for a serverless ML application. 

# Overview
The ML model for a simple building classification has been implemented with #fastai (ResNet18, Transfer learning) & deployed to AWS #Lambda as a Container. Front end is on AWS #Amplify. It is a #serverless #machinelearning.

# Components

## Backend

### REST API
AWS API GW provides a RESTful API. 

### ML Inference
The Inference code is Docker containerized and deployed as a Lambda function.

## Frontend
The front end is based on this tutorial. It's a full stact web app created in React: https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-one/?e=gs2020&p=build-a-react-app-intro 


## ML model (not included)
The ML model was trained using fastai framework. The Notebook code is here: https://github.com/CloudaYolla/fastai-study-group-DL4coders/blob/main/intro-google-building-classifier/02_production-building-pa2.ipynb 


### Credits

[https://twitter.com/HBAkirmak]