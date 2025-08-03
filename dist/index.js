// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  users;
  jobs;
  testimonials;
  contacts;
  currentUserId;
  currentJobId;
  currentTestimonialId;
  currentContactId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.jobs = /* @__PURE__ */ new Map();
    this.testimonials = /* @__PURE__ */ new Map();
    this.contacts = /* @__PURE__ */ new Map();
    this.currentUserId = 1;
    this.currentJobId = 1;
    this.currentTestimonialId = 1;
    this.currentContactId = 1;
    this.initializeData();
  }
  initializeData() {
    const sampleJobs = [
      {
        title: "Senior Software Engineer",
        company: "Emirates Group",
        location: "Dubai, UAE",
        country: "UAE",
        salary: "AED 15,000 - 25,000",
        type: "Full-time",
        deadline: "8/15/2025",
        description: "Leading software development projects",
        icon: "fas fa-code",
        iconColor: "blue"
      },
      {
        title: "Operations Manager",
        company: "Qatar Airways",
        location: "Doha, Qatar",
        country: "Qatar",
        salary: "QAR 18,000 - 28,000",
        type: "Full-time",
        deadline: "8/10/2025",
        description: "Managing operational excellence",
        icon: "fas fa-plane",
        iconColor: "green"
      },
      {
        title: "Project Manager",
        company: "ARAMCO",
        location: "Riyadh, Saudi Arabia",
        country: "Saudi Arabia",
        salary: "SAR 20,000 - 30,000",
        type: "Contract",
        deadline: "8/20/2025",
        description: "Leading strategic projects",
        icon: "fas fa-chart-line",
        iconColor: "orange"
      },
      {
        title: "Financial Analyst",
        company: "National Bank of Kuwait",
        location: "Kuwait City, Kuwait",
        country: "Kuwait",
        salary: "KWD 1,200 - 1,800",
        type: "Full-time",
        deadline: "8/25/2025",
        description: "Financial analysis and reporting",
        icon: "fas fa-calculator",
        iconColor: "purple"
      }
    ];
    const sampleTestimonials = [
      {
        name: "Sarah Ahmed",
        position: "Data Engineer",
        company: "Emirates Group",
        location: "Dubai, UAE",
        quote: "HireNET transformed my career. Within 3 weeks, I landed my dream job in Dubai with a 40% salary increase.",
        rating: 5,
        initials: "SA"
      },
      {
        name: "Mohammed Al-Rashid",
        position: "Project Manager",
        company: "Qatar Airways",
        location: "Doha, Qatar",
        quote: "The personalized guidance and resume review helped me stand out. Excellent service throughout the process.",
        rating: 5,
        initials: "MA"
      },
      {
        name: "Priya Sharma",
        position: "HR Director",
        company: "ADNOC",
        location: "Abu Dhabi, UAE",
        quote: "Professional, efficient, and results-driven. HireNET exceeded all my expectations for career advancement.",
        rating: 5,
        initials: "PS"
      }
    ];
    sampleJobs.forEach((job) => {
      this.createJob(job);
    });
    sampleTestimonials.forEach((testimonial) => {
      this.createTestimonial(testimonial);
    });
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.currentUserId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async getAllJobs() {
    return Array.from(this.jobs.values());
  }
  async getJob(id) {
    return this.jobs.get(id);
  }
  async createJob(insertJob) {
    const id = this.currentJobId++;
    const job = { ...insertJob, id };
    this.jobs.set(id, job);
    return job;
  }
  async getAllTestimonials() {
    return Array.from(this.testimonials.values());
  }
  async getTestimonial(id) {
    return this.testimonials.get(id);
  }
  async createTestimonial(insertTestimonial) {
    const id = this.currentTestimonialId++;
    const testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
  async createContact(insertContact) {
    const id = this.currentContactId++;
    const contact = {
      ...insertContact,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }
  async getAllContacts() {
    return Array.from(this.contacts.values());
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var jobs = pgTable("jobs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  location: text("location").notNull(),
  country: text("country").notNull(),
  salary: text("salary").notNull(),
  type: text("type").notNull(),
  // full-time, part-time, contract
  deadline: text("deadline").notNull(),
  description: text("description"),
  icon: text("icon").notNull(),
  iconColor: text("icon_color").notNull()
});
var testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  position: text("position").notNull(),
  company: text("company").notNull(),
  location: text("location").notNull(),
  quote: text("quote").notNull(),
  rating: integer("rating").notNull(),
  initials: text("initials").notNull()
});
var contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var insertJobSchema = createInsertSchema(jobs).omit({
  id: true
});
var insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true
});
var insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true
});

// server/routes.ts
import { z } from "zod";
async function registerRoutes(app2) {
  app2.get("/api/jobs", async (req, res) => {
    try {
      const jobs2 = await storage.getAllJobs();
      res.json(jobs2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch jobs" });
    }
  });
  app2.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials2 = await storage.getAllTestimonials();
      res.json(testimonials2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });
  app2.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.status(201).json(contact);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid contact data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create contact" });
      }
    }
  });
  app2.get("/api/contacts", async (req, res) => {
    try {
      const contacts2 = await storage.getAllContacts();
      res.json(contacts2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contacts" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  base: process.env.NODE_ENV === "production" ? "/" : "/",
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
