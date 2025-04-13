
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/custom/ProjectCard";
import { DashboardLayout } from "@/components/custom/DashboardLayout";
import { CalendarDays, FilePlus, Layers, Users } from "lucide-react";

// Sample data for demonstration
const recentProjects = [
  {
    id: "1",
    title: "Summer Campaign",
    description: "Social media campaign for summer product line launch featuring new apparel and accessories.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800",
    status: "active",
    lastUpdated: "2h ago",
    teamSize: 5,
    collaborators: [
      { id: "u1", name: "Alex Johnson", avatar: "https://i.pravatar.cc/150?u=a1" },
      { id: "u2", name: "Maria Garcia", avatar: "https://i.pravatar.cc/150?u=a2" },
      { id: "u3", name: "David Kim", avatar: "https://i.pravatar.cc/150?u=a3" },
      { id: "u4", name: "Sarah Brown", avatar: "https://i.pravatar.cc/150?u=a4" },
      { id: "u5", name: "James Wilson", avatar: "https://i.pravatar.cc/150?u=a5" },
    ],
  },
  {
    id: "2",
    title: "Product Photography",
    description: "Professional photography session for the new tech gadget line. Includes studio setup and post-processing.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
    status: "pending",
    lastUpdated: "1d ago",
    teamSize: 3,
    collaborators: [
      { id: "u2", name: "Maria Garcia", avatar: "https://i.pravatar.cc/150?u=a2" },
      { id: "u6", name: "Chris Lee", avatar: "https://i.pravatar.cc/150?u=a6" },
      { id: "u7", name: "Patricia Moore", avatar: "https://i.pravatar.cc/150?u=a7" },
    ],
  },
  {
    id: "3",
    title: "Website Refresh",
    description: "Complete redesign of the company website with updated branding guidelines and improved UX/UI.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800",
    status: "completed",
    lastUpdated: "3d ago",
    teamSize: 4,
    collaborators: [
      { id: "u1", name: "Alex Johnson", avatar: "https://i.pravatar.cc/150?u=a1" },
      { id: "u3", name: "David Kim", avatar: "https://i.pravatar.cc/150?u=a3" },
      { id: "u8", name: "Emily Chen", avatar: "https://i.pravatar.cc/150?u=a8" },
      { id: "u9", name: "Robert Taylor", avatar: "https://i.pravatar.cc/150?u=a9" },
    ],
  },
  {
    id: "4",
    title: "Annual Report",
    description: "Design and layout for the company's annual report. Includes data visualization and executive summaries.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800",
    status: "active",
    lastUpdated: "5d ago",
    teamSize: 2,
    collaborators: [
      { id: "u5", name: "James Wilson", avatar: "https://i.pravatar.cc/150?u=a5" },
      { id: "u10", name: "Lisa Martinez", avatar: "https://i.pravatar.cc/150?u=a10" },
    ],
  },
];

const statCards = [
  {
    title: "Total Projects",
    value: "24",
    icon: Layers,
    change: "+2 this month",
    positive: true,
  },
  {
    title: "Active Editors",
    value: "13",
    icon: Users,
    change: "+5 this week",
    positive: true,
  },
  {
    title: "Upcoming Deadlines",
    value: "7",
    icon: CalendarDays,
    change: "3 this week",
    positive: false,
  },
];

export function Overview() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <p className="text-muted-foreground">
              Welcome back! Here's an overview of your creative projects.
            </p>
          </div>
          <Button className="mt-4 md:mt-0" size="sm">
            <FilePlus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {statCards.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <stat.icon className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">{stat.title}</span>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <h3 className="text-3xl font-bold">{stat.value}</h3>
                <span className={`text-sm ${stat.positive ? 'text-green-600' : 'text-amber-600'}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Recent Projects</h3>
            <Button variant="link" className="text-sm">View all</Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {recentProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Overview;
