import React, { useState, useEffect } from 'react';
import { 
  Terminal, Server, GitMerge, RotateCw, Activity, Layers, 
  ShieldCheck, ArrowRight, CheckCircle2, AlertTriangle, 
  PlayCircle, Users, MonitorSmartphone, Settings, Zap
} from 'lucide-react';

const Section = ({ id, title, children, bg = "bg-white" }) => (
  <section id={id} className={`py-20 px-6 ${bg}`}>
    <div className="max-w-6xl mx-auto">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 flex items-center gap-3">
          <div className="w-8 h-1 bg-brand-500 rounded-full"></div>
          {title}
        </h2>
      )}
      {children}
    </div>
  </section>
);

const Card = ({ title, icon: Icon, children, className = "" }) => (
  <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow ${className}`}>
    <div className="w-12 h-12 bg-brand-50 text-brand-500 rounded-xl flex items-center justify-center mb-6">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
    <div className="text-slate-600 leading-relaxed">{children}</div>
  </div>
);

function App() {
  const [activeTab, setActiveTab] = useState('principles');

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-900 tracking-tight">
            <Layers className="text-brand-500" />
            DevOps<span className="text-slate-400 font-light">101</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#what" className="hover:text-brand-500 transition-colors">What & Why</a>
            <a href="#principles" className="hover:text-brand-500 transition-colors">Principles</a>
            <a href="#lifecycle" className="hover:text-brand-500 transition-colors">Lifecycle</a>
            <a href="#tools" className="hover:text-brand-500 transition-colors">Tools</a>
            <a href="#case-study" className="hover:text-brand-500 transition-colors">Case Study</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-slate-50/50 -z-10"></div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-brand-100 text-brand-600 rounded-full text-sm font-semibold tracking-wide">
              Assignment Presentation • App 12, 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Introduction to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-indigo-600">
                DevOps
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              Improving collaboration between development and IT operations to accelerate software delivery and ensure high-quality releases.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#what" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-lg shadow-brand-500/20">
                Start Presentation <ArrowRight size={18} />
              </a>
              <a href="https://github.com" target="_blank" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-6 py-3 rounded-full font-medium transition-colors">
                <GitMerge size={18} /> View on GitHub
              </a>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-200 to-indigo-200 rounded-3xl transform rotate-3 scale-105 opacity-50 blur-xl"></div>
            <div className="bg-slate-900 rounded-3xl p-8 relative shadow-2xl border border-slate-800">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-slate-500 text-sm font-mono ml-2">bash</span>
              </div>
              <div className="font-mono text-sm space-y-3">
                <p className="text-brand-400">$ git clone application-repo</p>
                <p className="text-slate-300">Cloning into 'application-repo'...</p>
                <p className="text-brand-400">$ npm install</p>
                <p className="text-slate-300">added 142 packages in 2s</p>
                <p className="text-brand-400">$ npm run test</p>
                <p className="text-green-400">✓ All tests passed!</p>
                <p className="text-brand-400">$ docker build -t app:latest .</p>
                <p className="text-slate-300">Successfully built d4b6a7a1b0</p>
                <p className="text-brand-400">$ kubectl apply -f deployment.yaml</p>
                <p className="text-green-400">deployment.apps/app created</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What & Why */}
      <Section id="what" title="What is DevOps & Why it Emerged" bg="bg-white">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-slate-800">The Problem (Traditional Silos)</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Traditionally, Development (creating software) and Operations (deploying & maintaining it) operated in isolated silos. 
              Devs wanted to push features fast, while Ops wanted absolute system stability. This caused massive bottlenecks, finger-pointing, and slow releases.
            </p>
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
              <div className="flex items-start gap-4">
                <AlertTriangle className="text-red-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">The "Wall of Confusion"</h4>
                  <ul className="text-red-700/80 space-y-2 text-sm">
                    <li>• "It works on my machine!"</li>
                    <li>• Slow manual deployments</li>
                    <li>• High failure rates and downtime</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-slate-800">The DevOps Solution</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              DevOps is the union of people, process, and technology to continually provide value to customers. 
              It brings Dev and Ops together to automate the pipeline from code commit to production deployment.
            </p>
            <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-brand-900 mb-2">The DevOps Outcome</h4>
                  <ul className="text-brand-700/80 space-y-2 text-sm">
                    <li>• Frequent, smaller releases</li>
                    <li>• Automated testing and deployment</li>
                    <li>• Shared responsibility and culture</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Principles */}
      <Section id="principles" title="Core Principles of DevOps" bg="bg-slate-50">
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Culture & Collaboration" icon={Users}>
            Shared responsibility between dev and ops. Breaking down silos to work towards a common goal of reliable, rapid delivery.
          </Card>
          <Card title="Automation (CI/CD)" icon={Zap}>
            Removing manual toil. Continuous Integration (CI) and Continuous Delivery (CD) make building, testing, and deploying invisible and fast.
          </Card>
          <Card title="Monitoring & Feedback" icon={Activity}>
            If you can't measure it, you can't improve it. Continuous feedback loops ensure teams know immediately if something breaks in production.
          </Card>
        </div>
      </Section>

      {/* Lifecycle */}
      <Section id="lifecycle" title="The DevOps Lifecycle" bg="bg-slate-900">
        <div className="text-center mb-12">
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            DevOps represents a continuous loop of constant improvement and delivery, often depicted as an infinity symbol.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { phase: "Plan", desc: "Define features & task tracking", icon: <Layers size={20}/> },
            { phase: "Code", desc: "Write & review code, version control", icon: <Terminal size={20}/> },
            { phase: "Build", desc: "Compile code & build artifacts", icon: <Settings size={20}/> },
            { phase: "Test", desc: "Automated test execution", icon: <ShieldCheck size={20}/> },
            { phase: "Release", desc: "Version artifacts for deployment", icon: <GitMerge size={20}/> },
            { phase: "Deploy", desc: "Push to staging or production", icon: <PlayCircle size={20}/> },
            { phase: "Operate", desc: "Infrastructure management & scaling", icon: <Server size={20}/> },
            { phase: "Monitor", desc: "Collect logs & user feedback", icon: <MonitorSmartphone size={20}/> },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-brand-500 transition-colors group">
              <div className="flex items-center gap-3 mb-3 text-white">
                <div className="text-brand-400 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-bold">{item.phase}</h4>
              </div>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Tools Ecosystem */}
      <Section id="tools" title="Popular DevOps Tools" bg="bg-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border border-slate-100 rounded-3xl bg-slate-50">
            <h4 className="font-bold text-lg mb-4 text-slate-800 flex items-center gap-2">
              <GitMerge className="text-brand-500" /> Version Control
            </h4>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium">Git</span>
              <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium">GitHub</span>
              <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium">GitLab</span>
            </div>
          </div>
          
          <div className="p-6 border border-slate-100 rounded-3xl bg-slate-50">
            <h4 className="font-bold text-lg mb-4 text-slate-800 flex items-center gap-2">
              <RotateCw className="text-brand-500" /> CI/CD Automation
            </h4>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium">Jenkins</span>
              <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium">GitHub Actions</span>
              <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium">CircleCI</span>
            </div>
          </div>

          <div className="p-6 border border-slate-100 rounded-3xl bg-slate-50">
            <h4 className="font-bold text-lg mb-4 text-slate-800 flex items-center gap-2">
              <Server className="text-brand-500" /> Containers & Orchestration
            </h4>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium">Docker</span>
              <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium">Kubernetes</span>
              <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium">AWS ECS</span>
            </div>
          </div>

          <div className="p-6 border border-slate-100 rounded-3xl bg-slate-50">
            <h4 className="font-bold text-lg mb-4 text-slate-800 flex items-center gap-2">
              <Settings className="text-brand-500" /> Config & IaC
            </h4>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium">Terraform</span>
              <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium">Ansible</span>
              <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium">Chef</span>
            </div>
          </div>

          <div className="p-6 border border-slate-100 rounded-3xl bg-slate-50 lg:col-span-2">
            <h4 className="font-bold text-lg mb-4 text-slate-800 flex items-center gap-2">
              <Activity className="text-brand-500" /> Monitoring & Logging
            </h4>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium">Prometheus</span>
              <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium">Grafana</span>
              <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium">ELK Stack</span>
              <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium">Datadog</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits and Challenges */}
      <Section id="benefits" title="Benefits vs Challenges" bg="bg-slate-50">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center gap-3">
              <div className="bg-green-100 text-green-600 p-2 rounded-lg"><CheckCircle2 size={24} /></div>
              Key Benefits
            </h3>
            <ul className="space-y-4">
              {[
                "Speed to Market: Deliver features to users faster.",
                "Reliability: Automated testing means fewer bugs.",
                "Scale: Infrastructure as Code allows scaling easily.",
                "Collaboration: Happier, more productive teams.",
                "Security (DevSecOps): Security built into the pipeline."
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center gap-3">
              <div className="bg-orange-100 text-orange-600 p-2 rounded-lg"><AlertTriangle size={24} /></div>
              Adoption Challenges
            </h3>
            <ul className="space-y-4">
              {[
                "Culture Shift: People hate changing how they work.",
                "Tool Overload: Too many complex tools to learn.",
                "Legacy Systems: Hard to automate monolithic legacy code.",
                "Security Compliances: Strict industries require heavy audits.",
                "Skills Gap: High demand for experienced DevOps engineers."
              ].map((challenge, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Case Study */}
      <Section id="case-study" title="Real-World Case Study: Netflix" bg="bg-slate-900">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-bold text-white">How Netflix Uses DevOps</h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              Netflix is fully cloud-native (AWS) and operates essentially as a continuous delivery machine. 
              They deploy code thousands of times a day into production.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-400 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Microservices Architecture</strong>
                  <span className="text-slate-400 text-sm">Hundreds of independent services instead of one monolith.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-400 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Chaos Engineering (Chaos Monkey)</strong>
                  <span className="text-slate-400 text-sm">Randomly bringing down production instances to guarantee the system is resilient auto-recovers.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-400 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Spinnaker</strong>
                  <span className="text-slate-400 text-sm">An open-source, multi-cloud continuous delivery platform developed internally by Netflix.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-slate-800 p-8 rounded-3xl border border-slate-700 w-full text-center">
            <div className="text-6xl font-black text-red-600 mb-6 drop-shadow-md tracking-tighter">NETFLIX</div>
            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="bg-slate-900 p-4 rounded-xl">
                <div className="text-2xl font-bold text-white mb-1">Thousands</div>
                <div className="text-slate-400 text-sm">Deployments daily</div>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl">
                <div className="text-2xl font-bold text-white mb-1">99.99%</div>
                <div className="text-slate-400 text-sm">Uptime Target</div>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl">
                <div className="text-2xl font-bold text-white mb-1">Global</div>
                <div className="text-slate-400 text-sm">AWS Footprint</div>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl">
                <div className="text-2xl font-bold text-white mb-1">Fail Fast</div>
                <div className="text-slate-400 text-sm">Engineering Culture</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Summary & Footer */}
      <footer className="bg-white py-16 px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Layers className="text-brand-500 w-12 h-12 mx-auto" />
          <h2 className="text-3xl font-bold text-slate-800">Summary & Q&A</h2>
          <p className="text-xl text-slate-600">
            DevOps represents a fundamental shift in how IT functions. By prioritizing collaboration, 
            extensive automation, and continuous feedback, organizations can build and deliver better 
            software, faster.
          </p>
          <div className="bg-brand-50 rounded-2xl p-8 max-w-2xl mx-auto border border-brand-100">
            <h4 className="font-bold text-xl text-slate-800 mb-4">Any Questions?</h4>
            <p className="text-slate-600 text-sm">
              Thank you for watching our presentation! We are happy to answer any questions regarding 
              CI/CD, Monitoring tools, or how to get started implementing DevOps practices.
            </p>
          </div>
          <div className="text-slate-400 text-sm pt-8 flex items-center justify-center gap-2">
            Built with React & Tailwind CSS for easy CI/CD Deployment to GitHub Pages / Vercel
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;