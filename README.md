
# Medical Content Business - AI-Powered Healthcare Content Creation

A specialized medical content creation business focused on underserved healthcare markets, leveraging AI tools to deliver high-quality, evidence-based content for healthcare professionals and organizations.

## 🎯 Our Focus Areas

- **Patient-Centered Translation**: Converting complex medical information into accessible patient education materials
- **Culturally Specific Health Content**: Tailored content for diverse populations and cultural contexts
- **Rare Disease Resources**: Specialized content for underserved rare disease communities
- **Mental Health Integration**: Content bridging physical and mental health care
- **Caregiver-Focused Materials**: Resources specifically designed for healthcare caregivers
- **Medical Decision-Making Tools**: Evidence-based tools to support clinical decisions
- **Transition Points in Care**: Content addressing critical care transitions
- **Digital Health Literacy**: Educational materials for healthcare technology adoption

## 🛠 Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI Components
- **Database**: Prisma ORM with PostgreSQL
- **Authentication**: NextAuth.js
- **Content Management**: Markdown-based portfolio system
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- Yarn package manager
- PostgreSQL database (for production)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd medical_content_business
```

2. Install dependencies:
```bash
cd app
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. Initialize the database:
```bash
npx prisma generate
npx prisma migrate dev
```

5. Run the development server:
```bash
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── (pages)/           # Page components
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── sections/          # Homepage sections
│   ├── ui/                # UI component library
│   └── [feature]/         # Feature-specific components
├── lib/                   # Utility functions and configurations
├── prisma/                # Database schema and migrations
├── public/                # Static assets
├── business_documentation/ # Business plans and guides
└── portfolio_samples/     # Content portfolio examples
```

## 🏥 Services Offered

### Core Service Packages

1. **Patient Education Series** - $500-$1,200
   - Culturally adapted materials
   - Multi-language support
   - Visual learning aids

2. **Clinical Decision Support** - $800-$2,000
   - Evidence-based protocols
   - Risk assessment tools
   - Workflow optimization

3. **Healthcare AI Integration** - $1,200-$2,500
   - Implementation guides
   - Training materials
   - Change management support

4. **Rare Disease Resources** - $600-$1,500
   - Specialized content creation
   - Community-focused materials
   - Expert collaboration

## 📄 Portfolio Samples

Our portfolio includes examples of:
- Diabetes Management Guides
- Hypertension Treatment Protocols
- FDA Device Approval Processes
- AI Literacy Training Series
- Interactive Diagnosis Simulations
- Telemedicine Implementation Guides

## 🤝 Professional Background

Licensed Physician Assistant (PA) with active licenses in Pennsylvania and Utah, specializing in:
- Clinical practice experience
- Medical writing and education
- Healthcare technology integration
- Evidence-based content creation

## 📧 Contact Information

For project inquiries and consultations, please visit our [contact page](./contact) or reach out directly through our website.

## 🔒 License

This project is proprietary. All rights reserved.

---

*Empowering healthcare through specialized, AI-enhanced medical content creation.*
