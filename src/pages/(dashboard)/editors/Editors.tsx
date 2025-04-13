
import { DashboardLayout } from "@/components/custom/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, UserPlus, Users, Filter, Briefcase, Clock, Star } from "lucide-react";

// Sample data
const editorsData = [
  {
    id: "e1",
    name: "Alex Johnson",
    avatar: "https://i.pravatar.cc/150?u=a1",
    role: "Senior Editor",
    specialty: ["Video", "Photography"],
    availability: "Available",
    rating: 4.9,
    projectsCompleted: 34,
    recentActivity: "1h ago",
  },
  {
    id: "e2",
    name: "Maria Garcia",
    avatar: "https://i.pravatar.cc/150?u=a2",
    role: "Content Editor",
    specialty: ["Copywriting", "Blog Posts"],
    availability: "Busy",
    rating: 4.7,
    projectsCompleted: 27,
    recentActivity: "3h ago",
  },
  {
    id: "e3",
    name: "David Kim",
    avatar: "https://i.pravatar.cc/150?u=a3",
    role: "Creative Director",
    specialty: ["Brand Identity", "Marketing"],
    availability: "Available",
    rating: 4.8,
    projectsCompleted: 42,
    recentActivity: "Yesterday",
  },
  {
    id: "e4",
    name: "Sarah Brown",
    avatar: "https://i.pravatar.cc/150?u=a4",
    role: "Video Editor",
    specialty: ["Animation", "Motion Graphics"],
    availability: "Away",
    rating: 4.6,
    projectsCompleted: 19,
    recentActivity: "2d ago",
  },
  {
    id: "e5",
    name: "James Wilson",
    avatar: "https://i.pravatar.cc/150?u=a5",
    role: "Graphic Designer",
    specialty: ["Illustration", "UI/UX"],
    availability: "Available",
    rating: 4.9,
    projectsCompleted: 31,
    recentActivity: "4h ago",
  },
  {
    id: "e6",
    name: "Emily Chen",
    avatar: "https://i.pravatar.cc/150?u=a8",
    role: "Social Media Manager",
    specialty: ["Content Strategy", "Analytics"],
    availability: "Busy",
    rating: 4.7,
    projectsCompleted: 23,
    recentActivity: "5h ago",
  },
];

const getAvailabilityColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "available":
      return "bg-green-100 text-green-800 hover:bg-green-200";
    case "busy":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
    case "away":
      return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    default:
      return "";
  }
};

export function Editors() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Editors</h2>
            <p className="text-muted-foreground">
              Find and collaborate with talented editors
            </p>
          </div>
          <Button className="mt-4 md:mt-0" size="sm">
            <UserPlus className="mr-2 h-4 w-4" />
            Invite Editor
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search editors by name or specialty..."
              className="pl-8 w-full"
            />
          </div>
          <Button variant="outline" className="md:w-[150px]">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {editorsData.map((editor) => (
            <Card key={editor.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardHeader className="p-4 pb-0">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={editor.avatar} alt={editor.name} />
                      <AvatarFallback>{editor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{editor.name}</CardTitle>
                      <CardDescription className="text-sm">{editor.role}</CardDescription>
                    </div>
                  </div>
                  <Badge className={`${getAvailabilityColor(editor.availability)}`}>
                    {editor.availability}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {editor.specialty.map((spec) => (
                      <Badge key={spec} variant="outline" className="bg-accent">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center">
                      <Star className="mr-1.5 h-4 w-4 text-amber-500" />
                      <span>{editor.rating}/5.0</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="mr-1.5 h-4 w-4 text-muted-foreground" />
                      <span>{editor.projectsCompleted} projects</span>
                    </div>
                    <div className="flex items-center col-span-2">
                      <Clock className="mr-1.5 h-4 w-4 text-muted-foreground" />
                      <span>Active {editor.recentActivity}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex gap-2">
                <Button variant="outline" className="flex-1">Profile</Button>
                <Button className="flex-1">Collaborate</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Editors;
