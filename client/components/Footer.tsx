import { Link } from "react-router-dom";

export default function Footer() {
  const footerSections = [
    {
      title: "Browse Our Site",
      links: [
        "Find a Lawyer",
        "Review Your Lawyer",
        "Legal Advice",
        "Recently Answered Questions",
        "Browse Practice Areas",
        "Avvo Stories Blog",
      ],
    },
    {
      title: "Popular Locations",
      links: [
        "New York City Lawyers",
        "Los Angeles Lawyers",
        "Chicago Lawyers",
        "Houston Lawyers",
        "Washington, DC Lawyers",
        "Philadelphia Lawyers",
        "Phoenix Lawyers",
        "San Antonio Lawyers",
        "San Diego Lawyers",
      ],
    },
    {
      title: "Popular Practice Areas",
      links: [
        "Bankruptcy & Debt Lawyers",
        "Business Lawyers",
        "Criminal Defense Lawyers",
        "DUI & DWI Lawyers",
        "Estate Planning Lawyers",
        "Car Accident Lawyers",
        "Divorce & Separation Lawyers",
        "Intellectual Property Lawyers",
        "Speeding & Traffic Lawyers",
      ],
    },
    {
      title: "About",
      links: [
        "About Avvo",
        "Careers",
        "Support",
        "Avvo Rating Explained",
      ],
    },
  ];

  const footerLinks = [
    "Terms of Use",
    "Privacy Policy",
    "Do Not Sell or Share My Personal Information",
    "Community Guidelines",
    "Sitemap",
  ];

  return (
    <footer className="w-full bg-[#333] px-4 md:px-36 py-4">
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-8">
          {footerSections.map((section, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h3 className="text-white text-base font-bold mb-1">
                {section.title}
              </h3>
              {section.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  to="/"
                  className="text-[#CCC] text-sm leading-[21px] hover:text-white transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-4 text-sm">
          {footerLinks.map((link, index) => (
            <div key={index} className="flex items-center">
              <Link
                to="/"
                className="text-[#CCC] hover:text-white transition-colors font-['Lato']"
              >
                {link}
              </Link>
              {index < footerLinks.length - 1 && (
                <span className="ml-2 text-[#CCC]">|</span>
              )}
            </div>
          ))}
        </div>

        <div className="text-[#CCC] text-sm font-['Lato']">
          © Avvo Inc. All Rights Reserved 2023
        </div>
      </div>
    </footer>
  );
}
