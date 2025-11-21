"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Zap, Building2, TrendingUp, Shield, DollarSign } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="animatedGrid"
      cardStyle="glass-flat"
      primaryButtonStyle="flat"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Xeven"
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Get Started", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="XEVEN"
          description="Transform your business with intelligent AI solutions. Automate complex processes, gain actionable insights, and scale faster."
          buttons={[
            { text: "Start Free Trial", href: "contact" },
            { text: "Watch Demo", href: "features" }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763744825098-2kyzvcrg.jpg",
              imageAlt: "AI technology background"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763744825938-gxfgadmj.jpg",
              imageAlt: "Machine learning data science"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763744826861-4xnuum5k.jpg",
              imageAlt: "Cloud computing technology"
            }
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="About Xeven"
          description="We empower enterprises to harness the power of artificial intelligence. Our cutting-edge platform simplifies AI implementation, enabling teams to build, deploy, and manage intelligent solutions without complexity. Since 2020, we have helped leading organizations unlock new growth opportunities through smart automation and data-driven decision making."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Powerful AI Capabilities"
          description="Discover what makes Xeven the leading AI SaaS platform for enterprise solutions"
          tag="Features"
          tagIcon={Zap}
          features={[
            {
              title: "Smart Automation",
              description: "Automate repetitive tasks with intelligent workflows. Save time and reduce human error with AI-powered process automation.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763744827667-8dxk1o6p.jpg",
              imageAlt: "Automation workflow"
            },
            {
              title: "Advanced Analytics",
              description: "Transform raw data into actionable insights. Real-time dashboards and predictive analytics drive smarter business decisions.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763744828449-y46sz5oy.jpg",
              imageAlt: "Analytics dashboard"
            },
            {
              title: "Seamless Integration",
              description: "Connect effortlessly with your existing tools and systems. Our flexible API works with all major platforms and services.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763744829254-q09a91ad.jpg",
              imageAlt: "System integration"
            },
            {
              title: "Enterprise Security",
              description: "Bank-level encryption and compliance. Your data stays protected with advanced security measures and regular audits.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763744829966-mkd0qs89.jpg",
              imageAlt: "Security protection"
            }
          ]}
          textboxLayout="default"
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Impact"
          description="See how Xeven is transforming businesses worldwide"
          tag="Growth"
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          metrics={[
            {
              id: "1",
              value: "500+",
              title: "Enterprises",
              description: "Global companies trust Xeven",
              icon: Building2
            },
            {
              id: "2",
              value: "10M+",
              title: "Transactions",
              description: "Processed daily through our platform",
              icon: TrendingUp
            },
            {
              id: "3",
              value: "99.9%",
              title: "Uptime",
              description: "Industry-leading reliability and performance",
              icon: Shield
            },
            {
              id: "4",
              value: "40%",
              title: "Cost Savings",
              description: "Average reduction in operational expenses",
              icon: DollarSign
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Trusted by Industry Leaders"
          description="See what our customers have to say about Xeven"
          tag="Reviews"
          textboxLayout="default"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "VP of Operations",
              testimonial: "Xeven transformed our workflow. We reduced manual data entry by 70% and made better decisions faster with their AI analytics.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763744831420-539k8fx3.jpg",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CTO",
              testimonial: "The platform is incredibly intuitive. Our team was productive within days. The ROI has exceeded our expectations.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763744831982-8snf4c32.jpg",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Director of AI",
              testimonial: "Xeven's AI capabilities are unmatched in the industry. We've deployed multiple solutions without a single issue.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763744832499-yt85ku9c.jpg",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Product Lead",
              testimonial: "Outstanding customer support combined with powerful AI tools. Xeven is our go-to platform for automation.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763744833218-vdis2uon.jpg",
              imageAlt: "David Kim portrait"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Leading Companies"
          description="Join thousands of organizations using Xeven to power their AI initiatives"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763744833980-px0n38dg.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763744834800-famkfjhb.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763744835441-m39l21ln.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763744836532-bueqdsmr.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763744837003-dvd7c3ht.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763744837587-6ntnv3ab.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763744838314-1rnt9qt2.jpg"
          ]}
          showCard={true}
          speed={40}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about Xeven and our AI solutions"
          tag="Help"
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How does Xeven pricing work?",
              content: "Xeven offers flexible pricing based on usage and features. We have starter, professional, and enterprise plans. Most customers see ROI within the first month."
            },
            {
              id: "2",
              title: "Is my data secure on Xeven?",
              content: "Yes. We use AES-256 encryption, comply with SOC 2, GDPR, and HIPAA standards. Your data is encrypted in transit and at rest."
            },
            {
              id: "3",
              title: "How long does implementation take?",
              content: "Implementation typically takes 2-4 weeks depending on complexity. Our team provides full onboarding support to ensure a smooth transition."
            },
            {
              id: "4",
              title: "Can I integrate Xeven with my existing systems?",
              content: "Absolutely. We offer REST APIs, webhooks, and pre-built connectors for 500+ popular business tools and platforms."
            },
            {
              id: "5",
              title: "What kind of support do you offer?",
              content: "We provide 24/7 email support, dedicated account managers for enterprise customers, and a comprehensive knowledge base with video tutorials."
            },
            {
              id: "6",
              title: "Do you offer a free trial?",
              content: "Yes, we offer a 30-day free trial with full access to all features. No credit card required to get started."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get Started with Xeven Today"
          description="Join leading enterprises transforming their business with AI. Fill out the form and our team will reach out within 24 hours."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Work Email", required: true },
            { name: "company", type: "text", placeholder: "Company Name", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your AI needs and goals",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763744830605-vclz6bfe.jpg"
          imageAlt="Business collaboration"
          mediaPosition="right"
          buttonText="Request Demo"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Xeven"
          copyrightText="© 2025 Xeven Solutions. All rights reserved."
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "#" },
                { label: "Security", href: "#" },
                { label: "Roadmap", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}