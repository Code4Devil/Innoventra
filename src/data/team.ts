import { TeamMember } from '../types';

const team: TeamMember[] = [
  {
    id: 1,
    name: 'Alex Morgan',
    position: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'With over 15 years of experience in technology leadership, Alex has led digital transformation initiatives for Fortune 500 companies before founding Innoventra.',
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 2,
    name: 'Sarah Chen',
    position: 'CTO',
    image: 'https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Former Senior Engineer at Google, Sarah brings extensive expertise in cloud architecture, AI, and enterprise software development.',
    socialLinks: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    position: 'Head of AI & ML',
    image: 'https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'PhD in Computer Science specializing in machine learning, Michael leads our AI initiatives and has published numerous papers on deep learning technologies.',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: 4,
    name: 'Priya Sharma',
    position: 'Lead DevOps Engineer',
    image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Certified AWS Solutions Architect and Kubernetes expert, Priya has transformed infrastructure operations for dozens of enterprise clients.',
    socialLinks: {
      linkedin: '#',
      github: '#'
    }
  }
];

export default team;