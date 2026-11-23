#!/usr/bin/env python3
"""Generate an ATS-friendly resume PDF with Senior Full Stack branding."""

from pathlib import Path

from pypdf import PdfReader, PdfWriter
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    HRFlowable,
    ListFlowable,
    ListItem,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "Sumit_Jaiswal_Resume.pdf"

TITLE = "Sumit Jaiswal | Senior Full Stack Developer"
HEADLINE = (
    "Senior Full Stack Developer | MERN Stack | React.js | Next.js | Node.js | AI Integration"
)
DESCRIPTION = (
    "Senior Full Stack Developer with 6+ years of experience designing, developing, and "
    "deploying scalable web and mobile applications. Strong hands-on expertise in JavaScript, "
    "TypeScript, React.js, Next.js, Node.js, and Express.js, with additional backend depth in "
    "Python, Django, FastAPI, Laravel, and PHP. Experienced with PostgreSQL, MongoDB, MySQL, "
    "AWS, Docker, CI/CD, plus OpenAI, LangChain, RAG, and AI-powered product features. Proven "
    "in technical leadership, end-to-end project ownership, and reliable production delivery."
)

INK = HexColor("#111827")
MUTED = HexColor("#374151")
RULE = HexColor("#9CA3AF")


def styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=18,
            leading=22,
            textColor=INK,
            alignment=TA_CENTER,
            spaceAfter=4,
        ),
        "headline": ParagraphStyle(
            "Headline",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.5,
            leading=12,
            textColor=INK,
            alignment=TA_CENTER,
            spaceAfter=6,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.5,
            leading=11,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=2,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8,
            leading=10,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=8,
        ),
        "h2": ParagraphStyle(
            "H2",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=12,
            textColor=INK,
            spaceBefore=8,
            spaceAfter=3,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9,
            leading=12,
            textColor=INK,
            alignment=TA_JUSTIFY,
            spaceAfter=4,
        ),
        "skill": ParagraphStyle(
            "Skill",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.5,
            leading=11,
            textColor=INK,
            spaceAfter=1.5,
        ),
        "role": ParagraphStyle(
            "Role",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9,
            leading=11,
            textColor=INK,
            spaceBefore=5,
            spaceAfter=1,
        ),
        "period": ParagraphStyle(
            "Period",
            parent=base["Normal"],
            fontName="Helvetica-Oblique",
            fontSize=8,
            leading=10,
            textColor=MUTED,
            spaceAfter=2,
        ),
        "project": ParagraphStyle(
            "Project",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9,
            leading=11,
            textColor=INK,
            spaceBefore=4,
            spaceAfter=1,
        ),
        "stack": ParagraphStyle(
            "Stack",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8,
            leading=10,
            textColor=MUTED,
            spaceAfter=2,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.5,
            leading=11,
            textColor=INK,
            leftIndent=0,
        ),
    }


def bullets(items, s):
    return ListFlowable(
        [ListItem(Paragraph(item, s["bullet"]), leftIndent=12, bulletColor=INK) for item in items],
        bulletType="bullet",
        start="•",
        leftIndent=10,
        bulletFontSize=8,
        spaceBefore=0,
        spaceAfter=2,
    )


def section(title, s):
    return [
        Paragraph(title, s["h2"]),
        HRFlowable(width="100%", thickness=0.6, color=RULE, spaceBefore=0, spaceAfter=4),
    ]


