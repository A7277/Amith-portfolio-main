// ============================================================
// portfolioData.js — Centralized configuration for Amith Raj's Portfolio
// 2029 Glassmorphism Edition — Pure DevOps & Cloud Engineering
// ============================================================

import headshotImg from "../assets/amith/headshot.png";
import certAwsDevopsInternship from "../assets/amith/cert-aws-devops-internship.png";
import certDevopsEngineer from "../assets/amith/cert-devops-engineer.png";
import certAwsArchitect from "../assets/amith/cert-aws-solutions-architect.png";
import certAiTools from "../assets/amith/cert-ai-tools-workshop.png";

export const personalInfo = {
  name: "Amith Raj",
  firstName: "Amith",
  lastName: "Raj",
  brandName: "AMITH RAJ",
  title: "DevOps Engineer | Cloud Infrastructure Specialist",
  tagline: "Building Resilient Cloud Infrastructure, Automated CI/CD & Enterprise Observability",
  location: "Bengaluru, Karnataka, India",
  phone: "+91 8123012310",
  emails: {
    primary: "amithraj873@gmail.com",
  },
  summary:
    "Cloud / DevOps Engineer with hands-on experience designing and automating cloud infrastructure, building end-to-end CI/CD pipelines, and deploying containerized applications on AWS. Proficient in Kubernetes, Docker, Terraform, Jenkins, and observability tools. Skilled in leveraging Generative AI tools, prompt engineering, workflow automation platforms, and AI-assisted development practices to accelerate software delivery, optimize operations, and improve productivity.",
  resumeUrl: "/amith-raj-resume.pdf",
  headshot: headshotImg,
  videoUrl: "/amith-hero-video.mp4",
  videoPoster: "/amith-hero-poster.png",
};

export const socialLinks = {
  github: "https://github.com/A7277",
  linkedin: "https://www.linkedin.com/in/amith-raj-a27674365",
  email: "amithraj873@gmail.com",
  phone: "tel:+918123012310",
  portfolio: "https://amithraj.dev/",
};

export const heroContent = {
  greeting: "Welcome to my Cloud / DevOps Engineer Space",
  headline: "Automating Infrastructure. Scaling Resilience.",
  subtitle: "Cloud / DevOps Engineer specializing in AWS Cloud, Kubernetes Orchestration, Terraform Infrastructure-as-Code, and Zero-Downtime CI/CD Pipelines.",
  stats: [
    { value: "99.99%", label: "Cloud High Availability" },
    { value: "100%", label: "Infrastructure as Code" },
    { value: "80%", label: "Faster Deployment Cycles" },
    { value: "Sub-Second", label: "Observability Alerting" },
  ],
  ctaPrimary: { text: "Explore Architecture", href: "#projects" },
  ctaSecondary: { text: "Contact Me", href: "#contact" },
  ctaResume: { text: "Download Resume", href: "/amith-raj-resume.pdf" },
  playReelText: "Play Engineering Overview",
};

export const aboutContent = {
  subtitle: "Engineering Mindset",
  heading: "Cloud Infrastructure Architect & Automation Evangelist",
  bioParagraphs: [
    "I am a Cloud / DevOps Engineer based in Bengaluru with a deep passion for cloud-native architectures, infrastructure automation, and reliable software delivery systems.",
    "My expertise spans designing fault-tolerant multi-tier AWS environments, engineering modular Terraform templates, and building end-to-end CI/CD pipelines with automated quality controls.",
    "I also integrate modern Generative AI tooling and workflow automation into DevOps practices to streamline log diagnosis, enhance prompt-driven troubleshooting, and optimize cloud operational efficiency."
  ],
  highlights: [
    "AWS 3-Tier Production Deployments",
    "Terraform Modular Infrastructure",
    "Kubernetes & Docker Orchestration",
    "Prometheus & ELK Observability",
    "AI-Assisted Incident Response"
  ]
};

