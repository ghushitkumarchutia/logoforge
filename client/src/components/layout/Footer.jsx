import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";
import { APP_NAME } from "../../utils/constants";

const footerLinks = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Templates", href: "/#templates" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ],
  Resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Help Center", href: "/help" },
    { label: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer className='bg-gray-900 border-t border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div className='col-span-2 md:col-span-1'>
            <Link to='/' className='flex items-center gap-2 mb-4'>
              <div className='w-8 h-8 bg-gradient-to-br from-green-500 to-purple-500 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>L</span>
              </div>
              <span className='text-xl font-bold text-white'>{APP_NAME}</span>
            </Link>
            <p className='text-gray-400 text-sm mb-4'>
              Create stunning logos and graphics with our powerful design tool.
            </p>
            <div className='flex gap-3'>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors'
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className='font-semibold text-white mb-4'>{category}</h4>
              <ul className='space-y-2'>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className='text-gray-400 hover:text-white text-sm transition-colors'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400 text-sm'>
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <div className='flex gap-6 mt-4 md:mt-0'>
            <Link
              to='/privacy'
              className='text-gray-400 hover:text-white text-sm transition-colors'
            >
              Privacy Policy
            </Link>
            <Link
              to='/terms'
              className='text-gray-400 hover:text-white text-sm transition-colors'
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
