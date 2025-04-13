
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export interface ProjectCardProps {
  id: string;
  title: string;
  description?: string;
  image?: string;
  status: "active" | "completed" | "pending";
  lastUpdated: string;
  teamSize: number;
  collaborators: Array<{
    id: string;
    name: string;
    avatar?: string;
  }>;
  className?: string;
}

export function ProjectCard({
  id,
  title,
  description,
  image,
  status,
  lastUpdated,
  teamSize,
  collaborators,
  className,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Determine badge color based on status
  const getBadgeVariant = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "completed":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Card 
            className={cn(
              "overflow-hidden transition-all hover:shadow-md cursor-pointer",
              className
            )}
          >
            {image && (
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <CardHeader className="p-4">
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{title}</CardTitle>
                <Badge className={cn("ml-2 font-normal capitalize", getBadgeVariant(status))}>
                  {status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              {description && <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>}
            </CardContent>
            <CardFooter className="flex justify-between p-4 pt-0">
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                <span>{lastUpdated}</span>
              </div>
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-2">
                  {collaborators.slice(0, 3).map((collaborator) => (
                    <Avatar key={collaborator.id} className="h-6 w-6 border-2 border-background">
                      <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
                      <AvatarFallback>{collaborator.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  ))}
                  {collaborators.length > 3 && (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-muted text-xs">
                      +{collaborators.length - 3}
                    </div>
                  )}
                </div>
                <Users className="h-4 w-4" />
                <span className="ml-1 text-sm">{teamSize}</span>
              </div>
            </CardFooter>
          </Card>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl">{title}</DialogTitle>
              <Badge className={cn("ml-2 font-normal capitalize", getBadgeVariant(status))}>
                {status}
              </Badge>
            </div>
          </DialogHeader>
          
          {image && (
            <div className="aspect-video w-full overflow-hidden rounded-md">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover"
              />
            </div>
          )}
          
          <div className="space-y-4">
            {description && <p className="text-muted-foreground">{description}</p>}
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center rounded-md bg-muted p-2">
                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Last updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center rounded-md bg-muted p-2">
                <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Team size: {teamSize}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Team Members</h3>
              <div className="flex flex-wrap gap-2">
                {collaborators.map((collaborator) => (
                  <div 
                    key={collaborator.id}
                    className="flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm"
                  >
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
                      <AvatarFallback>{collaborator.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{collaborator.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button variant="outline">View Details</Button>
              <Button>Open Project</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
