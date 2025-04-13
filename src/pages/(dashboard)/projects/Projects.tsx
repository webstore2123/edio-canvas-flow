
import { useState } from "react";
import { DashboardLayout } from "@/components/custom/DashboardLayout";
import { ProjectCard } from "@/components/custom/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, FilePlus, Search } from "lucide-react";

// Sample data
const projectsData = [
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
  {
    id: "5",
    title: "Brand Guidelines",
    description: "Comprehensive brand guidelines document outlining logo usage, color palette, typography, and brand voice.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800",
    status: "completed",
    lastUpdated: "1w ago",
    teamSize: 3,
    collaborators: [
      { id: "u3", name: "David Kim", avatar: "https://i.pravatar.cc/150?u=a3" },
      { id: "u5", name: "James Wilson", avatar: "https://i.pravatar.cc/150?u=a5" },
      { id: "u11", name: "Nina Patel", avatar: "https://i.pravatar.cc/150?u=a11" },
    ],
  },
  {
    id: "6",
    title: "Podcast Series",
    description: "Six-episode podcast series on industry trends featuring interviews with thought leaders and innovators.",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800",
    status: "pending",
    lastUpdated: "2w ago",
    teamSize: 4,
    collaborators: [
      { id: "u1", name: "Alex Johnson", avatar: "https://i.pravatar.cc/150?u=a1" },
      { id: "u7", name: "Patricia Moore", avatar: "https://i.pravatar.cc/150?u=a7" },
      { id: "u12", name: "Thomas Wright", avatar: "https://i.pravatar.cc/150?u=a12" },
      { id: "u13", name: "Kelly Nguyen", avatar: "https://i.pravatar.cc/150?u=a13" },
    ],
  },
];

export function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || project.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
            <p className="text-muted-foreground">
              Manage and explore all your creative projects
            </p>
          </div>
          <Button className="mt-4 md:mt-0" size="sm">
            <FilePlus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search projects..."
              className="pl-8 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="w-full md:w-[180px]">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Projects</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-muted p-4 mb-4">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium">No projects found</h3>
            <p className="text-muted-foreground mt-1 max-w-md">
              We couldn't find any projects that match your search criteria. Try adjusting your filters or create a new project.
            </p>
            <Button className="mt-4" variant="outline">
              <FilePlus className="mr-2 h-4 w-4" />
              Create Project
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default Projects;
