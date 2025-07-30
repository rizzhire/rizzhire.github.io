import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // For GitHub Pages deployment, return mock success responses
  if (window.location.hostname === 'rizzhire.github.io' || import.meta.env.PROD) {
    if (method === 'POST' && url === '/api/contacts') {
      return new Response(JSON.stringify({ success: true, message: "Thank you for your message! We'll get back to you soon." }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }

  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

// Mock data for GitHub Pages deployment
function getMockData(endpoint: string) {
  switch (endpoint) {
    case '/api/jobs':
      return [
        {
          id: 1,
          title: "Senior Software Engineer",
          company: "Emirates Tech Solutions", 
          location: "Dubai, UAE",
          salary: "$80,000 - $120,000",
          type: "Full-time",
          description: "Join our dynamic team building next-generation fintech solutions."
        },
        {
          id: 2,
          title: "Data Scientist",
          company: "Qatar Analytics",
          location: "Doha, Qatar",
          salary: "$70,000 - $100,000", 
          type: "Full-time",
          description: "Drive insights from complex datasets to inform business strategy."
        },
        {
          id: 3,
          title: "Project Manager", 
          company: "Saudi Construction Corp",
          location: "Riyadh, Saudi Arabia",
          salary: "$60,000 - $90,000",
          type: "Full-time",
          description: "Lead cross-functional teams on major infrastructure projects."
        },
        {
          id: 4,
          title: "DevOps Engineer",
          company: "Oman Digital",
          location: "Muscat, Oman", 
          salary: "$75,000 - $110,000",
          type: "Full-time",
          description: "Optimize cloud infrastructure and deployment pipelines."
        }
      ];
    case '/api/testimonials':
      return [
        {
          name: "Sarah Ahmed",
          position: "Data Engineer",
          company: "Emirates Airlines",
          rating: 5,
          feedback: "HireNET connected me with my dream job. Their personalized approach made all the difference."
        },
        {
          name: "Mohammed Hassan", 
          position: "Senior Developer",
          company: "Qatar National Bank",
          rating: 5,
          feedback: "Professional service and excellent support throughout the hiring process."
        },
        {
          name: "Fatima Al-Zahra",
          position: "Project Manager", 
          company: "ADNOC",
          rating: 5,
          feedback: "Found the perfect role that matched my skills and career goals perfectly."
        }
      ];
    default:
      return [];
  }
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const endpoint = queryKey.join("/") as string;
    
    // For GitHub Pages deployment, use mock data
    if (window.location.hostname === 'rizzhire.github.io' || import.meta.env.PROD) {
      return getMockData(endpoint);
    }

    const res = await fetch(endpoint, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
