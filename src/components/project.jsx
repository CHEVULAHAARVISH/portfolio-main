import React, { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import { Player } from '@lordicon/react';
import Xletter from '../assets/x-letter.svg'

Modal.setAppElement("#root"); // To avoid accessibility warning
const BRIEFCASE = require('../assets/brifecase.json');

const Projects = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [openWork, setOpenWork] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const briefRef = useRef(null);

    useEffect(() => {
        briefRef.current?.playFromBeginning();
    }, [])

    const work = {
        type: "work",
        title: "Temperstack",
        description: "Founding Engineer – AI Infrastructure & Reliability Engineering",
        tooltip: "Founding Engineer (Full-Stack)",
        date: "Oct 2023 – Present",
        description1: (
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              {/* Impact Metrics */}
              <section className="mb-6 bg-gray-50 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold mb-3 text-[#E16349]">Impact Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                          <div className="text-2xl font-bold text-[#E16349]">45%</div>
                          <div className="text-gray-600">MTTR Reduction</div>
                      </div>
                      <div className="text-center">
                          <div className="text-2xl font-bold text-[#E16349]">60%</div>
                          <div className="text-gray-600">Faster Root Cause Analysis</div>
                      </div>
                      <div className="text-center">
                          <div className="text-2xl font-bold text-[#E16349]">20%</div>
                          <div className="text-gray-600">Infrastructure Reliability Boost</div>
                      </div>
                  </div>
              </section>

              {/* Core Responsibilities */}
              <section className="mb-6">
                  <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-[#E16349]">Core Responsibilities</h2>
                  <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-3">
                      <li>
                          Designed and deployed AI-driven SRE agents using <span className="font-semibold text-blue-600">LangGraph</span>, <span className="font-semibold text-blue-600">Python daemons</span>, and <span className="font-semibold text-blue-600">vector databases</span> to autonomously resolve incidents based on real-time telemetry and contextual runbooks.
                      </li>
                      <li>
                          Built RAG-powered knowledge systems by indexing past incidents and solutions into vector stores, delivering contextual suggestions during outages.
                      </li>
                      <li>
                          Integrated Python daemons with AI agents via <span className="font-semibold text-blue-600">WebSockets</span> for real-time orchestration of recovery workflows.
                      </li>
                      <li>
                          Developed seamless integrations with <span className="font-semibold text-blue-600">AWS, GCP, and Azure</span> for dynamic resource mapping and enriched observability.
                      </li>
                      <li>
                          Consolidated telemetry pipelines across tools like <span className="font-semibold text-blue-600">Datadog, New Relic, AppDynamics, Splunk</span> to enable unified monitoring and incident response.
                      </li>
                  </ul>
              </section>

              {/* Engineering Innovations */}
              <section className="mb-6">
                  <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-[#E16349]">Technical Innovations</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                          <h3 className="font-semibold text-gray-800 mb-2">Performance Engineering</h3>
                          <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Cached S3 metadata in <strong>Redis</strong> to reduce latency</li>
                              <li>• Tuned <strong>PostgreSQL</strong> queries/indexes for alert pipelines</li>
                              <li>• Automated 100% alert coverage with zero manual setup</li>
                          </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                          <h3 className="font-semibold text-gray-800 mb-2">Zero-Downtime Operations</h3>
                          <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Built tooling to migrate from PagerDuty/Opsgenie without downtime</li>
                              <li>• Powered real-time incident triggers via WebSocket infrastructure</li>
                              <li>• Eliminated alert fatigue using intelligent deduplication & correlation</li>
                          </ul>
                      </div>
                  </div>
              </section>

              {/* Projects */}
              <section>
                  <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-[#E16349]">Flagship Projects</h2>
                  <div className="space-y-5">
                      <div className="border-l-4 border-[#E16349] pl-4">
                          <h3 className="font-semibold text-gray-800">Autonomous AI SRE Agent</h3>
                          <p className="text-gray-700 text-sm leading-relaxed mt-1">
                              <strong>Impact:</strong> Reduced MTTR by 45%. Built LangGraph-based agent that retrieves vectorized context and executes automated resolution workflows. Connected with APMs, cloud APIs, and internal KBs to close the loop on incident resolution.
                          </p>
                          <div className="mt-2 text-xs text-gray-600">
                              <strong>Stack:</strong> LangGraph, Python, Vector DBs, WebSockets, Cloud APIs
                          </div>
                      </div>

                      <div className="border-l-4 border-blue-500 pl-4">
                          <h3 className="font-semibold text-gray-800">Alert Correlation Engine</h3>
                          <p className="text-gray-700 text-sm leading-relaxed mt-1">
                              <strong>Impact:</strong> 60% faster RCA. Linked infrastructure metrics and APM signals using temporal analysis and service topology. Suppressed noise and surfaced high-confidence root causes.
                          </p>
                          <div className="mt-2 text-xs text-gray-600">
                              <strong>Stack:</strong> Python, PostgreSQL, Redis, Vector Database, APM APIs
                          </div>
                      </div>

                      <div className="border-l-4 border-green-500 pl-4">
                          <h3 className="font-semibold text-gray-800">Cross-Cloud Observability Platform</h3>
                          <p className="text-gray-700 text-sm leading-relaxed mt-1">
                              <strong>Impact:</strong> Boosted reliability by 20%. Unified logging and monitoring across AWS, Azure, and GCP. Shipped auto-alert pipelines and anomaly dashboards using React.
                          </p>
                          <div className="mt-2 text-xs text-gray-600">
                              <strong>Stack:</strong> React, Redux, Cloud APIs
                          </div>
                      </div>

                      <div className="border-l-4 border-purple-500 pl-4">
                          <h3 className="font-semibold text-gray-800">Migration & On-Call System</h3>
                          <p className="text-gray-700 text-sm leading-relaxed mt-1">
                              <strong>Impact:</strong> Seamlessly migrated enterprise clients from legacy tools. Built an end-to-end suite for alerting, escalations, on-call rotations, and service ownership.
                          </p>
                          <div className="mt-2 text-xs text-gray-600">
                              <strong>Stack:</strong> Python, Flask
                          </div>
                      </div>
                  </div>
              </section>

              {/* Stack */}
              <section className="mt-6 bg-gray-50 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold mb-3 text-[#E16349]">Technology Stack</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                          <h4 className="font-semibold text-gray-800 mb-2">AI/ML</h4>
                          <div className="text-gray-600">LangGraph, LangChain, Vector DBs, RAG, LangSmith</div>
                      </div>
                      <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Backend</h4>
                          <div className="text-gray-600">Python, Flask, WebSockets, Daemons</div>
                      </div>
                      <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Data</h4>
                          <div className="text-gray-600">PostgreSQL, Redis, InfluxDB, S3</div>
                      </div>
                      <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Cloud & Observability</h4>
                          <div className="text-gray-600">AWS, GCP, Azure, Datadog, New Relic, Splunk</div>
                      </div>
                  </div>
              </section>
          </div>
        ),
        icon: "briefcase",
        year: "2023 – Present"
    };



    const projects = [
        {
            id: 1,
            title: "Ditto - Smart Delivery Platform",
            type: "project",
            description1: (
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  {/* Overview Section */}
                  <section className="mb-6">
                      <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-[#E16349]">
                          Overview
                      </h2>
                      <p className="text-gray-700 text-sm leading-relaxed">
                          Ditto is an innovative delivery platform developed as a final year project that combines
                          modern web technologies with advanced security features. The platform implements a unique
                          dual-verification system using OTP authentication and QR code robot verification to ensure
                          secure and reliable package delivery.
                      </p>
                  </section>

                  {/* Technical Architecture */}
                  <section className="mb-6">
                      <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-[#E16349]">
                          Technical Architecture
                      </h2>
                      <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-3">
                          <li>
                              <span className="font-semibold">Backend Framework</span>: Built using
                              <strong> Flask</strong> for lightweight, scalable web service architecture
                          </li>
                          <li>
                              <span className="font-semibold">Database & Authentication</span>: Integrated
                              <strong> Firebase</strong> for real-time database management and secure user authentication
                          </li>
                          <li>
                              <span className="font-semibold">Security Layer</span>: Implemented dual verification
                              system combining OTP and QR code validation for enhanced security
                          </li>
                          <li>
                              <span className="font-semibold">Robot Integration</span>: Developed automated
                              verification system for package handling and delivery confirmation
                          </li>
                      </ul>
                  </section>

                  {/* Key Features */}
                  <section>
                      <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-[#E16349]">
                          Key Features & Innovation
                      </h2>
                      <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-3">
                          <li>
                              <span className="font-semibold">Dual-Factor Verification</span>: OTP + QR code
                              system ensures package security and prevents unauthorized access
                          </li>
                          {/*<li>*/}
                          {/*    <span className="font-semibold">Real-time Tracking</span>: Firebase integration*/}
                          {/*    enables live delivery status updates and notifications*/}
                          {/*</li>*/}
                          <li>
                              <span className="font-semibold">Automated Robot Verification</span>: Robotics
                              integration for autonomous package handling and verification
                          </li>
                          <li>
                              <span className="font-semibold">Scalable Architecture</span>: Flask-based backend
                              designed for handling multiple concurrent delivery requests
                          </li>
                          <li>
                              <span className="font-semibold">User-Friendly Interface</span>: Intuitive design
                              for seamless user experience across delivery workflow
                          </li>
                      </ul>
                  </section>
              </div>
            ),
            tooltip: "Smart Delivery Platform with Robot Verification",
            githubLink: "https://github.com/CHEVULAHAARVISH/DITTO",
            techStack: ['Flask', 'Firebase', 'Python', 'QR Code', 'OTP Authentication', 'Robotics']
        },
        {
            id: 3,
            title: "NikeyLanding - Modern UI Showcase",
            type: "project",
            description1: (
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  {/* Overview Section */}
                  <section className="mb-6">
                      <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-[#E16349]">
                          Overview
                      </h2>
                      <p className="text-gray-700 text-sm leading-relaxed">
                          NikeyLanding is a responsive, modern landing page that showcases advanced
                          UI/UX design principles. Built with React and Tailwind CSS, this project
                          demonstrates expertise in creating visually appealing, performant web interfaces
                          with contemporary design patterns.
                      </p>
                  </section>

                  {/* Design Philosophy */}
                  <section className="mb-6">
                      <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-[#E16349]">
                          Design & Technology
                      </h2>
                      <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-3">
                          <li>
                              <span className="font-semibold">Modern React Architecture</span>: Component-based
                              architecture with hooks and functional components for optimal performance
                          </li>
                          <li>
                              <span className="font-semibold">Tailwind CSS Framework</span>: Utility-first CSS
                              framework enabling rapid, consistent styling and responsive design
                          </li>
                          <li>
                              <span className="font-semibold">Responsive Design</span>: Mobile-first approach
                              ensuring seamless experience across all device sizes
                          </li>
                          <li>
                              <span className="font-semibold">Performance Optimized</span>: Lightweight,
                              fast-loading interface with optimized assets and code splitting
                          </li>
                      </ul>
                  </section>

                  {/* Features */}
                  <section>
                      <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-[#E16349]">
                          UI/UX Features
                      </h2>
                      <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-3">
                          <li>
                              <span className="font-semibold">Contemporary Design Language</span>: Modern
                              typography, spacing, and color schemes following current design trends
                          </li>
                          <li>
                              <span className="font-semibold">Interactive Elements</span>: Smooth animations
                              and micro-interactions enhancing user engagement
                          </li>
                          <li>
                              <span className="font-semibold">Cross-Browser Compatibility</span>: Consistent
                              rendering across all major browsers and platforms
                          </li>
                          <li>
                              <span className="font-semibold">Accessibility Standards</span>: WCAG compliant
                              design ensuring inclusive user experience
                          </li>
                          <li>
                              <span className="font-semibold">SEO Optimized</span>: Semantic HTML structure
                              and meta optimization for better search visibility
                          </li>
                      </ul>
                  </section>
              </div>
            ),
            tooltip: "Responsive React Landing Page",
            hostedLink: "https://nikeylanding.netlify.app",
            techStack: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5', 'Responsive Design', 'UI/UX']
        },
        // {
        //     id: 2,
        //     title: "Web3 Wallet DApp",
        //     type: "project",
        //     description1: (
        //       <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        //           {/* Overview Section */}
        //           <section className="mb-6">
        //               <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-[#E16349]">
        //                   Overview
        //               </h2>
        //               <p className="text-gray-700 text-sm leading-relaxed">
        //                   A decentralized application (DApp) that enables users to perform secure Ethereum
        //                   transactions through MetaMask integration. This project demonstrates proficiency
        //                   in blockchain development and Web3 technologies, providing a seamless interface
        //                   for cryptocurrency transfers.
        //               </p>
        //           </section>
        //
        //           {/* Technical Implementation */}
        //           <section className="mb-6">
        //               <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-[#E16349]">
        //                   Technical Implementation
        //               </h2>
        //               <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-3">
        //                   <li>
        //                       <span className="font-semibold">Smart Contracts</span>: Developed using
        //                       <strong> Solidity</strong> for secure and efficient blockchain transactions
        //                   </li>
        //                   <li>
        //                       <span className="font-semibold">Frontend Integration</span>: Built with
        //                       <strong> JavaScript</strong> and Web3.js for seamless blockchain interaction
        //                   </li>
        //                   <li>
        //                       <span className="font-semibold">Wallet Integration</span>: MetaMask integration
        //                       for secure wallet connection and transaction signing
        //                   </li>
        //                   <li>
        //                       <span className="font-semibold">Ethereum Network</span>: Deployed on Ethereum
        //                       testnet for development and testing purposes
        //                   </li>
        //               </ul>
        //           </section>
        //
        //           {/* Features */}
        //           <section>
        //               <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-[#E16349]">
        //                   Key Features
        //               </h2>
        //               <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-3">
        //                   <li>
        //                       <span className="font-semibold">Secure ETH Transfers</span>: Enable users to
        //                       send and receive Ethereum with full transaction security
        //                   </li>
        //                   <li>
        //                       <span className="font-semibold">MetaMask Integration</span>: Seamless wallet
        //                       connection and transaction approval workflow
        //                   </li>
        //                   <li>
        //                       <span className="font-semibold">Transaction History</span>: Real-time tracking
        //                       of all blockchain transactions and their status
        //                   </li>
        //                   <li>
        //                       <span className="font-semibold">Gas Fee Optimization</span>: Smart gas fee
        //                       calculation for cost-effective transactions
        //                   </li>
        //                   <li>
        //                       <span className="font-semibold">Responsive UI</span>: Clean, intuitive interface
        //                       designed for optimal user experience
        //                   </li>
        //               </ul>
        //           </section>
        //       </div>
        //     ),
        //     tooltip: "Decentralized Ethereum Wallet Application",
        //     githubLink: "https://github.com/haarvish/web3-wallet",
        //     techStack: ['Solidity', 'JavaScript', 'Web3.js', 'MetaMask', 'Ethereum', 'Smart Contracts']
        // },
        {
            id: 4,
            title: "VirtualHQ - Spatial Collaboration Platform",
            type: "project",
            description1: (
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  {/* Overview Section */}
                  <section className="mb-6">
                      <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-[#E16349]">
                          Overview
                      </h2>
                      <p className="text-gray-700 text-sm leading-relaxed">
                          VirtualHQ is an innovative virtual collaboration platform currently in development.
                          The platform creates immersive digital workspaces with spatial proximity features,
                          enabling teams to collaborate naturally in a virtual environment. Built with modern
                          real-time technologies for seamless remote collaboration.
                      </p>
                  </section>

                  {/* Technical Architecture */}
                  <section className="mb-6">
                      <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-[#E16349]">
                          Technical Architecture
                      </h2>
                      <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-3">
                          <li>
                              <span className="font-semibold">Real-time Communication</span>:
                              <strong> WebSockets</strong> implementation for instant messaging and
                              collaborative features
                          </li>
                          <li>
                              <span className="font-semibold">High-Performance Caching</span>:
                              <strong> Redis</strong> integration for session management and
                              real-time data synchronization
                          </li>
                          <li>
                              <span className="font-semibold">Spatial Proximity Engine</span>: Custom
                              algorithm for distance-based audio/video quality and interaction features
                          </li>
                          <li>
                              <span className="font-semibold">Scalable Infrastructure</span>: Designed
                              for handling multiple concurrent virtual rooms and user sessions
                          </li>
                      </ul>
                  </section>

                  {/* Planned Features */}
                  <section>
                      <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-[#E16349]">
                          Core Features (In Development)
                      </h2>
                      <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-3">
                          <li>
                              <span className="font-semibold">Spatial Audio/Video</span>: Proximity-based
                              communication where audio/video quality changes based on virtual distance
                          </li>
                          <li>
                              <span className="font-semibold">Virtual Workspaces</span>: Customizable
                              digital environments for different team collaboration needs
                          </li>
                          <li>
                              <span className="font-semibold">Real-time Collaboration</span>: Shared
                              whiteboards, documents, and interactive tools for team productivity
                          </li>
                          <li>
                              <span className="font-semibold">Avatar System</span>: Personalized avatars
                              with movement and interaction capabilities in virtual space
                          </li>
                          <li>
                              <span className="font-semibold">Room Management</span>: Dynamic creation
                              and management of virtual meeting rooms and collaborative spaces
                          </li>
                      </ul>
                  </section>

                  {/* Development Status */}
                  <section className="mt-6 bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">🚧 Development Status</h3>
                      <p className="text-sm text-gray-600">
                          This project is currently in active development, focusing on core real-time
                          communication features and spatial proximity algorithms. Expected to showcase
                          advanced WebSocket implementation and Redis optimization techniques.
                      </p>
                  </section>
              </div>
            ),
            tooltip: "Virtual Collaboration Space (In Progress)",
            techStack: ['WebSockets', 'Redis', 'Python', 'Spatial Audio', 'Real-time Collaboration', 'JavaScript']
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedProject(null);
    };

    return (
        <div className="h-full w-full lg:w-[100%] my-1">
            <div className="flex flex-col gap-4 h-full xl:flex-row 2xl:flex-row lg:flex-row">
                {/* Work Experience Card */}
                <div className="flex flex-1 bg-[#eaeaea] p-5 rounded-[25px] border border-[#eaeaea] hover:scale-105 shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out">
                    <div className="flex flex-col h-full justify-between">
                        {/* Title & Icon */}
                        <div className="flex gap-3 items-center">
                            <div className="p-2 bg-white rounded-full w-12 h-12 flex items-center justify-center">
                                <Player
                                    ref={briefRef}
                                    size={24}
                                    icon={BRIEFCASE}
                                    onComplete={() => briefRef.current?.playFromBeginning()}
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#333]">
                                    {work.title}
                                </h3>
                                <p className="text-sm text-[#666]">{work.tooltip}</p>
                            </div>
                        </div>

                        {/* Role Info */}
                        <div className="mt-2 text-sm text-[#444]">
                            <span className="font-semibold">{work.year}</span>
                            <br />
                            Backend Engineer | Go-To Engineer | Security | Scalability | App
                        </div>

                        {/* Button */}
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={() => setOpenWork(true)}
                                className="flex-1 px-4 py-2 text-sm font-medium text-white bg-[#E16349] rounded-full hover:bg-[#f56950] transition-colors duration-300"
                            >
                                Dive In
                            </button>
                        </div>
                    </div>
                </div>

                {/* Projects Section */}
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="flex flex-1 bg-white p-6 rounded-[25px] border border-[#eaeaea] hover:scale-105 shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out min-h-[280px] max-w-[480px]"
                  >
                      <div className="flex flex-col h-full justify-between w-full">
                          {/* Project Title */}
                          <div className="flex gap-3 items-start">
                              <div className="flex-1">
                                  <h3 className="text-lg font-semibold text-[#333] leading-tight mb-2 line-clamp-2">
                                      {project.title}
                                  </h3>
                              </div>
                          </div>

                          {/* Project Description - Extract meaningful content */}
                          <div className="mt-2 text-sm text-[#444] flex-1">
                              <div className="mb-3">
                                <span className="font-semibold text-[#E16349]">
                                    {project.tooltip}
                                </span>
                              </div>

                              {/*Extract key features or description*/}
                              <div className="text-xs text-gray-600 leading-relaxed line-clamp-4">
                                  {project.id === 1 && (
                                    "Smart delivery platform with dual OTP and QR code verification for secure package handling."
                                  )}
                                  {project.id === 2 && (
                                    "Decentralized wallet app for secure Ethereum transactions via MetaMask integration."
                                  )}
                                  {project.id === 3 && (
                                    "Modern responsive landing page built with React and Tailwind CSS."
                                  )}
                                  {project.id === 4 && (
                                    "Virtual collaboration platform with spatial audio for immersive team workspaces."
                                  )}
                              </div>
                          </div>
                          {/* Action Buttons */}
                          <div className="flex gap-2 mt-auto">
                              <button
                                onClick={() => openModal(project)}
                                className="flex-1 px-4 py-2 text-sm font-medium text-white bg-[#E16349] rounded-full hover:bg-[#f56950] transition-colors duration-300"
                              >
                                  Dive In
                              </button>
                          </div>
                      </div>
                  </div>
                ))}
            </div>

            <Modal
                isOpen={openWork}
                onRequestClose={() => setOpenWork(false)}
                contentLabel="Project Details"
                className="bg-white border-2 border-[#eaeaea] p-6 rounded-[25px] mx-auto my-10 h-[90%] w-[90%] shadow-lg z-50 overflow-y-scroll"
                overlayClassName="bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center z-50 overflow-y-scroll"
            >
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-4 flex-1">
                        <div className="mb-20">
                            <div className="flex flex-1 justify-between mb-5 items-center">
                                <div>
                                    <h2 className="text-black font-semibold text-2xl">
                                        {work.tooltip} <span className="text-[#E16349] text-normal">@</span> <span className="underline cursor-pointer" onClick={() => window.open('https://circlehealth.in')}>{work.title}</span>
                                    </h2>
                                    {work.date && <p className="text-[#555] text-sm">{work.date}</p>}
                                </div>
                                <div onClick={() => setOpenWork(false)} className="cursor-pointer">
                                    <img src={Xletter} width={25} height={25} />
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed">
                                {work.description1}
                            </p>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Project Details"
                className="bg-white border-2 border-[#eaeaea] p-6 rounded-[25px] mx-auto my-10 h-[90%] w-[90%] shadow-lg z-50 overflow-y-scroll"
                overlayClassName="bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center z-50 overflow-y-scroll"
            >
                {selectedProject && (
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col gap-4 flex-1">
                            {/* Title */}
                            <div className="flex flex-1 justify-between mb-2 items-center">
                                <div>
                                    <h2 className="text-black font-semibold text-2xl">
                                        {selectedProject.tooltip}
                                    </h2>
                                    {/* Tech Stack */}
                                    <div className="flex gap-2 flex-wrap mt-2">
                                        {selectedProject?.techStack?.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-sm font-semibold bg-[#FFF5F3] text-[#E16349] rounded-full border border-[#E16349]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div onClick={closeModal} className="cursor-pointer">
                                    <img src={Xletter} width={25} height={25} />
                                </div>
                            </div>
                            {selectedProject.hostedLink && <div className="mt-2">
                                <a
                                  href={selectedProject.hostedLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#E16349] rounded-lg shadow hover:bg-[#c5523d] transition duration-300"
                                >
                                    {/*<svg*/}
                                    {/*  xmlns="http://www.w3.org/2000/svg"*/}
                                    {/*  fill="none"*/}
                                    {/*  viewBox="0 0 24 24"*/}
                                    {/*  strokeWidth={1.5}*/}
                                    {/*  stroke="currentColor"*/}
                                    {/*  className="w-5 h-5"*/}
                                    {/*>*/}
                                    {/*    <path*/}
                                    {/*      strokeLinecap="round"*/}
                                    {/*      strokeLinejoin="round"*/}
                                    {/*      d="M12 1.5a9 9 0 00-2.85 17.51c.45.08.62-.19.62-.43v-1.52c-2.52.54-3.05-1.08-3.05-1.08a2.38 2.38 0 00-1-1.31c-.84-.57.06-.56.06-.56a1.88 1.88 0 011.38.93 1.91 1.91 0 002.61.75 1.9 1.9 0 01.57-1.2c-2.01-.23-4.13-1-4.13-4.39a3.4 3.4 0 01.9-2.36 3.14 3.14 0 01.09-2.33s.76-.24 2.51.93a8.53 8.53 0 014.57 0c1.74-1.17 2.5-.93 2.5-.93a3.14 3.14 0 01.1 2.33 3.4 3.4 0 01.9 2.36c0 3.41-2.12 4.16-4.14 4.39a2.14 2.14 0 01.61 1.67v2.47c0 .24.17.51.63.42A9 9 0 0012 1.5z"*/}
                                    {/*    />*/}
                                    {/*</svg>*/}
                                    View Website
                                </a>
                            </div>}
                            {selectedProject.githubLink && <div className="mt-2">
                                <a
                                    href={selectedProject.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#E16349] rounded-lg shadow hover:bg-[#c5523d] transition duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 1.5a9 9 0 00-2.85 17.51c.45.08.62-.19.62-.43v-1.52c-2.52.54-3.05-1.08-3.05-1.08a2.38 2.38 0 00-1-1.31c-.84-.57.06-.56.06-.56a1.88 1.88 0 011.38.93 1.91 1.91 0 002.61.75 1.9 1.9 0 01.57-1.2c-2.01-.23-4.13-1-4.13-4.39a3.4 3.4 0 01.9-2.36 3.14 3.14 0 01.09-2.33s.76-.24 2.51.93a8.53 8.53 0 014.57 0c1.74-1.17 2.5-.93 2.5-.93a3.14 3.14 0 01.1 2.33 3.4 3.4 0 01.9 2.36c0 3.41-2.12 4.16-4.14 4.39a2.14 2.14 0 01.61 1.67v2.47c0 .24.17.51.63.42A9 9 0 0012 1.5z"
                                        />
                                    </svg>
                                    View on GitHub
                                </a>
                            </div>}
                            {/* Description */}
                            <p className="text-sm leading-relaxed mb-20">
                                {selectedProject.description1}
                            </p>
                        </div>
                    </div>
                )}
            </Modal>
        </div >
    );
};

export default Projects;
