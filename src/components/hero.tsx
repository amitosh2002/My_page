'use client';

import React, { useState, FormEvent, ChangeEvent, JSX } from 'react';
import Image from 'next/image';
import {
  Code2,
  Github,
  Linkedin,
  Play,
  TrendingUp,
  Sparkles,
  CheckSquare,
} from 'lucide-react';
import './Hero.scss';

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

interface Feature {
  icon: React.ReactNode;
  iconColor: 'yellow' | 'blue' | 'orange' | 'gray';
  title: string;
  description: string;
  isHighlight?: boolean;
}

export function Hero(): JSX.Element {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  const handleScheduleCall = () => {
    console.log('Schedule a call clicked');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const socialLinks: SocialLink[] = [
    {
      href: 'https://github.com/amitosh2002',
      icon: <Github size={18} />,
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/amitosh-kumar-647654282/',
      icon: <Linkedin size={18} />,
      label: 'LinkedIn',
    },
  ];

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
        {/* Left */}
        <div className="hero__content">
          <h1 className="hero__title">
            Proven Partner for <br />
            <span className="hero__title--highlight">
              Full Stack Success
            </span>
          </h1>

          <p className="hero__description">
            Building modern web and mobile applications with cutting-edge
            technologies. I help businesses accelerate growth while maximizing
            efficiency through comprehensive development and creative solutions.
          </p>

        <form
            className="hero__form"
            action="https://formspree.io/f/mjgonlqo"
            method="POST"
          >
            <input
              type="email"
              name="email"        // ✅ REQUIRED for Formspree
              className="hero__input"
              placeholder="Enter your email"
              required
            />

            <button type="submit" className="hero__btn hero__btn--primary">
              Get Started
            </button>
          </form>


          <p className="hero__subtext">
            We&apos;ll be in touch or feel free to{' '}
            <button
              type="button"
              className="hero__link"
              onClick={handleScheduleCall}
            >
              schedule a call now
            </button>
            .
          </p>

          <div className="hero__socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
              >
                {social.icon}
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="hero__media">
          <div className="hero__media-card">
            <button
              className="hero__play-btn"
              type="button"
              aria-label="Play video"
            >
              <Play size={24} fill="white" />
            </button>

            <Image
              src="/dp_2.png"
              alt="Team collaboration"
              fill
              className="hero__image"
              priority
            />
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

      {/* Why Choose */}
      <div className="hero__why">
        <h2 className="hero__why-title">Why Choose Me?</h2>

        <div className="hero__features">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`hero__feature ${
                feature.isHighlight ? 'hero__feature--highlight' : ''
              }`}
            >
              <div
                className={`hero__feature-icon hero__feature-icon--${feature.iconColor}`}
              >
                {feature.icon}
              </div>
              <h3 className="hero__feature-title">{feature.title}</h3>
              <p className="hero__feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Principle */}
      <div className="hero__principle">
        <div className="hero__principle-blob" />
        <div className="hero__principle-content">
          <p className="hero__principle-subtitle">My guiding principle</p>
          <h2 className="hero__principle-title">
            Code × Design = Impact
          </h2>
          <p className="hero__principle-desc">
            I leverage modern technologies and proven development strategies to
            build applications that are designed to perform and scale.
          </p>
        </div>
      </div>
    </section>
  );
}
