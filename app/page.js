'use client'

import { useState } from 'react'
import Image from 'next/image'

// ── Contact info – replace with real values before deploying ──────────────────
// Stored as split parts to avoid plain-text exposure in HTML source.
const EMAIL_PARTS  = ['eibekkevold', 'gmail.com']   // joins to: eibekkevold@gmail.com
const PHONE_PARTS  = ['+47', '95', '01', '379']      // joins to: +47 95 01 379
// ─────────────────────────────────────────────────────────────────────────────

const t = {
  no: {
    langSwitch: '🇬🇧 EN',
    //eyebrow: 'Lysstyringssystemer',
    heroTitle: 'Presis support for lysstyringssystemer',
    heroSub:
      'Med 40 års erfaring fra elektrobransjen og 25 år med lysstyringssystemer tilbyr EB Field Support AS endring, vedlikehold og feilsøking — til alle typer bygg og anlegg.',
    heroCta: 'Ta kontakt',
    servicesLabel: 'Tjenester',
    servicesHeading: 'Hva vi gjør',
    services: [
      {
        title: 'Endringer',
        desc: 'Tilpasning og oppgradering av eksisterende lysstyringssystemer etter nye behov eller krav.',
      },
      {
        title: 'Vedlikehold',
        desc: 'Planlagt og forebyggende vedlikehold for å sikre stabil og pålitelig drift over tid.',
      },
      {
        title: 'Support og feilsøking',
        desc: 'Rask og kompetent hjelp ved feil eller driftsstans — på stedet eller remote.',
      },
    ],
    aboutLabel: 'Om oss',
    aboutHeading: 'Erfaring du kan stole på',
    aboutText: [
      'EB Field Support AS er ledet av Espen Bekkevold, med 40 års erfaring fra elektrobransjen.',
      'Han har de siste 25 årene jobbet spesialisert med lysstyringssystemer, med erfaring fra alt fra store kontor- og næringsbygg til skoler, idrettsanlegg, kjøpesentre og privatboliger.',
      'Med solid erfaring innen DALI og god kompetanse på trådløse løsninger, får du praktisk og pålitelig bistand når noe skal endres, vedlikeholdes eller feilsøkes. Ingen jobb er for liten.',
    ],
    contactLabel: 'Kontakt',
    contactHeading: 'Kontakt oss',
    contactLead: 'Ta gjerne kontakt for en uforpliktende samtale om ditt anlegg.',
    showEmail: 'Vis e-postadresse',
    showPhone: 'Vis telefonnummer',
    emailLabel: 'E-post',
    phoneLabel: 'Telefon',
    footer: '© 2026 EB Field Support AS — Organisasjonsnummer: 000 000 000',
  },
  en: {
    langSwitch: '🇳🇴 NO',
    eyebrow: 'Lighting control systems',
    heroTitle: 'Precise support for lighting control systems',
    heroSub:
      'With 40 years of experience in the electrical industry and 25 years focused on lighting control, EB Field Support AS provides changes, maintenance and troubleshooting — for any type of building or facility.',
    heroCta: 'Get in touch',
    servicesLabel: 'Services',
    servicesHeading: 'What we do',
    services: [
      {
        title: 'Changes',
        desc: 'Adaptation and upgrading of existing lighting control systems to meet new requirements or needs.',
      },
      {
        title: 'Maintenance',
        desc: 'Planned and preventive maintenance to ensure stable and reliable operation over time.',
      },
      {
        title: 'Support & Troubleshooting',
        desc: 'Fast and competent assistance in case of faults or downtime — on-site or remote.',
      },
    ],
    aboutLabel: 'About',
    aboutHeading: 'Experience you can rely on',
    aboutText: [
      'EB Field Support AS is led by Espen Bekkevold, with 40 years of experience in the electrical industry.',
      'He has spent the past 25 years specializing in lighting control systems, with experience ranging from large office and commercial buildings to schools, sports facilities, shopping centers, and private homes.',
      'With solid expertise in DALI and strong knowledge of wireless solutions, you get practical and reliable assistance when something needs to be changed, maintained or troubleshot. No job is too small.',
    ],
    contactLabel: 'Contact',
    contactHeading: 'Contact us',
    contactLead: 'Feel free to reach out for a no-obligation conversation about your installation.',
    showEmail: 'Show email address',
    showPhone: 'Show phone number',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    footer: '© 2026 EB Field Support AS',
  },
}

// Simple SVG icons (inline, no dependencies)
function IconWrench() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function IconHeadset() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  )
}

const serviceIcons = [<IconWrench />, <IconShield />, <IconHeadset />]

export default function Home() {
  const [lang, setLang]         = useState('no')
  const [showEmail, setShowEmail] = useState(false)
  const [showPhone, setShowPhone] = useState(false)

  const c = t[lang]

  const email = EMAIL_PARTS.join('@')
  const phone = PHONE_PARTS.join(' ')

  return (
    <>
      {/* ── Header ── */}
      <header className="site-header">
        <div className="container">
          <a href="#" className="site-logo">
            <Image
              src="/EBFSLogo21.png"
              alt="EB Field Support AS"
              className="site-logo-img"
              width={245}
              height={138}
              priority
            />
          </a>
          <button
            className="lang-toggle"
            onClick={() => {
              setLang(lang === 'no' ? 'en' : 'no')
              setShowEmail(false)
              setShowPhone(false)
            }}
            aria-label="Switch language"
          >
            {c.langSwitch}
          </button>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="hero">
          <div className="container">
            <span className="hero-eyebrow">{c.eyebrow}</span>
            <h1>{c.heroTitle}</h1>
            <p>{c.heroSub}</p>
            <a href="#contact" className="btn-primary">{c.heroCta}</a>
          </div>
        </section>

        <hr className="divider" />

        {/* ── Services ── */}
        <section className="section section-alt" id="services">
          <div className="container">
            <p className="section-label">{c.servicesLabel}</p>
            <h2>{c.servicesHeading}</h2>
            <div className="services-grid">
              {c.services.map((s, i) => (
                <div className="service-card" key={i}>
                  <div className="service-icon">{serviceIcons[i]}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── About ── */}
        <section className="section" id="about">
          <div className="container">
            <p className="section-label">{c.aboutLabel}</p>
            <h2>{c.aboutHeading}</h2>
            <div className="about-body">
              {c.aboutText.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── Contact ── */}
        <section className="contact-section section-alt" id="contact">
          <div className="container">
            <p className="section-label">{c.contactLabel}</p>
            <h2>{c.contactHeading}</h2>
            <p className="lead">{c.contactLead}</p>

            <div className="contact-items">
              {/* Email */}
              <div className="contact-row">
                <span className="contact-label">{c.emailLabel}</span>
                {showEmail ? (
                  <span className="contact-value">{email}</span>
                ) : (
                  <button className="btn-reveal" onClick={() => setShowEmail(true)}>
                    {c.showEmail}
                  </button>
                )}
              </div>

              {/* Phone */}
              <div className="contact-row">
                <span className="contact-label">{c.phoneLabel}</span>
                {showPhone ? (
                  <span className="contact-value">{phone}</span>
                ) : (
                  <button className="btn-reveal" onClick={() => setShowPhone(true)}>
                    {c.showPhone}
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="container">
          <p>{c.footer}</p>
        </div>
      </footer>
    </>
  )
}
