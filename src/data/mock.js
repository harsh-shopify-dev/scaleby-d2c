// Mock data for ScaleBy landing site
import {
  MessageSquare, Bot, Megaphone, Users, BarChart3, GitBranch,
  ShoppingBag, GraduationCap, Building2, Stethoscope, Banknote,
  Store, Plane, Car, Sparkles, Zap, Shield, Clock,
} from 'lucide-react';

export const SCALEBY_LOGO = 'https://customer-assets.emergentagent.com/job_pet-tasks-hub-1/artifacts/d3mkzgu9_scaleby-logo.svg';
export const SCALEBY_LOGO_DARK = 'https://customer-assets.emergentagent.com/job_pet-tasks-hub-1/artifacts/q24ksll5_scaleby-logo-dark.svg';

export const SCREENSHOTS = {
  dashboard: '/screenshots/media__1783186925159.jpg',
  crm: '/screenshots/media__1783186925184.jpg',
  campaign: '/screenshots/media__1783186925240.jpg',
  chatbotFlow: '/screenshots/media__1783186925284.jpg',
  inbox: '/screenshots/media__1783186925311.jpg',
  team: '/screenshots/team_collaboration_1783187110525.jpg'
};

export const NAV_LINKS = [
  { label: 'Features', to: '/features' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Compare', to: '/compare' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const ANNOUNCEMENT = {
  text: 'New: AI Chatbot Builder is now live with visual drag-and-drop flows',
  cta: 'Explore now',
  to: '/features',
};

export const PAIN_POINTS = [
  {
    icon: 'MessagesSquare',
    title: 'Losing leads in WhatsApp threads',
    detail: 'Messages on Instagram, WhatsApp and Messenger pile up in different inboxes. By the time someone replies, the lead has already messaged a competitor.',
  },
  {
    icon: 'Clock',
    title: 'Manually following up with every customer',
    detail: 'Your team copy-pastes the same follow-up messages by hand, all day \u2014 and still forgets half of them.',
  },
  {
    icon: 'EyeOff',
    title: 'No visibility into team performance',
    detail: "No real-time dashboard means no idea who's responding fast, who's dropping leads, or where revenue is leaking.",
  },
];

export const FEATURES = [
  {
    id: 'inbox',
    icon: MessageSquare,
    tag: 'Unified Inbox',
    title: 'Every conversation, one inbox.',
    description: 'Bring WhatsApp, Instagram DMs and Facebook Messenger into a single, blazing-fast inbox. Assign, tag and reply 3x faster with your whole team.',
    benefit: 'Every channel in one place',
    outcome: 'No more missed leads across platforms',
    bullets: [
      'WhatsApp, Instagram and Messenger in one view',
      'Assign chats to teammates and add private notes',
      'Quick replies, templates and emoji-rich messaging',
      'Lead profile with source, status and timeline',
    ],
    image: 'inbox',
  },
  {
    id: 'chatbot',
    icon: Bot,
    tag: 'AI Chatbot Builder',
    title: 'Build smart chatbots without code.',
    description: 'Drag, drop and connect nodes to design conversational flows that qualify leads, answer FAQs and book demos around the clock.',
    benefit: 'Instant replies, 24/7',
    outcome: 'Capture leads even while your team sleeps',
    bullets: [
      'Visual drag-and-drop flow builder',
      'AI Agent powered by GPT for human-like replies',
      'Send text, buttons, lists, media and CTAs',
      'HTTP requests, delays and conditional logic',
    ],
    image: 'chatbotFlow',
  },
  {
    id: 'broadcast',
    icon: Megaphone,
    tag: 'Broadcast Campaigns',
    title: 'Reach thousands in one click.',
    description: 'Send WhatsApp broadcasts with approved templates, personalized variables, and rich media. Track delivery, reads and replies in real time.',
    benefit: 'Re-engage old leads at scale',
    outcome: 'Turn a cold list into repeat sales',
    bullets: [
      'Official WhatsApp Business API approved templates',
      'Schedule campaigns and segment audiences',
      'Personalize with name, location and custom fields',
      'Live delivery, read and reply analytics',
    ],
    image: 'campaign',
  },
  {
    id: 'crm',
    icon: Users,
    tag: 'CRM & Contacts',
    title: 'A CRM your sales team will actually use.',
    description: 'Every contact comes with full chat history, lead status, source, budget and custom attributes. Filter, segment and act in seconds.',
    benefit: "Every customer's history in one card",
    outcome: 'Personalized follow-ups, not guesswork',
    bullets: [
      'Auto-capture leads from every channel',
      'Custom fields, tags and lifecycle stages',
      'Powerful segmentation for targeted campaigns',
      'Google Calendar sync for booked demos',
    ],
    image: 'crm',
  },
  {
    id: 'team',
    icon: GitBranch,
    tag: 'Team Collaboration',
    title: 'Built for sales teams that move fast.',
    description: 'Roles, permissions, internal notes and chat assignment. Everyone knows what to do, customers never repeat themselves.',
    benefit: 'Clear ownership of every chat',
    outcome: 'Nothing falls through the cracks between agents',
    bullets: [
      'Unlimited agents on Growth plan',
      'Role-based access and permissions',
      'Internal notes, mentions and handoffs',
      'Live agent status and workload view',
    ],
    image: 'team',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    tag: 'Analytics Dashboard',
    title: 'Numbers that drive real decisions.',
    description: 'See campaign performance, agent response times, conversion funnels and revenue impact in a single live dashboard.',
    benefit: 'See response time & conversion by agent',
    outcome: "Fix what's broken before it costs you sales",
    bullets: [
      'Live message and conversation metrics',
      'Agent performance and response time tracking',
      'Campaign ROI and conversion funnels',
      'Weekly, monthly and yearly trend views',
    ],
    image: 'dashboard',
  },
];

export const STATS = [
  { value: 1500, suffix: '+', label: 'Businesses scaling with us' },
  { value: 10, suffix: 'M+', label: 'Messages sent through ScaleBy' },
  { value: 3, suffix: 'x', label: 'Faster customer response time' },
  { value: 40, suffix: '%', label: 'More conversions on average' },
];

export const INDUSTRIES = [
  { icon: ShoppingBag, name: 'E-commerce', desc: 'Abandoned cart recovery, order updates and product catalogs on WhatsApp.' },
  { icon: Building2, name: 'Real Estate', desc: 'Capture buyer leads, auto-qualify them and book site visits 24x7.' },
  { icon: GraduationCap, name: 'Education', desc: 'Counsellor chats, admission flows and class reminders.' },
  { icon: Stethoscope, name: 'Healthcare', desc: 'Appointment booking, prescription nudges and patient follow-ups.' },
  { icon: Banknote, name: 'Finance', desc: 'Loan applications, KYC reminders and policy renewals.' },
  { icon: Store, name: 'Retail', desc: 'Store offers, loyalty points and after-sales support on WhatsApp.' },
  { icon: Plane, name: 'Travel', desc: 'Booking confirmations, trip reminders and group itineraries.' },
  { icon: Car, name: 'Automotive', desc: 'Test drive booking, service reminders and lead nurturing.' },
];

export const TESTIMONIALS = [
  {
    quote: 'We recovered 30% of leads we were losing to slow replies in the first 2 weeks on ScaleBy.',
    name: 'Priya Sharma',
    brand: 'Bloom Skincare',
    role: 'Founder, Bloom Skincare (D2C)',
    result: '+30% leads recovered',
    avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
  },
  {
    quote: 'The unified inbox alone saved our 4-person sales team 2 hours a day. We finally know who replied to what.',
    name: 'Rohit Mehta',
    brand: 'NorthStar Realty',
    role: 'Sales Head, NorthStar Realty',
    result: '2 hours/day saved',
    avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
  },
  {
    quote: 'Our WhatsApp broadcast campaigns now bring in \u20b93.4L/month in repeat sales we were leaving on the table.',
    name: 'Kunal Patel',
    brand: 'Kraft & Co.',
    role: 'Founder, Kraft & Co. (Retail)',
    result: '\u20b93.4L/mo in repeat sales',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

export const CLIENT_LOGOS = [
  'Skullcandy', 'Quikr', 'Physics Wallah', 'Bajaj Finance', 'HomeLane', 'IndiaMart', 'Delhi Transport Corporation'
];

export const YOUTUBE_VIDEO_URL = 'https://youtu.be/9W62fdJRzo4';

export const PRICING_PLANS = [
  {
    name: 'Starter',
    slug: 'starter',
    tagline: 'Perfect for small teams getting started on WhatsApp.',
    prices: { quarter: 3999, year: 9999 },
    badge: null,
    cta: 'Subscribe',
    limits: [
      { label: '10,000 msg / mo' },
      { label: '+ Meta charges', link: '#meta-charges' },
      { label: '5,000 contacts' },
      { label: '2 chatbots' },
      { label: '1 team member' },
    ],
    features: [
      'Inbox & Contacts',
      'Broadcast Campaigns',
      'WhatsApp Templates',
      'Auto & Quick Replies',
      'Tags Manager',
      'Opt-In & Opt-outs Manager',
      'Website Widgets',
    ],
  },
  {
    name: 'Growth',
    slug: 'growth',
    tagline: 'For growing businesses that want full automation power.',
    prices: { quarter: 8999, year: 24999 },
    badge: 'Most Popular',
    cta: 'Subscribe',
    limits: [
      { label: '25,000 msg / mo' },
      { label: '+ Meta charges', link: '#meta-charges' },
      { label: '10,000 contacts' },
      { label: '10 chatbots' },
      { label: '3 team members' },
    ],
    features: [
      'All Starter features',
      'CRM (Leads & Pipelines)',
      'Chatbot Flows',
      'Events & Drip Campaigns',
      'Instagram Automation',
      'Webhooks & API',
    ],
  },
  {
    name: 'Scale Plus',
    slug: 'scale-plus',
    tagline: 'For high-volume teams and multi-brand businesses.',
    prices: { quarter: 11999, year: 35999 },
    badge: null,
    cta: 'Talk to Sales',
    limits: [
      { label: 'Unlimited msg / mo' },
      { label: '+ Meta charges', link: '#meta-charges' },
      { label: 'Unlimited contacts' },
      { label: 'Unlimited chatbots' },
      { label: '10 team members' },
    ],
    features: [
      'All Growth features',
      'App Connect (Integrations)',
      'AI Integrations',
      'E-Commerce Flows',
      'Scale Pass Identity Network',
      'Dedicated Customer Success Manager',
      'Priority WhatsApp + phone support',
    ],
  },
];

export const FAQS = [
  { q: 'How long does it take to get set up?', a: 'Most customers are live within 30 minutes. We help you connect your WhatsApp Business number, import contacts and import your first chatbot flow on a 1:1 onboarding call.' },
  { q: 'Do I need to apply for the WhatsApp Business API separately?', a: 'No. We are an official Meta WhatsApp Business Solution Provider. We handle the entire API approval process for you, usually within 24-48 hours.' },
  { q: 'Can I use my existing WhatsApp number?', a: 'Yes, as long as it is not connected to the regular WhatsApp or WhatsApp Business app. We will help you migrate it to the official API safely.' },
  { q: 'How many team members can I add?', a: 'Starter includes 3 seats. Growth includes unlimited team members at no extra cost.' },
  { q: 'What about WhatsApp conversation charges from Meta?', a: 'Meta charges per conversation directly. We pass these costs through at zero markup. Pricing varies by country and category. We help you optimize and forecast these costs.' },
  { q: 'Do you offer a money back guarantee?', a: 'Yes. If ScaleBy is not for you within 30 days, we will refund every rupee of your subscription. No questions asked.' },
];

export const TRUST_BADGES = [
  { icon: Shield, text: 'Official Meta WhatsApp Partner' },
  { icon: Clock, text: '99.9% uptime SLA' },
  { icon: Sparkles, text: '1500+ growing businesses' },
  { icon: Zap, text: 'Live in 30 minutes' },
];

export const BLOG_POSTS = [
  { title: 'How to 5x your WhatsApp conversions in 30 days', date: 'Jun 24, 2026', category: 'Growth', excerpt: 'A practical playbook used by 200+ ScaleBy customers to turn WhatsApp chats into recurring revenue.', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=70&auto=format' },
  { title: 'WhatsApp Business API pricing in 2026, explained simply', date: 'Jun 18, 2026', category: 'Guide', excerpt: 'Service, marketing, utility and authentication conversations. We break down every category with examples.', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=70&auto=format' },
  { title: '7 chatbot flows every D2C brand must build', date: 'Jun 10, 2026', category: 'Playbook', excerpt: 'From abandoned cart to NPS, the highest-ROI flows you can copy-paste into your ScaleBy workspace today.', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=70&auto=format' },
  { title: 'AI Agents in customer support: a 2026 perspective', date: 'Jun 02, 2026', category: 'AI', excerpt: 'Why GPT-powered agents are replacing scripted bots and how to deploy one in your inbox this week.', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=70&auto=format' },
  { title: 'Instagram DM automation: the do\'s and don\'ts', date: 'May 28, 2026', category: 'Guide', excerpt: 'Stay compliant, stay human, and still automate 80% of your Instagram inbox with ScaleBy.', img: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900&q=70&auto=format' },
  { title: 'Building a unified inbox team that actually closes', date: 'May 20, 2026', category: 'Team', excerpt: 'Roles, SLAs, handoffs and tracking. Everything you need to make your inbox team a profit center.', img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=70&auto=format' },
];

export const TEAM = [
  { name: 'Tushar Joshi', role: 'Founder & CEO', bio: 'Built ScaleBy after watching his own D2C brand lose leads to slow WhatsApp replies.', avatar: '/ScaleBy People/Tushar-Joshi_CEO.jpg' },
  { name: 'Bhavesh Popat', role: 'Founder & CTO', bio: 'Scaled messaging infrastructure and obsessed with turning customer chaos into simple, elegant flows.', avatar: '/ScaleBy People/Bhavesh-Popat_CTO.jpg' },
  { name: 'Nayan', role: 'Head of Engineering', bio: 'Building blazing fast, scalable architectures for 100M+ messages a month.', avatar: '/ScaleBy People/Nayan.png' },
  { name: 'Siddharth Kothari', role: 'Head of Customer Success', bio: 'Personally onboarded our early customers. Still replies to every support message at lightning speed.', avatar: '/ScaleBy People/Siddharth.png' },
];
