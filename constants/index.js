import { fadeIn } from "@/utils/motion";

export const footerLinks = [
  {
    title: "Explore",
    links: ["Trading", "Investments", "Advisory", "Code of conduct"],
  },
  {
    title: " Quick Links",
    links: ["TradeFi", "CP Asset Management", "ComPass", "Privacy Policy"],
  },
  {
    title: "Brands",
    links: ["Advertise with us"],
  },
  {
    title: "Company",
    links: [
      "About",
      "Careers",
      "Support",
      "Testimonials",
      "Terms of service",
      "Privacy policy",
      "Cookie policy",
    ],
  },
  {
    title: "Directories",
    links: [
      "Development jobs",
      "Developers for hire",
      "Freelance developers for hire",
      "Tags",
      "Places",
    ],
  },
];
export const NavLinks = [
  { route: "#about", key: "About Us", text: "About Us" },
  { route: "#pillars", key: "Investment Sectors", text: "Investment Sectors" },
  { route: "#portal", key: "Investment Portal", text: "Investment Portal ▼" },
  {
    route: "#invest",
    key: "Why you should invest with us",
    text: "Why you should invest with us",
  },
  { route: "/faqs", key: "FAQS", text: "FAQS" },
  { route: "/stories", key: "Success Stories", text: "Success Stories" },
  { route: "#contact", key: "Contact", text: "Contact" },
];
export const subNavLinks = [
  { route: "/product01", key: "Club500", text: "Club500" },
  { route: "#", key: "Product 02", text: "Product 02" },
];
export const calText = [
  {
    id: 1,
    text: "Invest",
    return: "N50,000.00",
    variants: fadeIn("up", "spring", 0.5, 0.75),
  },
  {
    id: 2,
    text: "Daily Return",
    return: "N150.00",
    variants: fadeIn("up", "spring", 0.8, 1),
  },
  {
    id: 3,
    text: "500 Days Return",
    return: "N25,000.00",
    variants: fadeIn("up", "spring", 1.1, 1.25),
  },
  {
    id: 4,
    text: "Total Withdrawal",
    return: "N75,000.00",
    variants: fadeIn("up", "spring", 1.3, 1.5),
  },
];
export const sidebarLinks = [
  {
    imgURL: "/assets/home.svg",
    route: "/dashboard",
    label: "Dashboard",
  },
  {
    imgURL: "/assets/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/coin-dollar.svg",
    route: "/history",
    label: "Investment History",
  },
  {
    imgURL: "/assets/address-book-1109.svg",
    route: "/historial",
    label: "Statement of Account",
  },
  {
    imgURL: "/assets/money-withdraw.svg",
    route: "/withdrawal",
    label: "Withdrawal",
  },
  {
    imgURL: "/assets/bank_account.svg",
    route: "/add-account",
    label: "Account Details",
  },
  {
    imgURL: "/assets/privacy.svg",
    route: "/privacy",
    label: "Privacy Policy",
  },
  {
    imgURL: "/assets/conditions.svg",
    route: "/conditions",
    label: "Terms and Conditions",
  },
];
export const AddUnit = [
  {
    id: 1,
    title: "A unit of Investment is #50,000.",
  },
  {
    id: 2,
    title: "You can invest as many units as possible.",
  },
  {
    id: 3,
    title:
      "We give 30% profit (Return on Investment on each unit) in 500 days.",
  },
  {
    id: 4,
    title: "You can withdraw daily as you deem fit.",
  },
];
export const AboutText = [
  {
    id: 1,
    title: "Welcome to Capital Partners Investment LTD",
    description:
      "A leading investment company with a diverse portfolio covering various sectors of the economy. With a steadfast commitment to excellence and a track record of success, we aim to facilitate growth, create value, and generate sustainable returns for our investors.",
  },
  {
    id: 2,
    title: "Professionalism",
    description:
      "Capital Partners Investment LTD has been duly registered by the Corporate Affairs Commission and certified by the Nigeria Investment Promotion Commission. Our esteemed reputation is built on a foundation of integrity, transparency, and professionalism, ensuring that our clients receive the highest standards of service.",
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "Our investment portfolio encompasses a wide range of sectors, providing opportunities for both domestic and international investors. We believe in the power of strategic investments to drive economic development and improve the lives of individuals. As such, we have carefully selected sectors that are essential to Nigeria's growth and have significant potential for long-term profitability.",
  },
  {
    id: 4,
    title: "Expertise",
    description:
      "At Capital Partners Investment LTD, we combine our extensive industry knowledge, market insights, and investment expertise to identify and execute value-driven opportunities. Our team of seasoned professionals is committed to delivering superior returns while upholding the highest standards of corporate governance and social responsibility..",
  },
  {
    id: 5,
    title: "Invest with Us",
    description:
      "We invite you to explore the possibilities of partnering with Capital Partners Investment LTD, where your financial goals meet our strategic vision, creating a path to mutual success.",
  },
];
export const pillarText = [
  {
    id: 1,
    title: "Transportation",
    content:
      "We recognize the importance of efficient transportation networks in driving economic activity. Our investments in this sector aim to improve infrastructure, enhance logistics capabilities, and support the growth of the transportation industry.",
    clr: "#ff0f5b",
  },
  {
    id: 2,
    title: "Real Estate",
    content:
      "The real estate sector offers tremendous opportunities for wealth creation and capital appreciation. Through our strategic investments, we aim to develop and manage high-quality properties that meet the needs of individuals, businesses, and communities.",
    clr: "#be01fe",
  },
  {
    id: 3,
    title: "Health",
    content:
      "We understand the critical role that a robust healthcare system plays in societal well-being. Our investments in the health sector focus on supporting the development of modern healthcare facilities, expanding access to quality medical services, and fostering innovation in healthcare delivery.",
    clr: "#01b4ff",
  },
  {
    id: 4,
    title: "Oil and Gas",
    content:
      "Recognizing Nigeria's position as a major player in the global oil and gas industry, we actively invest in this sector. Our focus is on projects that promote sustainable exploration, production, and refining practices, while also supporting local content development.",
    clr: "#ff5b0f",
  },
  {
    id: 5,
    title: "Education",
    content:
      "Education is a fundamental pillar of social and economic progress. We invest in educational institutions and initiatives that promote access to quality education, drive innovation in teaching methodologies, and equip individuals with the skills necessary for success in the modern world.",
    clr: "#0f8a1c",
  },
  {
    id: 6,
    title: "Technology",
    content:
      "In an increasingly digital and interconnected world, technology plays a pivotal role in driving growth and transformation. We invest in technology-driven ventures, startups, and infrastructure projects that have the potential to revolutionize industries and create new opportunities.",
    clr: "#4500ff",
  },
  {
    id: 7,
    title: "Food",
    content:
      "As a vital sector that sustains the population, we recognize the importance of investing in food production, processing, and distribution. Our investments aim to enhance agricultural productivity, improve food security, and support sustainable farming practices.",
    clr: "#d37c45",
  },
];
export const investText = [
  {
    id: 1,
    title: "Diversification Across Key Sectors",
    content:
      "Capital Partners Investment LTD understands the importance of diversification in an investment portfolio. By spanning multiple sectors, the company ensures that investors are not reliant on the performance of a single industry. This strategy mitigates risk and allows for balanced growth. Whether it's the stability of real estate, the technological innovations of the education sector, or the increasing demand for healthcare services, Capital Partners Investment has carefully curated an investment portfolio that offers a spectrum of opportunities.",
    icon: "fa fa-pie-chart",
    clr: "#ff0f5b",
  },
  {
    id: 2,
    title: "Expertise and Market Insight",
    content:
      "One of the key distinguishing factors of Capital Partners Investment LTD is its team of seasoned investment professionals. With years of experience, these experts possess an in-depth understanding of the sectors in which they invest. Their ability to identify emerging trends, assess market dynamics, and capitalize on lucrative opportunities gives investors a distinct advantage. By leveraging their expertise, Capital Partners Investment ensures that investors' capital is placed in ventures with the highest potential for growth and profitability.",
    icon: "fa fa-line-chart",
    clr: "#be01fe",
  },
  {
    id: 3,
    title: "Long-Term Vision",
    content:
      "Capital Partners Investment is driven by a long-term vision that seeks to create sustainable value for its stakeholders. Rather than focusing solely on short-term gains, the company carefully selects investments that align with its commitment to environmental, social, and governance (ESG) principles. By investing in sectors such as renewable energy, sustainable real estate, and technology-driven healthcare solutions, Capital Partners Investment LTD contributes to a more resilient and equitable future.",
    icon: "fa fa-eye",
    clr: "#01b4ff",
  },
  {
    id: 4,
    title: "Embracing Technological Disruption",
    content:
      "The digital revolution has transformed industries across the globe, and Capital Partners Investment recognizes the immense potential that technology holds. By actively seeking out investments in the technology sector, the company positions itself at the forefront of innovation. Whether it's artificial intelligence, blockchain, or e-commerce, Capital Partners Investment LTD embraces disruptive technologies that are reshaping the business landscape. This proactive approach enables investors to capitalize on the transformative power of technology, unlocking new avenues for growth and profitability.",
    icon: "fa fa-cogs",
    clr: "#ff5b0f",
  },
  {
    id: 5,
    title: "Global Outlook",
    content:
      "Capital Partners Investment has a global outlook, capitalizing on investment opportunities beyond geographical boundaries. This approach allows investors to benefit from the diversification of both sectors and markets. By strategically investing in regions with robust economic growth and emerging markets, the company taps into untapped potential and unlocks opportunities that traditional investment firms may overlook.",
    icon: "fa fa-globe",
    clr: "#0f8a1c",
  },
  {
    id: 6,
    title: "Simplified Investment Options",
    content:
      "Capital Partners Investment LTD offers a range of simplified investment options with daily accessible returns on investment, allowing investors to withdraw their earnings on a daily basis. These investment options are designed to provide flexibility and convenience, catering to the varying needs and preferences of investors.",
    icon: "fa fa-handshake-o",
    clr: "#4500ff",
  },
];
export const optionText = [
  {
    id: 1,
    title: "Daily Accessible Return on Investment",
    description:
      "Capital Partners Investment LTD offers investment options that generate daily returns on investment. This means that investors can earn profits on a daily basis, allowing for steady income and the potential for compounding returns over time. The daily accessibility of these returns means that investors can withdraw their earnings whenever they choose, providing them with liquidity and financial freedom.",
    clr: "#ffaf00",
  },
  {
    id: 2,
    title: "Withdrawal Flexibility",
    description:
      "One of the key advantages of Capital Partners Investment LTD's investment options is the flexibility to withdraw funds daily. This feature allows investors to access their earnings whenever they need them, providing a convenient solution for those who require regular cash flow or have short-term financial goals. Whether you need to cover unexpected expenses or take advantage of investment opportunities elsewhere, the ability to withdraw daily offers peace of mind and financial control.",
    clr: "#da2268",
  },
  {
    id: 3,
    title: "Convenience and Ease of Use",
    description:
      "Capital Partners Investment LTD aims to make investing as convenient and user-friendly as possible. Their investment platform provides a seamless and intuitive experience, allowing investors to monitor their investment performance, track returns, and make withdrawals effortlessly. With user-friendly interfaces and dedicated customer support, investors can easily manage their investments and access their funds whenever they need them.",
    clr: "#bb02ff",
  },
  {
    id: 4,
    title: "Diversified Investment Options",
    description:
      "Capital Partners Investment LTD offers a diverse range of investment options to suit different risk appetites and investment goals. Whether you are seeking conservative, moderate, or aggressive investment strategies, there are options available to match your preferences. From low-risk fixed income products to higher-yield equity-based investments, the company provides a variety of choices to diversify your portfolio and potentially enhance returns.",
    clr: "#01b4ff",
  },
  {
    id: 5,
    title: "Transparent Reporting and Accountability",
    description:
      "Capital Partners Investment LTD is committed to transparency and accountability. Investors can access detailed reports on their investments, including performance summaries, earnings statements, and transaction histories. This level of transparency enables investors to monitor their investments effectively and make informed decisions based on real-time data.",
    clr: "#0f8a1c",
  },
];
export const FaqText = [
  {
    id: 1,
    quest:
      "What types of investments does Capital Partners Investment Limited specialize in?",
    ans: "We invest in diverse portfolio covering various sectors of the economy",
    clr: "#ffaf00",
  },
  {
    id: 2,
    quest:
      "What is the minimum investment amount required to work with Capital Partners Investment Limited?",
    ans: "#50,000 (Fifty Thousand Naira).",
    clr: "#da2268",
  },
  {
    id: 3,
    quest:
      "How long has Capital Partners Investment Limited been in operation?",
    ans: "We have been in operation for the past 5years, operating locally and offline but just recently updated our status to become a full fledged registered investment company to provide opportunities to both domestic and international investors.",
    clr: "#bb02ff",
  },
  {
    id: 4,
    quest:
      "Can individuals invest with Capital Partners Investment Limited, or is it limited to institutional investors?",
    ans: "Both individuals and institutional investors can invest.",
    clr: "#01b4ff",
  },
  {
    id: 5,
    quest:
      "What is the track record of Capital Partners Investment Limited in terms of investment performance?",
    ans: "We combine our extensive industry knowledge, market insights, and investment expertise to identify and execute value-driven opportunities.",
    clr: "#0f8a1c",
  },
  {
    id: 6,
    quest:
      "What is the investment strategy employed by Capital Partners Investment Limited?",
    ans: " Diversification, we spread money out over lots of different investments such as real estate, food, transportation, and healthcare.",
    clr: "#4500ff",
  },
  {
    id: 7,
    quest:
      "How does Capital Partners Investment Limited assess and manage investment risk.",
    ans: "Our investment strategy is designed to maximize and sustain long term returns without incurring undue risk. Our portfolio is structured to be resilient in the face of wide-ranging market and economic conditions.",
    clr: "#ff5b0f",
  },
  {
    id: 8,
    quest:
      "Are there any specific industries or sectors that Capital Partners Investment Limited focuses on?",
    ans: "Yes, our core investment sectors are Transportation, Real Estate, Health, Technology, Oil and Gas, Education, and Food.",
    clr: "#be01fe",
  },
  {
    id: 9,
    quest:
      "What is the fee structure for investing with Capital Partners Investment Limited?",
    ans: "Each unit of investment cost #50,000. You can investment on many units as you desire.",
    clr: "#00eaff",
  },
  {
    id: 10,
    quest:
      "How frequently does Capital Partners Investment Limited provide updates or reports on investment performance to investors?",
    ans: "We are committed to transparency and accountability. Investors can access detailed reports including performance summaries, earning statements, and transaction histories.",
    clr: "#70f570",
  },
  {
    id: 11,
    quest:
      "Does Capital Partners Investment Limited offer any additional services or support to its investors?",
    ans: "Yes, we have a dedicated customer/investor support.",
    clr: "#c32bac",
  },
  {
    id: 12,
    quest:
      "What is the process for opening an investment account with Capital Partners Investment Limited?",
    ans: "Very simple process, just register with an active email address, then proceed to investment portal after the basic registration.",
    clr: "#3c8ce7",
  },
  {
    id: 13,
    quest:
      "How does Capital Partners Investment Limited handle client confidentiality and data security?",
    ans: "Check the privacy policy.",
    clr: "#fd6e6a",
  },
  {
    id: 14,
    quest:
      "Is there a minimum investment holding period required when investing with Capital Partners Investment Limited?",
    ans: "No, however, a penalty fee of [40percentage] will be charged on the total ROI accrued until the date of termination if the Investor decides to terminate the investment before the full cycle of the investment days.",
    clr: "#ffc600",
  },
  {
    id: 15,
    quest:
      "What is the level of transparency provided by Capital Partners Investment Limited regarding investment decisions and portfolio holdings?",
    ans: "100% transparent, we operate an open book system.",
    clr: "#14ff47",
  },
  {
    id: 16,
    quest:
      "Does Capital Partners Investment Limited provide any educational resources or guidance to help investors make informed decisions?",
    ans: "Yes",
    clr: "#da00ff",
  },
  {
    id: 17,
    quest:
      "What is the typical timeline for accessing funds or receiving returns on investments with Capital Partners Investment Limited?",
    ans: "Daily, you access your funds and investment on a daily basis, you can also withdraw everyday.",
    clr: "#e91e63",
  },
  {
    id: 18,
    quest:
      "Can investors customize their investment preferences or portfolios with Capital Partners Investment Limited?",
    ans: "No.",
    clr: "#2196f3",
  },
];
export const PrivacyText = [
  {
    index: 1,
    title: "Information We Collect",
    subdetails: [
      {
        id: 1.1,
        text: "Personal Information",
        subtext:
          "We may collect various types of personal information when you interact with us, including but not limited to:",
        sub: [
          {
            i: 1,
            title: "Name",
          },
          {
            i: 2,
            title:
              "Contact information (email address, phone number, postal address)",
          },
          {
            i: 3,
            title:
              "Financial information (investment preferences, income, assets)",
          },
          {
            i: 4,
            title: "Employment details",
          },
          {
            i: 5,
            title: "Identification documents (passport, driver's license)",
          },
          {
            i: 6,
            title: "Transaction history",
          },
          {
            i: 7,
            title:
              "Communications with us (emails, chat logs, telephone calls)",
          },
        ],
      },
      {
        id: 1.2,
        text: "Non-Personal Information",
        subtext:
          "We may also collect non-personal information automatically when you visit our website or use our services. This information may include your IP address, browser type, device information, operating system, and browsing behavior on our website.",
      },
    ],
  },
  {
    index: 2,
    title: "Use of Information",
    subdetails: [
      {
        id: 2.1,
        text: "We use the collected information for the following purposes:",
        subtext: "",
        sub: [
          {
            i: 1,
            title: "Providing and improving our services",
          },
          {
            i: 2,
            title: "Communicating with you and responding to your inquiries",
          },
          {
            i: 3,
            title: "Processing and managing your investment transactions",
          },
          {
            i: 4,
            title: "Complying with legal and regulatory obligations",
          },
          {
            i: 5,
            title:
              "Protecting against fraud, unauthorized access, or other potential risks",
          },
          {
            i: 6,
            title: "Conducting research and analysis to enhance our services",
          },
          {
            i: 7,
            title:
              "Sending you marketing communications, subject to your consent",
          },
        ],
      },
    ],
  },
];
export const ThirdPrivacyText = [
  {
    id: 3,
    text: "Legal Basis for Processing",
    subdetails:
      "We process your personal information based on one or more of the following legal grounds:",
    subtext: [
      {
        id: 1,
        text: "Performance of a contract: Where the processing is necessary for the performance of a contract with you or to take steps at your request prior to entering into a contract.",
      },
      {
        id: 2,
        text: "Legitimate interests: Where the processing is necessary for our legitimate interests or the legitimate interests of a third party, provided that such interests are not overridden by your fundamental rights and freedoms.",
      },
      {
        id: 3,
        text: "Compliance with legal obligations: Where the processing is necessary for compliance with our legal obligations, such as anti-money laundering and know-your-customer requirements.",
      },
      {
        id: 4,
        text: "Consent: Where you have provided your explicit consent to the processing of your personal information for specific purposes.",
      },
    ],
  },
  {
    id: 4,
    text: "Data Sharing",
    subdetails:
      "We may share your personal information with third parties in the following circumstances:",
    subtext: [
      {
        id: 1,
        text: "Service Providers: We may engage trusted third-party service providers to assist us in delivering our services, such as financial institutions, custodians, auditors, and legal advisors. These service providers are bound by confidentiality obligations and are only authorized to process personal information as necessary to provide the agreed services.",
      },
      {
        id: 2,
        text: "Legal Compliance: We may disclose personal information to comply with applicable laws, regulations, legal processes, or enforceable governmental requests.",
      },
      {
        id: 3,
        text: "Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred as part of the transaction, subject to appropriate confidentiality and security measures.",
      },
    ],
  },
];

