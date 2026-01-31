import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Projects
export const getProjects = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("projects")
      .order("asc")
      .collect();
  },
});

export const getFeaturedProjects = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("featured"), true))
      .order("asc")
      .collect();
  },
});

// Skills
export const getSkills = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("skills")
      .order("asc")
      .collect();
  },
});

// Experience
export const getExperience = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("experience")
      .order("asc")
      .collect();
  },
});

// Contact form
export const submitContact = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("contacts", {
      ...args,
      submittedAt: Date.now(),
    });
  },
});

// Initialize portfolio data
export const initializePortfolioData = mutation({
  args: {},
  handler: async (ctx) => {
    // Check if data already exists
    const existingProjects = await ctx.db.query("projects").collect();
    if (existingProjects.length > 0) {
      return "Data already initialized";
    }

    // Insert projects
    await ctx.db.insert("projects", {
      title: "Inventory Variance Analysis & Reconciliation",
      description: "Comprehensive analysis of inventory discrepancies between SAP system and physical stock counts",
      objective: "Identify root causes of inventory variances and implement corrective measures to reduce shrinkage by 15%",
      tools: ["SAP MM", "Excel Advanced", "Power BI", "SQL"],
      problemStatement: "Monthly inventory audits revealed consistent variances of 8-12% between system stock and physical counts, leading to financial discrepancies and operational inefficiencies.",
      analysis: "Conducted detailed analysis of 500+ SKUs across multiple locations. Identified key variance drivers: timing differences in GR posting (35%), damaged goods not updated (28%), location transfer delays (22%), and system configuration issues (15%).",
      outcome: "Reduced inventory variance from 10.2% to 3.8% within 6 months. Implemented daily reconciliation process and automated alerts for variance thresholds. Saved ₹2.5M annually in inventory write-offs.",
      category: "Inventory Management",
      featured: true,
      order: 1,
    });

    await ctx.db.insert("projects", {
      title: "SAP MM P2P Process Optimization",
      description: "End-to-end analysis and optimization of Procure-to-Pay process in SAP MM module",
      objective: "Streamline P2P process to reduce cycle time by 25% and improve vendor payment accuracy",
      tools: ["SAP MM", "SAP QM", "Excel", "Process Mapping"],
      problemStatement: "P2P cycle time averaged 18 days with 12% payment discrepancies. Manual interventions required in 40% of transactions due to process gaps and system configuration issues.",
      analysis: "Mapped current state P2P process across 8 plants. Identified bottlenecks in GR verification (6 days), invoice matching (4 days), and approval workflows (3 days). Analyzed 2000+ transactions to identify error patterns.",
      outcome: "Reduced P2P cycle time to 12 days (33% improvement). Automated GR-IR matching reduced manual interventions to 15%. Improved vendor payment accuracy to 98.5%. Enhanced cash flow management by ₹15M.",
      category: "Process Improvement",
      featured: true,
      order: 2,
    });

    await ctx.db.insert("projects", {
      title: "MIS Dashboard for Inventory KPIs",
      description: "Automated reporting dashboard for inventory management KPIs and audit metrics",
      objective: "Create real-time visibility into inventory performance metrics for management decision-making",
      tools: ["Power BI", "Excel VBA", "SAP MM", "SQL"],
      problemStatement: "Management lacked real-time visibility into inventory KPIs. Manual report generation took 3 days and was prone to errors. No standardized metrics across locations.",
      analysis: "Designed automated data extraction from SAP MM tables. Created standardized KPI definitions for inventory turnover, stock accuracy, aging analysis, and variance tracking. Implemented daily refresh cycles.",
      outcome: "Reduced reporting time from 3 days to real-time. Improved data accuracy to 99.2%. Enabled proactive inventory management decisions. Management satisfaction increased by 85% based on feedback surveys.",
      category: "MIS & Reporting",
      featured: true,
      order: 3,
    });

    // Insert skills
    const skillsData = [
      { category: "SAP", name: "SAP MM (Materials Management)", level: "Expert", order: 1 },
      { category: "SAP", name: "SAP QM (Quality Management)", level: "Intermediate", order: 2 },
      { category: "SAP", name: "SAP WM (Warehouse Management)", level: "Intermediate", order: 3 },
      { category: "Inventory", name: "Stock Reconciliation", level: "Expert", order: 1 },
      { category: "Inventory", name: "Variance Analysis", level: "Expert", order: 2 },
      { category: "Inventory", name: "Physical Stock Audit", level: "Expert", order: 3 },
      { category: "Inventory", name: "Shrinkage Control", level: "Advanced", order: 4 },
      { category: "Tools", name: "Microsoft Excel (Advanced)", level: "Expert", order: 1 },
      { category: "Tools", name: "Power BI", level: "Intermediate", order: 2 },
      { category: "Tools", name: "SQL", level: "Basic", order: 3 },
      { category: "Tools", name: "VBA Programming", level: "Intermediate", order: 4 },
      { category: "Reporting", name: "MIS Dashboards", level: "Advanced", order: 1 },
      { category: "Reporting", name: "Audit Reports", level: "Expert", order: 2 },
      { category: "Reporting", name: "Management Reporting", level: "Advanced", order: 3 },
      { category: "Reporting", name: "KPI Development", level: "Advanced", order: 4 },
    ];

    for (const skill of skillsData) {
      await ctx.db.insert("skills", skill);
    }

    // Insert experience
    await ctx.db.insert("experience", {
      title: "Inventory Analyst - MIS & SAP MM",
      company: "Manufacturing Excellence Pvt Ltd",
      duration: "Jan 2021 - Present (3.5+ years)",
      location: "Chennai, Tamil Nadu",
      responsibilities: [
        "Monitor and analyze inventory levels across 8 manufacturing plants using SAP MM module",
        "Conduct monthly physical stock audits and reconcile with SAP system data",
        "Prepare comprehensive MIS reports for senior management on inventory KPIs",
        "Support internal audit team with inventory-related documentation and analysis",
        "Identify and investigate inventory variances, implementing corrective actions",
        "Coordinate with procurement, production, and warehouse teams for stock optimization",
        "Maintain master data accuracy in SAP MM for 5000+ material codes",
        "Generate automated reports using Excel VBA and Power BI dashboards"
      ],
      achievements: [
        "Reduced inventory variance from 10.2% to 3.8% through systematic reconciliation process",
        "Implemented automated MIS reporting system, reducing manual effort by 70%",
        "Led cross-functional team to optimize P2P process, achieving 33% cycle time reduction",
        "Received 'Excellence in Process Improvement' award for inventory optimization initiatives",
        "Trained 15+ team members on SAP MM best practices and inventory management"
      ],
      order: 1,
    });

    return "Portfolio data initialized successfully";
  },
});