export const processContent = {
  badge: "My Process",
  heading: "Engineering Cloud Systems in Motion",
  description: "I follow a structured, business-first engineering process to analyze requirements, construct secure cloud architectures, and deploy robust, automated applications.",
  cards: [
    {
      number: "01",
      title: "Discover & Scope",
      text: "Understanding system requirements, mapping cloud network boundaries, and scoping infrastructure availability goals."
    },
    {
      number: "02",
      title: "Architect & Plan",
      text: "Designing scalable 3-tier AWS technical architecture, selecting container orchestrators, and structuring IaC modules."
    },
    {
      number: "03",
      title: "Automate & Build",
      text: "Provisioning Terraform infrastructure, authoring Docker & Kubernetes manifests, and building Jenkins CI/CD pipelines."
    },
    {
      number: "04",
      title: "Test & Optimize",
      text: "Executing automated SonarQube code quality scans, load testing ALB targets, and tuning Prometheus alerting thresholds."
    },
    {
      number: "05",
      title: "Launch & Scale",
      text: "Deploying secure, production-ready cloud applications with zero-downtime rollouts, auto scaling, and ELK log observability."
    }
  ],
  endText: "Ready for production deployment!"
};

export const technicalSkills = {
  categories: [
    {
      title: "Cloud Platforms",
      icon: "☁️",
      skills: [
        { name: "AWS EC2", desc: "Elastic Compute Cloud" },
        { name: "AWS S3", desc: "Object Storage & Policies" },
        { name: "VPC", desc: "Custom Networking & Subnets" },
        { name: "IAM", desc: "Least-Privilege Security" },
        { name: "EKS", desc: "Managed Kubernetes" },
        { name: "CloudWatch", desc: "Metrics & Alarm Triggers" },
        { name: "Route 53", desc: "DNS Routing & Failover" },
        { name: "ALB", desc: "Application Load Balancing" },
        { name: "Auto Scaling", desc: "Dynamic Capacity Scaling" },
        { name: "CodePipeline", desc: "AWS Native Delivery" },
      ]
    },
    {
      title: "Containers & Orchestration",
      icon: "📦",
      skills: [
        { name: "Docker", desc: "Multi-stage Image Optimization" },
        { name: "Kubernetes (EKS)", desc: "Cluster Management & Pods" },
        { name: "Helm", desc: "K8s Package Management" },
        { name: "YAML Manifests", desc: "Declarative Configurations" },
      ]
    },
    {
      title: "Infrastructure as Code",
      icon: "🏗️",
      skills: [
        { name: "Terraform", desc: "Modular HCL Provisioning" },
        { name: "State Management", desc: "Remote S3 & Lock Tables" },
        { name: "Resource Modules", desc: "VPC, Compute, RDS, IAM" },
      ]
    },
    {
      title: "CI/CD & Delivery",
      icon: "🔄",
      skills: [
        { name: "Jenkins", desc: "Automated Pipeline Scripts" },
        { name: "GitHub Actions", desc: "Workflow Integration" },
        { name: "Maven", desc: "Java Build Automation" },
        { name: "SonarQube", desc: "Code Quality & Vulnerabilities" },
        { name: "Nexus", desc: "Artifact Repository Manager" },
      ]
    },
    {
      title: "Observability & Monitoring",
      icon: "📊",
      skills: [
        { name: "Prometheus", desc: "Metric Scraping & Alerting" },
        { name: "Grafana", desc: "Custom Real-time Dashboards" },
        { name: "ELK Stack", desc: "Elasticsearch, Logstash, Kibana" },
        { name: "AWS CloudWatch", desc: "Log Streams & Events" },
      ]
    },
    {
      title: "AI & Scripting",
      icon: "⚡",
      skills: [
        { name: "Linux / Unix", desc: "Kernel & Shell Operations" },
        { name: "Bash / Shell", desc: "Automation Scripting" },
        { name: "ChatGPT & Claude AI", desc: "AI Prompt Engineering" },
        { name: "n8n & Workflow AI", desc: "Agentic Process Automation" },
        { name: "NotebookLM & Gemini", desc: "AI Document Research" },
      ]
    }
  ]
};

