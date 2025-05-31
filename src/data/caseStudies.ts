import { CaseStudy } from '../types';

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'AI-Powered Customer Service Platform',
    client: 'Global E-commerce Brand',
    description: 'Developed an AI-powered customer service platform that reduced response times by 60% and improved customer satisfaction by 35%.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'AI Solutions',
    technologies: ['Python', 'TensorFlow', 'React', 'AWS', 'GraphQL'],
    slug: 'ai-powered-customer-service-platform',
    fullDescription: 'We developed a comprehensive AI-powered customer service platform for a leading global e-commerce brand, transforming their customer support operations through intelligent automation and machine learning.',
    challenge: 'The client was struggling with high customer service costs, long response times, and inconsistent service quality. Their traditional support system could not scale with their rapid business growth, leading to customer dissatisfaction and increased operational costs.',
    solution: 'We implemented an AI-powered platform featuring natural language processing, sentiment analysis, and automated ticket routing. The system includes chatbots for instant responses, predictive analytics for proactive support, and seamless human handoff when needed.',
    results: [
      '60% reduction in average response time',
      '35% improvement in customer satisfaction scores',
      '45% reduction in support operational costs',
      '80% of queries resolved automatically',
      '24/7 multilingual support capability'
    ],
    duration: '8 months',
    teamSize: '12 specialists',
    industry: 'E-commerce',
    projectType: 'AI Platform Development',
    gallery: [
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  },
  {
    id: 2,
    title: 'Cloud Migration & Infrastructure Modernization',
    client: 'Financial Services Company',
    description: 'Successfully migrated legacy systems to AWS cloud, reducing operational costs by 40% and improving system reliability with 99.99% uptime.',
    image: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Cloud Computing',
    technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD'],
    slug: 'cloud-migration-infrastructure-modernization',
    fullDescription: 'We executed a comprehensive cloud migration and infrastructure modernization project for a major financial services company, transforming their legacy on-premises infrastructure to a modern, scalable cloud architecture.',
    challenge: 'The client had outdated on-premises infrastructure that was expensive to maintain, difficult to scale, and posed security risks. They needed to modernize while ensuring zero downtime and maintaining strict financial industry compliance.',
    solution: 'We designed and implemented a phased migration strategy using AWS services, containerization with Docker and Kubernetes, and Infrastructure as Code with Terraform. The solution included automated CI/CD pipelines and comprehensive monitoring.',
    results: [
      '40% reduction in operational costs',
      '99.99% system uptime achieved',
      '75% faster deployment cycles',
      '50% improvement in system performance',
      'Full regulatory compliance maintained'
    ],
    duration: '12 months',
    teamSize: '15 specialists',
    industry: 'Financial Services',
    projectType: 'Cloud Migration',
    gallery: [
      'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  },
  {
    id: 3,
    title: 'Mobile Banking Application',
    client: 'Leading National Bank',
    description: 'Built a secure, high-performance mobile banking application with biometric authentication, resulting in 2.5 million downloads in the first quarter.',
    image: 'https://images.pexels.com/photos/6347701/pexels-photo-6347701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web & Mobile Development',
    technologies: ['React Native', 'Node.js', 'GraphQL', 'MongoDB', 'AWS'],
    slug: 'mobile-banking-application',
    fullDescription: 'We developed a cutting-edge mobile banking application for one of India\'s leading national banks, providing customers with secure, convenient, and feature-rich banking services on their mobile devices.',
    challenge: 'The bank needed to modernize their digital presence and provide customers with a secure, user-friendly mobile banking experience. They required advanced security features, real-time transactions, and seamless integration with existing banking systems.',
    solution: 'We built a comprehensive mobile banking app using React Native for cross-platform compatibility, implemented biometric authentication, real-time notifications, and integrated advanced security measures including end-to-end encryption and fraud detection.',
    results: [
      '2.5 million downloads in first quarter',
      '95% user satisfaction rating',
      '70% increase in digital transactions',
      '50% reduction in branch visits',
      'Zero security incidents reported'
    ],
    duration: '10 months',
    teamSize: '18 specialists',
    industry: 'Banking & Finance',
    projectType: 'Mobile Application',
    gallery: [
      'https://images.pexels.com/photos/6347701/pexels-photo-6347701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  },
  {
    id: 4,
    title: 'DevOps Transformation',
    client: 'Healthcare Technology Provider',
    description: 'Implemented DevOps practices and CI/CD pipelines, reducing deployment time from days to minutes and increasing release frequency by 300%.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'DevOps',
    technologies: ['Jenkins', 'Kubernetes', 'Docker', 'Ansible', 'Prometheus'],
    slug: 'devops-transformation',
    fullDescription: 'We led a comprehensive DevOps transformation for a major healthcare technology provider, revolutionizing their software development and deployment processes to achieve faster, more reliable releases.',
    challenge: 'The client had manual deployment processes that took days to complete, frequent production issues, and poor collaboration between development and operations teams. This resulted in delayed releases and customer dissatisfaction.',
    solution: 'We implemented a complete DevOps pipeline with automated CI/CD, containerization using Docker and Kubernetes, infrastructure as code, and comprehensive monitoring. We also established DevOps culture and practices across teams.',
    results: [
      '300% increase in release frequency',
      '95% reduction in deployment time',
      '80% decrease in production incidents',
      '60% improvement in team productivity',
      '99.9% application uptime achieved'
    ],
    duration: '6 months',
    teamSize: '10 specialists',
    industry: 'Healthcare Technology',
    projectType: 'DevOps Implementation',
    gallery: [
      'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  }
];

export default caseStudies;