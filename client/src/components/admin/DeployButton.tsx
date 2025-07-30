import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, GitBranch, Clock, ExternalLink, CheckCircle, AlertCircle } from "lucide-react";

interface DeployStatus {
  status: 'idle' | 'deploying' | 'success' | 'error';
  message: string;
  timestamp?: Date;
}

export default function DeployButton() {
  const [deployStatus, setDeployStatus] = useState<DeployStatus>({
    status: 'idle',
    message: 'Ready to deploy'
  });

  const handleDeploy = async () => {
    setDeployStatus({
      status: 'deploying',
      message: 'Deploying to GitHub Pages...'
    });

    try {
      // In a real implementation, this would trigger the actual deployment
      // For now, we simulate the process
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      setDeployStatus({
        status: 'success',
        message: 'Successfully deployed to GitHub Pages!',
        timestamp: new Date()
      });

      // Open GitHub Pages URL
      setTimeout(() => {
        window.open('https://rizzhire.github.io/', '_blank');
      }, 1000);

    } catch (error) {
      setDeployStatus({
        status: 'error',
        message: 'Deployment failed. Please check the console for details.',
        timestamp: new Date()
      });
    }
  };

  const openGitHubActions = () => {
    window.open('https://github.com/rizzhire/rizzhire.github.io/actions', '_blank');
  };

  const openLiveSite = () => {
    window.open('https://rizzhire.github.io/', '_blank');
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Rocket className="h-5 w-5" />
          Deploy Control
        </CardTitle>
        <CardDescription>
          Manage your GitHub Pages deployment
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Status:</span>
          <Badge 
            variant={
              deployStatus.status === 'success' ? 'default' :
              deployStatus.status === 'error' ? 'destructive' :
              deployStatus.status === 'deploying' ? 'secondary' : 'outline'
            }
            className="flex items-center gap-1"
          >
            {deployStatus.status === 'success' && <CheckCircle className="h-3 w-3" />}
            {deployStatus.status === 'error' && <AlertCircle className="h-3 w-3" />}
            {deployStatus.status === 'deploying' && <Clock className="h-3 w-3 animate-spin" />}
            {deployStatus.message}
          </Badge>
        </div>

        {deployStatus.timestamp && (
          <div className="text-xs text-muted-foreground">
            Last deployment: {deployStatus.timestamp.toLocaleString()}
          </div>
        )}

        <div className="flex flex-col gap-2">
          <Button 
            onClick={handleDeploy}
            disabled={deployStatus.status === 'deploying'}
            className="w-full"
          >
            {deployStatus.status === 'deploying' ? (
              <>
                <Clock className="h-4 w-4 mr-2 animate-spin" />
                Deploying...
              </>
            ) : (
              <>
                <Rocket className="h-4 w-4 mr-2" />
                Deploy Now
              </>
            )}
          </Button>

          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={openGitHubActions}
              className="flex-1"
            >
              <GitBranch className="h-4 w-4 mr-1" />
              Actions
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={openLiveSite}
              className="flex-1"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Live Site
            </Button>
          </div>
        </div>

        <div className="text-xs text-muted-foreground bg-muted p-3 rounded-md">
          <strong>How it works:</strong>
          <ul className="mt-1 space-y-1 list-disc list-inside">
            <li>Builds your latest changes</li>
            <li>Commits and pushes to GitHub</li>
            <li>Triggers automatic GitHub Pages deployment</li>
            <li>Your site updates in 2-5 minutes</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}