import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: 'Cloud Computing',
    description: 'Enterprise-grade cloud solutions with scalability, security, and cost optimization. We help businesses migrate to the cloud and manage cloud infrastructure.',
    icon: 'cloud',
    color: 'from-primary-500 to-primary-700',
    slug: 'cloud-computing',
    fullDescription: 'Transform your business with our comprehensive cloud computing services. We provide end-to-end cloud solutions including migration, optimization, and management across AWS, Azure, and Google Cloud platforms.',
    features: [
      'Cloud Migration & Strategy',
      'Infrastructure as Code (IaC)',
      'Multi-cloud Architecture',
      'Cloud Security & Compliance',
      'Cost Optimization',
      'Disaster Recovery',
      '24/7 Cloud Monitoring',
      'Auto-scaling Solutions'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker', 'CloudFormation', 'Ansible'],
    benefits: [
      'Reduce infrastructure costs by up to 40%',
      'Improve scalability and flexibility',
      'Enhanced security and compliance',
      'Faster time-to-market',
      '99.99% uptime guarantee'
    ],
    process: [
      'Assessment & Planning',
      'Architecture Design',
      'Migration Strategy',
      'Implementation',
      'Testing & Validation',
      'Go-Live & Support'
    ],
    pricing: 'Starting from ₹50,000/month',
    duration: '2-6 months',
    image: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'AI Solutions',
    description: 'Custom AI and machine learning solutions that help businesses automate processes, gain insights from data, and create intelligent applications.',
    icon: 'brain',
    color: 'from-secondary-500 to-secondary-700',
    slug: 'ai-solutions',
    fullDescription: 'Harness the power of artificial intelligence to transform your business operations. Our AI solutions include machine learning models, natural language processing, computer vision, and predictive analytics.',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Chatbots & Virtual Assistants',
      'Recommendation Systems',
      'Fraud Detection',
      'Process Automation'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'Hugging Face', 'Apache Spark', 'MLflow'],
    benefits: [
      'Automate repetitive tasks',
      'Improve decision making with data insights',
      'Enhance customer experience',
      'Reduce operational costs',
      'Gain competitive advantage'
    ],
    process: [
      'Data Assessment',
      'Model Development',
      'Training & Testing',
      'Integration',
      'Deployment',
      'Monitoring & Optimization'
    ],
    pricing: 'Starting from ₹75,000/project',
    duration: '3-8 months',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Web & Mobile Development',
    description: 'User-focused web and mobile applications built with the latest technologies and frameworks, delivering exceptional user experiences.',
    icon: 'smartphone',
    color: 'from-accent-500 to-accent-700',
    slug: 'web-mobile-development',
    fullDescription: 'Create stunning, responsive web applications and mobile apps that engage users and drive business growth. We specialize in modern frameworks and cutting-edge technologies.',
    features: [
      'Responsive Web Applications',
      'Progressive Web Apps (PWA)',
      'Native Mobile Apps',
      'Cross-platform Development',
      'E-commerce Solutions',
      'Content Management Systems',
      'API Development',
      'UI/UX Design'
    ],
    technologies: ['React', 'Next.js', 'React Native', 'Flutter', 'Node.js', 'TypeScript', 'GraphQL', 'MongoDB'],
    benefits: [
      'Reach customers on all devices',
      'Improve user engagement',
      'Increase conversion rates',
      'Scalable architecture',
      'Fast loading times'
    ],
    process: [
      'Requirements Analysis',
      'UI/UX Design',
      'Development',
      'Testing',
      'Deployment',
      'Maintenance & Support'
    ],
    pricing: 'Starting from ₹1,00,000/project',
    duration: '2-6 months',
    image: 'https://images.pexels.com/photos/6347701/pexels-photo-6347701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'DevOps',
    description: 'Streamlined development operations with CI/CD pipelines, infrastructure as code, and containerization for faster delivery and deployment.',
    icon: 'git-merge',
    color: 'from-primary-500 to-secondary-700',
    slug: 'devops',
    fullDescription: 'Accelerate your software delivery with our comprehensive DevOps services. We implement CI/CD pipelines, automate infrastructure, and establish monitoring systems for reliable, scalable deployments.',
    features: [
      'CI/CD Pipeline Setup',
      'Infrastructure as Code',
      'Container Orchestration',
      'Monitoring & Logging',
      'Security Integration',
      'Performance Optimization',
      'Automated Testing',
      'Release Management'
    ],
    technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Prometheus', 'Grafana'],
    benefits: [
      'Faster deployment cycles',
      'Reduced manual errors',
      'Improved collaboration',
      'Enhanced security',
      'Better system reliability'
    ],
    process: [
      'Current State Assessment',
      'Strategy Development',
      'Tool Selection',
      'Implementation',
      'Training & Handover',
      'Continuous Improvement'
    ],
    pricing: 'Starting from ₹60,000/month',
    duration: '1-4 months',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your business from cyber threats, including risk assessment, penetration testing, and security audits.',
    icon: 'shield',
    color: 'from-secondary-500 to-accent-700',
    slug: 'cybersecurity',
    fullDescription: 'Protect your digital assets with our comprehensive cybersecurity services. We provide threat assessment, security implementation, and ongoing monitoring to safeguard your business.',
    features: [
      'Security Assessment',
      'Penetration Testing',
      'Vulnerability Management',
      'Security Monitoring',
      'Incident Response',
      'Compliance Management',
      'Security Training',
      'Risk Management'
    ],
    technologies: ['Nessus', 'Metasploit', 'Wireshark', 'Splunk', 'CrowdStrike', 'Fortinet', 'Palo Alto', 'OWASP'],
    benefits: [
      'Protect against cyber threats',
      'Ensure regulatory compliance',
      'Minimize security risks',
      'Maintain business continuity',
      'Build customer trust'
    ],
    process: [
      'Security Assessment',
      'Risk Analysis',
      'Security Strategy',
      'Implementation',
      'Testing & Validation',
      'Ongoing Monitoring'
    ],
    pricing: 'Starting from ₹40,000/month',
    duration: '1-3 months',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    title: 'Enterprise IT Services',
    description: 'End-to-end IT services for enterprises, including infrastructure management, IT strategy, and digital transformation initiatives.',
    icon: 'building2',
    color: 'from-accent-500 to-primary-700',
    slug: 'enterprise-it-services',
    fullDescription: 'Comprehensive IT services designed for large enterprises. We provide strategic IT consulting, infrastructure management, and digital transformation services to drive business growth.',
    features: [
      'IT Strategy & Consulting',
      'Infrastructure Management',
      'Digital Transformation',
      'System Integration',
      'IT Support & Maintenance',
      'Vendor Management',
      'Technology Roadmap',
      'Change Management'
    ],
    technologies: ['Microsoft 365', 'SAP', 'Oracle', 'VMware', 'Citrix', 'ServiceNow', 'Salesforce', 'Power BI'],
    benefits: [
      'Streamlined IT operations',
      'Reduced operational costs',
      'Improved productivity',
      'Enhanced scalability',
      'Better decision making'
    ],
    process: [
      'IT Assessment',
      'Strategy Development',
      'Solution Design',
      'Implementation',
      'Change Management',
      'Ongoing Support'
    ],
    pricing: 'Starting from ₹1,50,000/month',
    duration: '3-12 months',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export default services;