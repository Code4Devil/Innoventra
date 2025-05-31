import React from 'react';
import { ArrowRight } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    location: 'San Francisco, CA (Hybrid)',
    type: 'Full-time',
    salary: '$130,000 - $180,000',
    department: 'Engineering',
    level: 'Senior',
    description: 'We are seeking an experienced Full Stack Developer to join our engineering team. The ideal candidate will have strong experience with React, Node.js, and cloud technologies.',
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "5+ years of experience in full-stack development",
      "Strong proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, GCP, or Azure)",
      "Excellent problem-solving and communication skills",
      "Experience with microservices architecture",
      "Knowledge of DevOps practices and tools"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "401(k) with company match",
      "Flexible PTO policy",
      "Remote work options",
      "Professional development budget",
      "Company-sponsored events and team building"
    ]
  },
  {
    id: 2,
    title: 'AI/ML Engineer',
    location: 'Remote (US)',
    type: 'Full-time',
    salary: '$140,000 - $200,000',
    department: 'AI Solutions',
    level: 'Senior',
    description: 'Join our AI team to develop cutting-edge machine learning solutions for enterprise clients. You will work on challenging problems in natural language processing, computer vision, and predictive analytics.',
    requirements: [
      "Master's or Ph.D. in Computer Science, AI, or related field",
      "3+ years of experience in machine learning engineering",
      "Strong background in deep learning frameworks (TensorFlow, PyTorch)",
      "Experience with MLOps and model deployment",
      "Proficiency in Python and data science libraries",
      "Strong mathematical and statistical foundation",
      "Published research or significant industry projects"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "401(k) with company match",
      "Flexible PTO policy",
      "Remote work options",
      "Conference attendance budget",
      "Research and publication support"
    ]
  }
];

const JobsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Join Our Team
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Help us shape the future of technology. We're always looking for talented individuals to join our growing team.
          </p>
        </div>

        <div className="grid gap-8">
          {jobs.map((job) => (
            <div key={job.id} className="glass rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 rounded-full text-sm bg-primary-500/20 text-primary-400">
                      {job.location}
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm bg-secondary-500/20 text-secondary-400">
                      {job.type}
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm bg-accent-500/20 text-accent-400">
                      {job.department}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold gradient-text mb-1">{job.salary}</div>
                  <div className="text-sm text-neutral-400">{job.level} Level</div>
                </div>
              </div>

              <p className="text-neutral-300 mb-6">{job.description}</p>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-lg font-bold mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight size={16} className="text-primary-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-neutral-300">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight size={16} className="text-secondary-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-neutral-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-end">
                <a href="#apply" className="btn btn-primary">
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div id="apply" className="mt-16 glass rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Apply for Position</h2>
          <form className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-medium mb-2">Position</label>
              <select
                id="position"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              >
                <option value="">Select a position</option>
                {jobs.map(job => (
                  <option key={job.id} value={job.title}>{job.title}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="resume" className="block text-sm font-medium mb-2">Resume/CV</label>
              <input
                type="file"
                id="resume"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                accept=".pdf,.doc,.docx"
                required
              />
            </div>

            <div>
              <label htmlFor="cover" className="block text-sm font-medium mb-2">Cover Letter</label>
              <textarea
                id="cover"
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              ></textarea>
            </div>

            <div>
              <button type="submit" className="btn btn-primary">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;