export const projects = [
  {
    id: "aws-three-tier-app",
    number: "01",
    badge: "☁️ Cloud Infrastructure",
    title: "AWS Three-Tier Web Architecture",
    tagline: "Highly Available, Secure & Auto-Scaling Enterprise Application Architecture",
    overview:
      "Designed and deployed a production-grade 3-tier web application architecture on AWS. The setup segregates web, application, and database tiers into public and private subnets across multiple Availability Zones.",
    architecture: [
      "Custom VPC with Public Subnets for ALB and Private Subnets for EC2 app instances & multi-AZ RDS.",
      "NAT Gateways providing outbound internet access for private app servers without exposure.",
      "Auto Scaling Groups dynamically expanding EC2 capacity based on CPU & request volume.",
      "Application Load Balancer (ALB) distributing incoming traffic evenly across healthy targets.",
      "IAM least-privilege roles ensuring zero hardcoded cloud credentials."
    ],
    techTags: ["AWS EC2", "ALB", "Auto Scaling", "RDS", "S3", "VPC", "Route 53", "CloudWatch", "IAM"],
    impact: [
      "Achieved 99.99% high availability with zero single-point-of-failure.",
      "Cut latency by 35% through optimal traffic routing and ALB health checks.",
      "Implemented automated database failover using Multi-AZ Amazon RDS."
    ],
    challenges: "Enforcing strict subnet segregation while maintaining seamless automated deployment access and secure database connections.",
    learning: "Mastered cloud network security, security group chaining, and zero-downtime traffic distribution."
  },
  {
    id: "end-to-end-cicd-pipeline",
    number: "02",
    badge: "🔄 CI/CD Automation",
    title: "End-to-End Automated CI/CD Pipeline",
    tagline: "Zero-Manual-Intervention Delivery Pipeline with SonarQube & Nexus",
    overview:
      "Engineered an automated CI/CD pipeline triggering automatically on GitHub commits. Incorporates static code quality gates with SonarQube, Maven build testing, Nexus artifact versioning, and Docker container deployment.",
    architecture: [
      "Webhook trigger from GitHub to Jenkins master server.",
      "Maven compile & unit test execution phase.",
      "SonarQube code quality scan with build break on vulnerability detection.",
      "Package artifact publication to private Nexus Repository Manager.",
      "Container build & automated deployment to target AWS EC2 instances with email notification."
    ],
    techTags: ["Jenkins", "GitHub", "Docker", "SonarQube", "Maven", "Nexus", "AWS EC2", "Bash"],
    impact: [
      "Reduced deployment execution time by 80%.",
      "Eliminated 100% of manual deployment errors through automated pipeline checks.",
      "Guaranteed code quality compliance before production releases."
    ],
    challenges: "Integrating SonarQube quality gate thresholds cleanly into Jenkins pipeline stages to fail fast upon security flaws.",
    learning: "Deepened expertise in pipeline-as-code (Jenkinsfile), artifact governance, and automated rollback strategies."
  },
  {
    id: "terraform-iac-automation",
    number: "03",
    badge: "🏗️ Infrastructure as Code",
    title: "Terraform Cloud Provisioning Engine",
    tagline: "Modular, Version-Controlled Infrastructure as Code with Remote State Management",
    overview:
      "Created reusable, version-controlled Infrastructure-as-Code (IaC) modules in Terraform to automate provisioning of compute, networking, security, storage, and database resources on AWS.",
    architecture: [
      "Modular Terraform structure separated by environment (Dev, Staging, Prod).",
      "S3 backend configuration for secure, remote state storage.",
      "DynamoDB lock table integration for concurrent execution locking.",
      "Parametrized HCL code for VPC, Security Groups, IAM Roles, EC2, and RDS modules."
    ],
    techTags: ["Terraform", "AWS VPC", "AWS IAM", "AWS S3", "AWS RDS", "DynamoDB", "HCL"],
    impact: [
      "Enabled 10-minute full cloud environment recreation from scratch.",
      "Prevented state drift across developer teams with remote DynamoDB locking.",
      "Standardized security baseline configurations across all provisioned resources."
    ],
    challenges: "Managing complex dependencies between network subnets, IAM policies, and RDS instance initialization.",
    learning: "Acquired advanced Terraform module design patterns, state management best practices, and dry-run drift resolution."
  },
  {
    id: "enterprise-observability-stack",
    number: "04",
    badge: "📊 Observability & Incident Response",
    title: "Enterprise Observability & Logging Stack",
    tagline: "Real-time Metrics, Grafana Dashboards & Centralized ELK Log Aggregation",
    overview:
      "Implemented a comprehensive observability solution combining Prometheus for metric collection, Grafana for visual dashboards, CloudWatch alarms for infrastructure thresholds, and the ELK Stack for log centralization.",
    architecture: [
      "Prometheus scraping Node Exporters and container endpoints at regular intervals.",
      "Grafana dashboards displaying real-time CPU, Memory, Network I/O, and HTTP throughput.",
      "Logstash parsing and ingesting application logs into Elasticsearch cluster.",
      "Kibana dashboards providing instant log search, query analysis, and alert triggers."
    ],
    techTags: ["Prometheus", "Grafana", "Elasticsearch", "Logstash", "Kibana", "AWS CloudWatch"],
    impact: [
      "Cut Mean Time to Resolution (MTTR) by 60% during system anomalies.",
      "Provided 360-degree real-time visibility into infrastructure health.",
      "Automated incident alert dispatching for proactive system mitigation."
    ],
    challenges: "Configuring efficient log parsing rules in Logstash to process high-volume log streams without dropping packets.",
    learning: "Gained mastery in metric scraping, alert threshold tuning, and Elasticsearch indexing strategies."
  }
];

