import DeployButton from "@/components/admin/DeployButton";

export default function DeployPage() {
  return (
    <div className="min-h-screen bg-cream py-20">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Deployment Center
          </h1>
          <p className="text-xl text-gray-600">
            Deploy your changes to the live HireNET website
          </p>
        </div>
        
        <DeployButton />
        
        <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Deployment Options</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium">Automatic Deployment</h3>
              <p className="text-sm text-gray-600">
                Every push to the main branch automatically triggers deployment via GitHub Actions.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-medium">Manual Deployment</h3>
              <p className="text-sm text-gray-600">
                Use the "Deploy Now" button above to manually trigger deployment at any time.
              </p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-medium">Command Line</h3>
              <p className="text-sm text-gray-600">
                Run <code className="bg-gray-100 px-2 py-1 rounded">./deploy.sh</code> from the terminal for quick deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}