def build():
    s = styles()
    doc = SimpleDocTemplate(
        str(OUT),
        pagesize=letter,
        leftMargin=0.6 * inch,
        rightMargin=0.6 * inch,
        topMargin=0.45 * inch,
        bottomMargin=0.45 * inch,
        title=TITLE,
        author="Sumit Jaiswal",
        subject=DESCRIPTION,
        creator="Sumit Jaiswal Portfolio",
    )

    story = []
    story.append(Paragraph("SUMIT JAISWAL", s["name"]))
    story.append(Paragraph(HEADLINE, s["headline"]))
    story.append(
        Paragraph(
            "Lucknow, Uttar Pradesh 226021 | +91 73238 37297 | someitjaiswal.sj.97@gmail.com",
            s["contact"],
        )
    )
    story.append(
        Paragraph(
            "Willing to relocate: Anywhere | Eligible to work in India | Notice Period: 0–15 days",
            s["meta"],
        )
    )

    story.extend(section("PROFESSIONAL SUMMARY", s))
    story.append(Paragraph(DESCRIPTION, s["body"]))

    story.extend(section("TECHNICAL SKILLS", s))
    skills = [
        "<b>Languages:</b> JavaScript, TypeScript, Python, PHP, SQL",
        "<b>Frontend:</b> React.js, Next.js, Vue.js, Tailwind CSS, Flutter",
        "<b>Backend &amp; APIs:</b> Node.js, Express.js, RESTful APIs, Laravel, CodeIgniter, FastAPI, Django, Prisma",
        "<b>Databases:</b> PostgreSQL, MongoDB, MySQL, Vector Databases (ChromaDB, Pinecone)",
        "<b>AI / LLM:</b> OpenAI APIs, LangChain, RAG, LLMs, AI Agents, Prompt Engineering",
        "<b>Cloud &amp; DevOps:</b> AWS, Docker, CI/CD (GitHub Actions), DigitalOcean, Git, GitHub, Bitbucket, PWA, Performance Optimization",
    ]
    for line in skills:
        story.append(Paragraph(line, s["skill"]))

    story.extend(section("KEY PROJECTS", s))
    story.append(Paragraph("Sumit AI — AI Health Consultant", s["project"]))
    story.append(
        Paragraph(
            "Tech Stack: Next.js • Node.js • Express • Prisma • PostgreSQL • OpenAI API",
            s["stack"],
        )
    )
    story.append(
        bullets(
            [
                "Built a full-stack AI-powered health consultation platform supporting multiple modalities (Homeopathy, Ayurveda, Allopathy, Yoga).",
                "Implemented natural language querying for health, medicines, yoga poses, and wellness advice using OpenAI.",
                "Designed secure backend APIs, Prisma + PostgreSQL data layer, and responsive Next.js frontend with production-ready architecture.",
            ],
            s,
        )
    )
    story.append(Paragraph("Sumit RAG — Document Q&amp;A System", s["project"]))
    story.append(
        Paragraph(
            "Tech Stack: Python • FastAPI • ChromaDB • OpenAI • LangChain",
            s["stack"],
        )
    )
    story.append(
        bullets(
            [
                "Developed a Retrieval-Augmented Generation (RAG) system enabling users to upload documents and ask context-aware questions.",
                "Implemented document embedding, vector search with ChromaDB, and OpenAI-powered source-grounded answers.",
                "Built scalable FastAPI endpoints for document ingestion and real-time querying.",
            ],
            s,
        )
    )

    story.extend(section("PROFESSIONAL EXPERIENCE", s))

    story.append(
        Paragraph(
            "Senior Full Stack Developer | Skyestone AI Pvt Ltd — Lucknow, Uttar Pradesh",
            s["role"],
        )
    )
    story.append(Paragraph("January 2026 – Present | Full-time | Notice Period: 0–15 days", s["period"]))
    story.append(
        bullets(
            [
                "Leading hybrid web and mobile application development using MERN stack components, Laravel, and AI-assisted tools; owning features from design to production deployment.",
                "Developing production features with OpenAI APIs, LLMs, LangChain, FastAPI, Django, RAG systems, and Laravel.",
                "Designing scalable backend systems and RESTful APIs while coordinating technical decisions across the team.",
                "Integrating vector search and knowledge retrieval patterns; applying DevOps practices for reliable deployments.",
            ],
            s,
        )
    )

    story.append(
        Paragraph(
            "Senior Full Stack Engineer | Jamtech Technologies — Lucknow, Uttar Pradesh",
            s["role"],
        )
    )
    story.append(Paragraph("June 2023 – January 2026 | Full-time", s["period"]))
    story.append(
        bullets(
            [
                "Led the development team on multiple concurrent projects: coordinated tasks, conducted code reviews, managed deliverables, and drove technical decisions.",
                "Developed and maintained scalable web applications, PWAs, and RESTful APIs using Node.js, Express, Laravel, Django, and FastAPI.",
                "Owned complex projects end-to-end, integrating third-party services and AI-powered solutions including chatbots.",
                "Deployed and managed applications on AWS and cPanel; optimized performance and ensured reliable production releases using DevOps practices.",
                "Collaborated with cross-functional teams to analyze business requirements and deliver projects on schedule.",
            ],
            s,
        )
    )

    story.append(
        Paragraph(
            "Full Stack Developer | Gautam Tech Solutions — Patna, Bihar",
            s["role"],
        )
    )
    story.append(Paragraph("June 2022 – June 2023 | Full-time", s["period"]))
    story.append(
        bullets(
            [
                "Owned full lifecycle of web applications and websites, including server management and production issue resolution.",
                "Updated and extended application modules based on evolving business requirements. Built backend services with Laravel, Django, and FastAPI.",
            ],
            s,
        )
    )

    story.append(
        Paragraph(
            "Full Stack Developer | Bhavya Technologies Pvt Ltd — Patna, Bihar",
            s["role"],
        )
    )
    story.append(Paragraph("August 2020 – September 2021 | Full-time", s["period"]))
    story.append(
        bullets(
            [
                "Built responsive websites and web applications covering frontend, backend, and basic SEO using PHP, Laravel, and JavaScript.",
                "Contributed to UI/UX through logo and graphic design work while delivering functional full-stack features.",
            ],
            s,
        )
    )

    story.append(
        Paragraph(
            "Web Developer | Sam Softech Consultancy Pvt Ltd — Patna, Bihar",
            s["role"],
        )
    )
    story.append(Paragraph("February 2019 – March 2020 | Full-time", s["period"]))
    story.append(
        bullets(
            [
                "Developed websites using PHP (frontend and backend), establishing a strong foundation in full-stack web development with Laravel and CodeIgniter.",
                "Delivered clean, maintainable code across diverse client projects in multiple business domains.",
            ],
            s,
        )
    )

    story.extend(section("EDUCATION", s))
    story.append(
        Paragraph(
            "<b>Master of Computer Applications (MCA)</b> | BD College — Mithapur, Patna | February 2021 – 2023",
            s["skill"],
        )
    )
    story.append(
        Paragraph(
            "<b>Bachelor of Computer Applications (BCA)</b> | T.P.S. College — Patna, Bihar | September 2015 – December 2018",
            s["skill"],
        )
    )

    doc.build(story)

    # Ensure share metadata is explicit for WhatsApp / LinkedIn / Telegram
    reader = PdfReader(str(OUT))
    writer = PdfWriter()
    writer.append(reader)
    writer.add_metadata(
        {
            "/Title": TITLE,
            "/Author": "Sumit Jaiswal",
            "/Subject": DESCRIPTION,
            "/Keywords": (
                "Sumit Jaiswal, Senior Full Stack Developer, MERN, React.js, Next.js, "
                "Node.js, TypeScript, Python, Laravel, PHP, OpenAI, LangChain, AWS, Docker"
            ),
            "/Creator": "Sumit Jaiswal Portfolio",
            "/Producer": "Sumit Jaiswal Portfolio",
        }
    )
    tmp = OUT.with_suffix(".tmp.pdf")
    with open(tmp, "wb") as f:
        writer.write(f)
    tmp.replace(OUT)
    print(f"Wrote {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    build()