export const certificatesList = [
 {
    id: "cert-devops-engineer",
    name: "DevOps Engineer Certification",
    issuer: "MicroDegree",
    issuedDate: "13/12/2024",
    certificateNo: "DOEC-2609",
    category: "DevOps & CI/CD",
    badge: "Professional Certification",
    image: certDevopsEngineer,
    skills: ["Docker & Containers", "Kubernetes", "Jenkins CI/CD", "Terraform IaC", "Observability"],
    signatory: "Manikanta Nair (Co-Founder)"
  },
  {
    id: "cert-aws-solutions-architect",
    name: "AWS Solutions Architect",
    issuer: "MicroDegree",
    issuedDate: "19/11/2024",
    certificateNo: "AWSC-3548",
    category: "AWS Cloud",
    badge: "Architecture Specialization",
    image: certAwsArchitect,
    skills: ["VPC Design", "EC2 Auto Scaling", "ALB Load Balancing", "S3 & RDS Management"],
    signatory: "Manikanta Nair (Co-Founder)"
  },
  {
    id: "cert-ai-tools-workshop",
    name: "AI Tools & Automation Workshop",
    issuer: "be10X",
    issuedDate: "14/06/2026",
    category: "Generative AI",
    badge: "AI Automation",
    image: certAiTools,
    skills: ["Generative AI Tools", "Prompt Engineering", "AI-assisted Debugging", "Workflow Automation"],
    signatory: "Aditya Goenka & Aditya Kachave (Co-Founders)"
  }
];

export const experienceList = [
  {
    organization: "MicroDegree",
    role: "DevOps Engineer Intern",
    duration: "Jan 2026 – June 2026",
    location: "Bengaluru, India",
    responsibilities: [
      "Designed and deployed scalable AWS three-tier architecture using EC2, ALB, Auto Scaling, RDS, VPC, IAM, S3, Route 53, and CloudWatch for secure application hosting.",
      "Automated end-to-end CI/CD pipelines with Jenkins, GitHub, Maven, Docker, SonarQube, and Nexus to support continuous integration and deployment.",
      "Provisioned cloud infrastructure using Terraform with reusable, version-controlled templates for compute, networking, storage, IAM, and database resources.",
      "Implemented monitoring and logging using Prometheus, Grafana, CloudWatch, and ELK Stack to improve observability, alerting, and incident response.",
      "Applied AWS and DevOps best practices for infrastructure automation, security isolation, role least-privilege, and deployment optimization."
    ],
    tech: ["AWS", "Terraform", "Docker", "Kubernetes", "Jenkins", "Prometheus", "Grafana", "ELK Stack"]
  }
];

export const educationList = [
  {
    institution: "ATME College of Engineering",
    degree: "Bachelor of Engineering (B.E.), Computer Science",
    duration: "Graduated 2022",
    location: "Mysore, Karnataka, India",
    highlights: [
      "Specialized in Computer Networks, Systems Engineering & Distributed Architecture.",
      "Hands-on project work in Cloud Computing and Linux System Administration."
    ]
  }
];

export const footerContent = {
  taglines: [
    "DevOps Engineer",
    "Cloud Infrastructure Engineer",
    "AWS Solutions Architect",
    "Kubernetes & Terraform Specialist"
  ],
  credential: "B.E. Computer Science · ATME College of Engineering, Mysore",
  copyright: `© ${new Date().getFullYear()} Amith Raj. All rights reserved.`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
