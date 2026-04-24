import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const TeamPage = ({ theme = 'teal' }) => {
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950' };
  const [selectedMember, setSelectedMember] = useState(null);

  const team = [
    {
      name: 'Hariharan Ramachandran',
      role: 'MD and CEO',
      image: '/team/hariharan.jpeg',
      shortBio: 'A highly accomplished finance professional with over three decades of international experience in fund management, portfolio construction, capital markets, and financial analysis across various sectors.',
      fullBio: `Mr. Hariharan Ramachandran is a highly accomplished finance professional with over three decades of international experience in fund management, portfolio construction, capital markets, and financial analysis. His multi-sectoral expertise spans technology, financial services, healthcare, oil & gas, and real estate, offering a comprehensive perspective on global capital allocation strategies and macro-financial frameworks.

He has held senior leadership roles at prominent investment firms and corporate institutions, including as Principal Fund Manager responsible for managing portfolios in excess of USD 1 billion, notably for Eurostar Group/Family Offices in the Middle East. He also served as Principal Fund Manager at Avici Investments Pte Ltd, a Singapore-based fund management and corporate advisory firm promoted by GR Visions Pte Ltd and TANO Capital LLC — an affiliate of Franklin Templeton.

Mr. Ramachandran brings deep expertise in portfolio structuring, risk assessment, investment research, and disciplined capital deployment. His experience spans regulatory engagements with DFSA-regulated entities in the Middle East, as well as companies in Singapore and Malaysia, reinforcing his familiarity with international compliance and institutional governance frameworks.

His professional strengths include structuring and managing investment funds and portfolios, conducting financial and risk analysis, and undertaking comprehensive investment research across capital markets. He is adept at navigating institutional investment processes, aligning strategies with regulatory frameworks, and providing governance-level insights for strategic planning and market positioning.

Mr. Ramachandran serves as an Advisory Board member for various SEBI-registered Alternative Investment Funds (AIFs), including the Bharat Heritage Asset Fund.`
    },
    {
      name: 'Chetan Bharkhada',
      role: 'Director - Wealth Management & Treasury Expert',
      image: '/team/chetan.jpeg',
      shortBio: 'A seasoned financial services professional with over 30 years of experience in consultancy, treasury management, risk management, and international business across Capital Markets, Commodities, and Treasury Operations.',
      fullBio: `With over 30 years of extensive experience in consultancy, treasury management, risk management strategies (including hedging), and international business, Chetan Bharkhada is a seasoned financial services professional with a proven track record across Capital Markets, Commodities, Treasury Operations, and Strategic Financial Management.

Key Achievements:
- Managed commodities risk for Sterlite Industries by developing hedging strategies on the London Metal Exchange (LME).
- Played a pivotal role in business development for large treasury desks and corporate broking houses while serving as Chief Executive Officer.
- Contributed to government advisory committees for designing the business model of Gujarat International Finance Tec-City (GIFT IFSC).
- Successfully managed businesses with a balance sheet size exceeding INR 10,000 Crores.

Core Expertise: Designing and implementing business strategies, leading business development initiatives, overseeing profit and loss management, and developing and mentoring leadership teams.

A recognized thought leader and a prominent speaker at national and international forums on Commodities and Forex markets, Chetan combines deep industry knowledge with practical expertise to deliver results-driven financial solutions.

Qualifications: Certified Treasury Manager (ACTM - India), MBA/PGDBM in Finance, and Diploma in Commodities Market (DICM).`
    },
    {
      name: 'Captain Govindarajan Senthilkumar',
      role: 'Director - Maritime Operations',
      image: '/team/captain.jpg',
      shortBio: 'Director overseeing vessel acquisition, technical evaluation, commercial negotiations, chartering contracts, maritime logistics, and ensuring regulatory compliance with over 30 years of maritime experience.',
      fullBio: `Captain Kumar, Director, leads the acquisition and technical evaluation of vessels, oversees commercial negotiations, and manages chartering contracts and maritime logistics. He is responsible for ensuring full regulatory compliance with DG Shipping, classification societies, and international maritime laws, playing a pivotal role in aligning operational efficiency with global maritime standards.

Captain Kumar started his sea career in 1991 and served in Great Eastern Shipping (India), Acomarit (UK), Colonel Marine Industries (USA), ETA Shipping (Chennai) in ascending ranks as Navigating Officer and Captain.

He was assigned in-charge of the major conversion of M.V. Gem of Ennore self-unloading vessel, which operated under Tamil Nadu Electricity Board for more than 10 years with huge cost savings to the Government.

Besides having sailed as master mariner for more than a decade, he has also accomplished various shore-based projects such as dry docking, new vessel acquisition, old vessel acquisition, scrap deliveries, vessel inspections, surveys, and emergencies. He also has vast experience in chartering and commercial operation of vessels.

During his association with Titanics India Ltd, he imported about 1,10,000 metric tons of river sand into Cochin, India and further about 1,60,000 metric tons into Krishnapattnam port for the Karnataka Government.

During his ETA serving period, he boarded a grounded vessel at Tuticorin, salvaged the vessel, and re-commissioned it (M.V. Coastal Pride). He has handled various emergencies involving collision, fire, flooding etc.

He has been chartering vessels for various companies such as EMPEE Groups, Total Care Consultancy, Shipment Solutions, Titanics India, etc. He has served as Principal, HOD of PKIMSE Maritime College, Tamil Nadu.`
    },
    {
      name: 'Mehul Dhokai',
      role: 'Entrepreneur | Investor | Strategic Business Leader',
      image: '/team/mehul.png',
      shortBio: 'A seasoned entrepreneur and business leader with over 22 years of management experience, including founding Fund Buddy and scaling startups across Capital Markets, AdTech, AgriTech, and CleanTech.',
      fullBio: `Mehul Dhokai is a seasoned entrepreneur and business leader with over 22 years of management experience, including 17+ years in senior leadership roles across reputed organizations such as Anand Rathi, Kotak Mahindra, Angel Broking, Shell, and Gillette. His background spans capital markets, investment banking, technology platforms, and sustainable innovation.

In 2017, he founded Fund Buddy, a venture investment and business-building platform through which he has invested in and actively scaled startups across Capital Markets, AdTech, AgriTech, and CleanTech.

Current Roles & Leadership:
- Director, Raru Capital: Leading the NSE IFSC membership setup at GIFT City, with a focus on financial markets, investment banking, and cross-border opportunities.
- Director, Toya (AgriTech Platform): Driving growth of an AgriTech marketplace platform. Played a key role in raising USD 2 million in pre-Series A funding.
- Founder, OmniIon (CleanTech): Leading the development of patented CleanTech solutions for air pollution control, developed in collaboration with IIT Delhi and certified by CCMB, Hyderabad.
- Director, Advision (AdTech / PPP Projects): Spearheading PPP-based OOH media monetization projects, achieving a 3x increase in revenue for Ahmedabad Municipal Corporation over five years.

Core Strengths: Capital Markets & Investment Banking, Startup Investing & Scale-up, Technology-enabled Business Models, Public-Private Partnerships (PPP), CleanTech & Sustainable Innovation.`
    },
    {
      name: 'Reuben Balasingh',
      role: 'Non-Executive Director - Dhanveir Groups Shipping',
      image: '/team/reuben.jpeg',
      shortBio: 'A seasoned global shipping and logistics professional with over 30 years of experience across India, Japan, and the UAE, providing strategic direction and governance oversight for international shipping operations.',
      fullBio: `Reuben Balasingh is a seasoned global shipping and logistics professional with over 30 years of experience across India, Japan, and the UAE. As a Non-Executive Director at Dhanveir Groups Shipping Pvt Ltd, he provides strategic direction, industry insight, and governance oversight to support the company's expansion in international shipping and maritime operations.

He is the Founder and Managing Director of the TranzOcean Group, a Dubai-based platform specializing in Car Carrier (PCC) vessel operations, ship chartering, automotive logistics, and freight forwarding, with operations spanning key global trade routes including the Far East and the Americas.

Career Highlights:
- Began his career with Chakiat Agencies Pvt. Ltd., rising to Branch Manager handling global shipping line agency operations.
- Played a key role at P&O Nedlloyd in developing the automotive logistics vertical in India.
- Established the non-liner and logistics division at Mitsui OSK Lines India and successfully launched the India-South Africa PCC trade service.
- As Founder of Radius Value Chain Pvt. Ltd. (2007-2017), he built a leading logistics enterprise serving marquee clients such as Maruti, Tata Motors, Ashok Leyland, Daimler, and Dalmia Cements.

Currently leads multiple global businesses including TranzOcean Line FZE, RVC Shipping LLC, TranzOcean (Japan) Co. Ltd., and Faithbridge Capital FZCO, covering the full spectrum of shipping operations, chartering, logistics, and financial structuring.

Widely regarded for his ability to combine operational execution with strategic vision, and for building scalable, asset-backed platforms in complex and capital-intensive shipping environments. His global exposure and deep industry relationships position him as a key contributor to Dhanveir's long-term growth strategy.`
    },
    {
      name: 'Dr. K.G. Raghunath',
      role: 'Senior Legal & Taxation Advisor',
      image: '/team/raghunath.jpeg',
      shortBio: 'A veteran legal strategist with over three decades of experience in corporate law, taxation, regulatory enforcement, and criminal litigation, renowned for navigating India\'s legal frameworks.',
      fullBio: `Dr. K.G. Raghunath is a veteran legal strategist with over three decades of experience spanning corporate law, taxation (both direct and indirect), regulatory enforcement, and criminal litigation. Renowned for his ability to navigate India's intricate legal frameworks, he is a trusted advisor to corporations, investors, and high-net-worth individuals dealing with complex, high-stakes legal challenges.

A Ph.D. holder in Criminology and M.L graduate from the University of Madras, Dr. Raghunath combines academic rigor with courtroom agility. His legal practice spans civil, criminal, constitutional, and tax litigation, with frequent appearances before High Courts of Madras, Karnataka, and Kerala, Income Tax Appellate Tribunal (ITAT), Sales Tax and VAT Appellate Authorities, CESTAT, and special courts under the PMLA, NDPS, and Companies Act.

Criminal & White-Collar Litigation: Dr. Raghunath is widely respected for his defence in high-profile criminal cases involving economic and regulatory offenses, including white-collar crimes, corporate fraud, insider trading, ED investigations under PMLA and FEMA, and customs and GST offenses.

Investment Structuring & Regulatory Advisory: He has architected several fund structures and SPVs, with a focus on compliance, tax efficiency, and cross-border legality. He regularly advises on fund setup under SEBI AIF, RBI, FEMA, and Income Tax regulations.

Author of "Indian Criminal Judiciary System and Custodial Dignity" - seminal works exploring legal reform, judicial integrity, and the rights of the accused within India's criminal justice framework.`
    },
    {
      name: 'Navin Hariharan',
      role: 'Cybersecurity Leader & Ethical Hacking Expert',
      image: '/team/navin.png',
      shortBio: 'A seasoned cybersecurity professional with over six years of experience in Ethical Hacking and Cybersecurity, leading a team dedicated to strengthening digital security and promoting cyber awareness.',
      fullBio: `Mr. Navin Hariharan is a seasoned cybersecurity professional with over six years of experience in the field of Ethical Hacking and Cybersecurity. He leads a dynamic cross-functional team dedicated to strengthening digital security and building a safer cyber ecosystem.

Driven by a deep passion for cybersecurity, Mr. Navin focuses on delivering trusted and impactful services that help individuals and organizations protect themselves in an increasingly complex digital environment. He has been actively involved in promoting cyber awareness, strengthening security frameworks, and supporting initiatives aimed at combating cybercrime.

He is actively engaged in efforts to improve cyber safety by addressing critical issues such as cybercrime, cyberbullying, and online harassment, while advocating for stronger cybersecurity practices and responsible digital behavior.

In addition to his leadership role, Mr. Navin holds influential positions across nearly 20 companies and communities, contributing significantly to collaborative initiatives aimed at improving national cyber safety.

His core functional strengths include cybersecurity research, ethical hacking, vulnerability assessment, and digital risk management. Mr. Navin is also associated with several cybersecurity platforms and initiatives, including Hackersdaddy, The Cyber Agents, X-Security, and RESETHACKER, where he contributes to advancing cybersecurity knowledge and strengthening the cybersecurity community.`
    },
    {
      name: 'Raj Navneeth',
      role: 'Capital Markets & Wealth Strategy Expert',
      image: '/team/raj.jpeg',
      shortBio: 'An expert in Capital Markets, Wealth Strategy, and Private Banking with a global track record, delivering bespoke wealth management solutions and strategic advisory services.',
      fullBio: `Raj Navneeth is a seasoned expert in Capital Markets, Wealth Strategy, and Private Banking, with a global track record of excellence. Drawing upon deep insights into asset classes such as private equity, venture capital, hedge funds, real assets, and a wide range of financial products, Raj has successfully served clients across international markets.

He delivers bespoke wealth management solutions to affluent individuals, family offices, and institutions, leveraging extensive experience in navigating the complexities of high-net-worth wealth management. Raj specializes in asset allocation, risk management, and long-term financial planning with a global perspective.

Furthermore, he offers strategic advisory services in merchant banking, encompassing private equity placements, corporate advisory, and value creation strategies for businesses operating in diverse economies.

Notable Achievements:
- Successfully managed over $60 million in assets under advisory, delivering innovative solutions that consistently outperformed market benchmarks.
- Repeatedly recognized in the Prestigious League of Extraordinaire at Yes Bank.
- Spearheaded multiple cross-border transactions and strategic partnerships, enhancing global client portfolios and driving sustainable growth and revenue.

Known for building trusted relationships and delivering client-centric strategies with a focus on discretion, integrity, and long-term value creation.

Academic Credentials: BBA, MBA, MS in International Business (HULT, USA), MS in International Marketing (HULT, USA).`
    },
    {
      name: 'Ambika Aranganathan',
      role: 'Director - Gazillion Capital Pvt Ltd',
      image: '/team/ambika.jpeg',
      shortBio: 'A finance and technology expert with 5 years of specialized experience in capital markets, trading strategies, and portfolio management, spearheading initiatives at Gazillion Capital Pvt Ltd.',
      fullBio: `Ambika Aranganathan is a finance and technology expert with 5 years of specialized experience in capital markets, trading strategies, and portfolio management. As Director of Gazillion Capital Pvt Ltd, she spearheads the firm's initiatives in equity, derivatives, and commodity trading, Portfolio Management Services, delivering innovative, data-driven investment solutions tailored for institutional and high-net-worth clients.

Expertise & Skills: Strong foundation in engineering and analytical skills, integration of algorithmic trading systems with market research to optimize risk-adjusted returns, and navigating complex regulatory environments with compliance and business growth focus.

Leadership & Management: Leading innovation, transparency, and sustainable growth within the firm. Managing day-to-day trading operations, guiding product development in algorithmic trading strategies, overseeing risk management frameworks, and championing continuous learning and mentorship within teams.

Industry Representation: Representing Gazillion Capital at industry forums, advocating thought leadership and collaboration in the capital markets ecosystem, and providing strategic insights to anticipate market trends.

Education & Certifications: B.Tech - Electronics and Communication Engineering. NISM Certifications: Series V-A (Mutual Fund Distributors), Series VIII (Equity Derivatives), Series XVI (Commodity Derivatives), Series XXI-A (Portfolio Management Services), Series VII (Securities Operations and Risk Management). CMA certified.`
    },
    {
      name: 'Nithyasri Balakrishnan',
      role: 'AVP - Finance',
      image: '/team/nithyasri.jpeg',
      shortBio: 'An energetic and enthusiastic professional with strong work ethic and over half a decade of experience in Accounting, Finance, and Compliance across various industries.',
      fullBio: `Ms. Nithya is an exceptionally energetic and enthusiastic professional known for her strong work ethic and unwavering commitment to her responsibilities. She is inherently self-motivated and possesses a remarkable ability to evaluate situations from multiple perspectives, enabling her to approach challenges with clarity and practical insight.

With over half a decade of experience in Accounting, Finance, and Compliance across various industries, she has developed a well-rounded understanding of financial operations and regulatory requirements.

Nithya consistently approaches her work with integrity and maintains a high level of engagement in organizational activities. She is confident in handling matters with both government authorities and private entities, ensuring that processes are managed efficiently and in compliance with applicable regulations.

Her experience includes conducting feasibility analyses related to finance and accounting functions, supporting operational decision-making, and overseeing operational aspects such as maintenance and management.

Her professional approach is characterized by a positive attitude, strong organizational skills, and the ability to manage multiple responsibilities simultaneously while maintaining accuracy and efficiency. Recognized for her reliability and proactive mindset, Nithya continues to enhance her expertise through practical experience and continuous learning.`
    },
    {
      name: 'Dhamodharan Gopalakrishnan',
      role: 'Manager - Finance',
      image: '/team/dhamodharan.jpeg',
      shortBio: 'A finance professional and Certified Management Accountant with experience in Finance and Accounts, focusing on accounting operations, reconciliations, and financial reporting.',
      fullBio: `Dhamodharan is a finance professional and Certified Management Accountant with experience in Finance and Accounts. He has gained hands-on exposure to key financial functions, including accounting operations, reconciliations, and financial reporting, building a solid foundation in financial management.

He approaches his responsibilities with dedication, discipline, and a strong willingness to learn, enabling him to steadily strengthen his professional capabilities. His attention to detail and structured approach to work help ensure accuracy and consistency in financial tasks and reporting.

Recognized for his reliability and adaptability, Dhamodharan is capable of working effectively both independently and as part of a collaborative team. He performs particularly well in structured, detail-oriented environments where precision and organization are essential.

Committed to continuous professional development, he actively seeks opportunities to expand his knowledge and enhance his expertise through ongoing learning and practical experience in the field of finance and accounting.`
    },
    {
      name: 'Hemalatha Karthikeyan',
      role: 'Secretary to MD & HR',
      image: '/team/hemalatha.jpeg',
      shortBio: 'An enterprising professional with over four years of experience in followership, leadership, and entrepreneurship, holding a Master\'s degree in Mathematics.',
      fullBio: `Mrs. Hemalatha Karthikeyan brings over four years of professional experience spanning followership, leadership, and entrepreneurship. She possesses a Master's degree in Mathematics, which strengthens her analytical and problem-solving capabilities and supports her structured approach to management and decision-making.

She is an enterprising professional with a proven track record of contributing to organizational growth and collaborative initiatives. Her experience includes managing operational units alongside team members, streamlining processes, improving productivity, strengthening internal controls, and effectively coordinating cross-functional teams to achieve operational objectives.

Her professional profile reflects a balanced blend of leadership capability, collaborative mindset, and entrepreneurial insight. Through her proactive approach and strategic thinking, she has consistently supported operational efficiency and organizational development.

Mrs. Hemalatha Karthikeyan is recognized for her commitment to excellence, adaptability, and strong sense of responsibility. She continues to contribute positively to the organizations she is associated with, focusing on operational effectiveness, teamwork, and continuous improvement.`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className={`relative py-24 bg-gradient-to-br ${t.heroBg} overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}></div>
        </div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-400 text-sm font-semibold tracking-widest uppercase"
          >
            Our Team
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 mb-6"
          >
            Meet the Minds Behind Your Success
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto text-justify"
          >
            Our leadership team brings decades of combined experience in wealth management, investment advisory, cybersecurity, maritime operations, and strategic consulting to help you achieve your goals.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                data-testid={`team-member-card-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-100 border border-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className={`${t.accentText} font-medium mb-2 text-sm`}>{member.role}</p>
                <p className="text-gray-600 text-sm text-justify mb-3">{member.shortBio}</p>
                <button
                  data-testid={`read-more-btn-${i}`}
                  onClick={() => setSelectedMember(member)}
                  className={`${t.accentText} text-sm font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer`}
                >
                  Read Full Profile
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            data-testid="profile-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              data-testid="profile-modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-6 mb-6">
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name}
                    className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover object-top flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{selectedMember.name}</h2>
                    <p className={`${t.accentText} font-semibold mb-3`}>{selectedMember.role}</p>
                    <p className="text-gray-500 text-sm text-justify">{selectedMember.shortBio}</p>
                  </div>
                  <button
                    data-testid="close-modal-btn"
                    onClick={() => setSelectedMember(null)}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
                <div className={`border-t border-gray-200 pt-6`}>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Full Profile</h3>
                  <div className="text-gray-700 text-sm leading-relaxed text-justify whitespace-pre-line">
                    {selectedMember.fullBio}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Values Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-justify">
              At Alfa Global Group, our values guide every decision we make. We are committed to excellence, integrity, and creating lasting value for our partners.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { title: 'Excellence', desc: 'Highest standards in everything we do' },
              { title: 'Integrity', desc: 'Transparency and ethical conduct' },
              { title: 'Innovation', desc: 'Evolving approaches to wealth creation' },
              { title: 'Partnership', desc: 'Building lasting relationships' },
              { title: 'Impact', desc: 'Creating positive change' },
              { title: 'Vision', desc: 'Multi-generational wealth planning' }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-4"
              >
                <div className={`w-12 h-12 ${t.accentBg} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{value.title}</h3>
                <p className="text-gray-600 text-xs">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 bg-gradient-to-r ${t.gradient}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-justify">
            Connect with our team of experts and discover how we can help you achieve your financial goals through strategic investments and personalized wealth management solutions.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all"
          >
            Get in Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
