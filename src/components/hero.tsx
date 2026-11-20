'use client';

import React, { JSX } from 'react';
import Image from 'next/image';
import {
  Code2,
  ArrowRight,
  TrendingUp,
  Sparkles,
  CheckSquare,
  Database,
  Smartphone,
  ShieldCheck,
  PanelsTopLeft,
  Github,
  Linkedin,
} from 'lucide-react';
import './Hero.scss';

interface Feature {
  icon: React.ReactNode;
  iconColor: 'yellow' | 'blue' | 'orange' | 'gray';
  title: string;
  description: string;
  isHighlight?: boolean;
}

export function Hero(): JSX.Element {
  const features: Feature[] = [
    {
      icon: <Code2 size={24} />,
      iconColor: 'yellow',
      title: 'Full Stack Expertise',
      description:
        'My knowledge and experience in modern web technologies provide unparalleled advantages in building scalable applications.',
    },
    {
      icon: <CheckSquare size={24} />,
      iconColor: 'blue',
      title: 'Partners Not Clients',
      description:
        "I'm here to support your vision and collaborate with you, leaving no stone unturned in achieving success.",
    },
    {
      icon: <TrendingUp size={24} />,
      iconColor: 'orange',
      title: 'Proven Growth',
      description:
        "I've delivered successful projects with industry-leading quality and performance standards.",
      isHighlight: true,
    },
    {
      icon: <Sparkles size={24} />,
      iconColor: 'gray',
      title: 'Quality that Converts',
      description:
        'Clean code, responsive design, and user experiences that convert visitors into customers.',
    },
  ];

  const partnerLogos = [
    'SPACE saver',
    'Better Booch',
    'MEDIFY AIR',
    "maxine's heavenly",
    'The Kombucha Shop',
  ];

  return (
    <section className="hero">
      {/* Background */}
      <div className="hero__bg">
        <div className="hero__blob hero__blob--orange-left" />
        <div className="hero__blob hero__blob--orange-right" />
      </div>

      <div className="hero__container">
        <div className="hero__intro">
          <div className="hero__portrait" aria-label="Portrait of Amitosh working at his desk">
            <div className="hero__portrait-card" />
            <div className="hero__portrait-tile hero__portrait-tile--a" aria-hidden="true" />
            <div className="hero__portrait-tile hero__portrait-tile--b" aria-hidden="true" />
            <div className="hero__portrait-tile hero__portrait-tile--c" aria-hidden="true" />
            <div className="hero__portrait-tile hero__portrait-tile--d" aria-hidden="true" />
            <div className="hero__portrait-tile hero__portrait-tile--e" aria-hidden="true" />
            <div className="hero__portrait-main"><Image src="/dp_2.png" alt="Amitosh Kumar, full stack developer" fill priority sizes="(max-width: 768px) 80vw, 420px" /></div>
            <div className="hero__portrait-socials">
              <a href="https://github.com/amitosh2002" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><Github size={20} aria-hidden="true" /></a>
              <a href="https://www.linkedin.com/in/amitosh-kumar-647654282/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin size={20} aria-hidden="true" /></a>
            </div>
          </div>

          <div className="hero__copy">
            <p className="hero__eyebrow">Full stack developer · India</p>
            <h1 className="hero__title">Hi, I&apos;m Amitosh<span className="hero__title-dot">.</span><br /><span className="hero__title--highlight">Full Stack Developer<span className="hero__title-cursor">|</span></span></h1>
            <p className="hero__description">
              Creative and detail-oriented Full Stack Developer building intuitive, user-focused web and mobile experiences with modern technologies.
            </p>
            <div className="hero__intro-actions">
              <a className="hero__portfolio-link" href="#work"><ArrowRight size={19} /><span>My Portfolio</span></a>
            </div>
          </div>

          <div className="hero__manifesto">
            <span className="hero__manifesto-label">The approach</span>
            <p>I build contemporary web and mobile experiences where thoughtful design meets reliable engineering. I enjoy turning complex ideas into simple, useful products.</p>
          </div>
        </div>

      </div>

      {/* Partners */}
      {/* <div className="hero__partners">
        <div className="hero__partners-grid">
          {partnerLogos.map((logo) => (
            <div key={logo} className="hero__partner-logo">
              {logo}
            </div>
          ))}
        </div>
      </div> */}

      {/* Quality services */}
      <div className="hero__why">
        <div className="hero__quality-heading">
          <div>
            <span className="hero__quality-watermark" aria-hidden="true">QUALITY</span>
            <span className="hero__quality-kicker">My expertise</span>
            <h2 className="hero__why-title">My Quality Services</h2>
          </div>
          <a className="hero__quality-link" href="#work"><span>View my work</span><ArrowRight size={18} /></a>
        </div>

        <div className="hero__quality-layout">
          <div className="hero__features">
            {features.map((feature, index) => (
              <article key={index} className={`hero__feature hero__feature--quality hero__feature--${feature.iconColor}`}>
                <div className={`hero__feature-icon hero__feature-icon--${feature.iconColor}`}>{feature.icon}</div>
                <div>
                  <h3 className="hero__feature-title">{feature.title}</h3>
                  <p className="hero__feature-desc">{feature.description}</p>
                </div>
                <span className="hero__feature-index">0{index + 1}</span>
              </article>
            ))}
          </div>
          <div className="hero__quality-gallery" aria-label="Selected project interfaces">
            <article className="hero__service-visual hero__service-visual--architecture">
              <div className="hero__visual-heading"><span>BUILT END TO END</span><strong>One connected system</strong></div>
              <div className="hero__architecture-flow">
                <div className="hero__architecture-node"><PanelsTopLeft size={22} /><span>Interface</span></div>
                <i />
                <div className="hero__architecture-node"><Code2 size={22} /><span>Application</span></div>
                <i />
                <div className="hero__architecture-node"><Database size={22} /><span>Data</span></div>
              </div>
              <div className="hero__visual-footnote"><span className="hero__status-dot" /> Designed to scale with your product</div>
            </article>
            <article className="hero__service-visual hero__service-visual--responsive">
              <div className="hero__visual-heading"><span>RESPONSIVE BY DEFAULT</span><strong>Every screen, considered</strong></div>
              <div className="hero__device-scene">
                <div className="hero__browser-mock"><div className="hero__mock-top"><b /><b /><b /><span /></div><div className="hero__mock-layout"><i /><div><b /><b /><span /><span /><span /></div></div></div>
                <div className="hero__phone-mock"><div /><Smartphone size={19} /><span /><span /><span /></div>
              </div>
            </article>
            <article className="hero__service-visual hero__service-visual--quality">
              <div className="hero__visual-heading"><span>QUALITY BUILT IN</span><strong>Reliable from day one</strong></div>
              <div className="hero__quality-checklist">
                <div><ShieldCheck size={18} /><span>Accessible, responsive UI</span><b>READY</b></div>
                <div><Code2 size={18} /><span>Clean, maintainable code</span><b>READY</b></div>
                <div><Database size={18} /><span>Secure data handling</span><b>READY</b></div>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  );
}