export const Terms = [
  {
    id: 1,
    title: "Investment Portfolio Details:",
    subtext: [
      {
        index: 1,
        text: "The Company offers an investment portfolio with a guaranteed Return on Investment (ROI) of 30% over a period of 500 days.",
      },
      {
        index: 2,
        text: "The ROI is calculated based on the initial investment amount made by the Investor.",
      },
      {
        index: 3,
        text: "The ROI can be withdrawn by the Investor on a daily basis.",
      },
    ],
  },
  {
    id: 2,
    title: "Investment Amount:",
    subtext: [
      {
        index: 1,
        text: "The minimum investment amount required to participate in the portfolio is [Fifty Thousand Naira].",
      },
      {
        index: 2,
        text: "The maximum investment amount permitted is not specified.",
      },
      {
        index: 3,
        text: "The Investor can choose the investment amount within the specified minimum and maximum limits.",
      },
    ],
  },
   {
    id: 3,
    title: "ROI Calculation:",
    subtext: [
      {
        index: 1,
        text: "The ROI of 30% will be calculated on a combined period of 500days.",
      },
      {
        index: 2,
        text: "The ROI of 30% will be calculated on a combined period of 500days.",
      },
      {
        index: 3,
        text: "The ROI of 30% will be calculated on a combined period of 500days.",
      },
    ],
  },
];
