'use client';

import { Github, Linkedin } from 'lucide-react';
import './SocialRail.scss';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/amitosh2002', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amitosh-kumar-647654282/', icon: Linkedin },
];

export function SocialRail() {
  return (
    <nav className="social-rail" aria-label="Social profiles">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          className="social-rail__link"
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${label} profile`}
          title={label}
        >
          <Icon className="social-rail__icon" size={19} aria-hidden="true" />
          <span className="social-rail__visit">Visit</span>
        </a>
      ))}
    </nav>
  );
}
