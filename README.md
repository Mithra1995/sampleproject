# 🚀 Spring Boot Microservice Deployment on AWS ECS Fargate

This project demonstrates how to containerize and deploy a Spring Boot microservice using **Docker**, **Amazon ECS Fargate**, and **AWS CodePipeline**. It provides a fully automated CI/CD pipeline that builds Docker images, stores them in ECR, and deploys them on ECS Fargate.

---

## 📌 Table of Contents

- [🎯 Objective](#-objective)
- [📦 Tech Stack](#-tech-stack)
- [🧱 Architecture](#-architecture)
- [📁 Project Structure](#-project-structure)
- [⚙️ Prerequisites](#️-prerequisites)
- [🚀 Setup Instructions](#-setup-instructions)
- [🔁 CI/CD Workflow](#-cicd-workflow)
- [🛠️ ECS & ALB Setup](#️-ecs--alb-setup)
- [📄 License](#-license)

---

## 🎯 Objective

- Containerize a Spring Boot application using Docker
- Push the image to Amazon ECR
- Deploy the container to Amazon ECS (Fargate launch type)
- Use AWS CodePipeline for full CI/CD automation

---

## 📦 Tech Stack

| Layer             | Tool/Service                       |
|------------------|------------------------------------|
| Language          | Java (Spring Boot)                 |
| Containerization  | Docker                             |
| CI/CD             | AWS CodePipeline, AWS CodeBuild    |
| Deployment        | Amazon ECS Fargate                 |
| Image Registry    | Amazon ECR                         |
| Networking        | Application Load Balancer (ALB)    |
| Monitoring        | Amazon CloudWatch                  |

---

## 🧱 Architecture

1. Developer pushes code to GitHub
2. AWS CodePipeline triggers CodeBuild
3. CodeBuild builds the Docker image and pushes it to ECR
4. ECS Fargate pulls the latest image and updates the service
5. ALB handles external traffic routing to ECS service

---

## 📁 Project Structure

<img width="626" height="273" alt="image" src="https://github.com/user-attachments/assets/1452cdcc-d07d-465d-9d7b-76b34885800e" />



## 🔧 Prerequisites

- AWS CLI configured
- ECR repository created
- ECS cluster & Fargate service created
- Load Balancer and Target Group configured
- IAM roles for CodePipeline and CodeBuild
- Node.js runtime installed (locally for dev)

#👤 Author: Mithra Balasubramaniam · GitHub: [@Mithra1995](https://github.com/Mithra1995)

