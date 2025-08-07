import { 
  users, 
  jobs, 
  testimonials, 
  contacts,
  type User, 
  type InsertUser,
  type Job,
  type InsertJob,
  type Testimonial,
  type InsertTestimonial,
  type Contact,
  type InsertContact
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllJobs(): Promise<Job[]>;
  getJob(id: number): Promise<Job | undefined>;
  createJob(job: InsertJob): Promise<Job>;
  
  getAllTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: number): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private jobs: Map<number, Job>;
  private testimonials: Map<number, Testimonial>;
  private contacts: Map<number, Contact>;
  private currentUserId: number;
  private currentJobId: number;
  private currentTestimonialId: number;
  private currentContactId: number;

  constructor() {
    this.users = new Map();
    this.jobs = new Map();
    this.testimonials = new Map();
    this.contacts = new Map();
    this.currentUserId = 1;
    this.currentJobId = 1;
    this.currentTestimonialId = 1;
    this.currentContactId = 1;
    
    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Sample jobs
    const sampleJobs: InsertJob[] = [
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

    // Sample testimonials
    const sampleTestimonials: InsertTestimonial[] = [
      {
        name: "Fatima Almasi",
        position: "Head of Human Resources",
        company: "Al Safwa Enterprises",
        location: "Dubai, UAE",
        quote: "HireNET transformed our hiring process. Their deep understanding of Middle East talent markets helped us secure exceptional candidates for our senior positions. Their professional approach and cultural awareness are unmatched.",
        rating: 5,
        initials: "FA",
        photo: "1690380156319_1754557866818.jfif"
      },
      {
        name: "Hamdaad Hakimi",
        position: "HR Director",
        company: "Gulf Bridge Holdings",
        location: "Doha, Qatar",
        quote: "Working with HireNET has been a game-changer for our recruitment strategy. They consistently deliver high-quality candidates who fit perfectly with our company culture and requirements. Truly professional service.",
        rating: 5,
        initials: "HH",
        photo: "1745582043221_1754557397106.jfif"
      },
      {
        name: "Alaa Mahmoud",
        position: "Chief People Officer",
        company: "Meridian Business Solutions",
        location: "Riyadh, Saudi Arabia",
        quote: "HireNET's expertise in operational recruitment within the GCC region is remarkable. They helped us fill our entry-level and mid-tier positions with qualified professionals. Their attention to detail and market knowledge sets them apart.",
        rating: 5,
        initials: "AM",
        photo: "1730012710886_1754557387527.jfif"
      }
    ];

    // Initialize jobs
    sampleJobs.forEach(job => {
      this.createJob(job);
    });

    // Initialize testimonials
    sampleTestimonials.forEach(testimonial => {
      this.createTestimonial(testimonial);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllJobs(): Promise<Job[]> {
    return Array.from(this.jobs.values());
  }

  async getJob(id: number): Promise<Job | undefined> {
    return this.jobs.get(id);
  }

  async createJob(insertJob: InsertJob): Promise<Job> {
    const id = this.currentJobId++;
    const job: Job = { ...insertJob, id };
    this.jobs.set(id, job);
    return job;
  }

  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    return this.testimonials.get(id);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();
