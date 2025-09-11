'use client';

import { loadMaterials } from '@/lib/content';
import { Download, ExternalLink, FileText, Video, Code, BookOpen } from 'lucide-react';
import { useState } from 'react';

const iconMap = {
  PDF: FileText,
  YouTube: Video,
  slides: FileText,
  videos: Video,
  code: Code,
  other_resources: BookOpen,
};

function MaterialCard({ material, type }: { material: any; type: string }) {
  const Icon = iconMap[material.format as keyof typeof iconMap] || iconMap[type as keyof typeof iconMap] || FileText;
  
  const handleDownload = () => {
    if (material.file && material.file !== 'TBD') {
      // Handle file download
      window.open(material.file, '_blank');
    } else if (material.url && material.url !== 'TBD') {
      // Handle URL navigation
      window.open(material.url, '_blank');
    } else {
      alert('This material will be available soon!');
    }
  };

  return (
    <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <Icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="font-medium text-primary mb-1">{material.title}</h3>
          {material.description && (
            <p className="text-sm text-muted-foreground mb-2">{material.description}</p>
          )}
          {material.format && (
            <span className="inline-block px-2 py-1 bg-muted text-xs rounded text-muted-foreground mb-2">
              {material.format}
            </span>
          )}
          {material.platform && (
            <span className="inline-block px-2 py-1 bg-muted text-xs rounded text-muted-foreground mb-2">
              {material.platform}
            </span>
          )}
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            disabled={material.file === 'TBD' && material.url === 'TBD'}
          >
            {material.file === 'TBD' && material.url === 'TBD' ? (
              'Coming Soon'
            ) : (
              <>
                {type === 'code' || material.url ? <ExternalLink className="h-3 w-3" /> : <Download className="h-3 w-3" />}
                {type === 'code' || material.url ? 'View' : 'Download'}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Materials() {
  const materials = loadMaterials();
  const [activeTab, setActiveTab] = useState('slides');

  const tabs = [
    { id: 'slides', name: 'Slides', icon: FileText },
    { id: 'videos', name: 'Videos', icon: Video },
    { id: 'code', name: 'Code', icon: Code },
    { id: 'other_resources', name: 'Resources', icon: BookOpen },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Tutorial Materials</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Access all slides, videos, code examples, and additional resources from the tutorial
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-border mb-8">
        <nav className="flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-primary hover:border-border'
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.name}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === 'slides' && (
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-6">Presentation Slides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {materials.slides.map((slide, index) => (
                <MaterialCard key={index} material={slide} type="slides" />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'videos' && (
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-6">Video Recordings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {materials.videos.map((video, index) => (
                <MaterialCard key={index} material={video} type="videos" />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'code' && (
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-6">Code Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {materials.code.map((code, index) => (
                <MaterialCard key={index} material={code} type="code" />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'other_resources' && (
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-6">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {materials.other_resources.map((resource, index) => (
                <MaterialCard key={index} material={resource} type="other_resources" />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Usage Instructions */}
      <div className="mt-16 bg-muted rounded-lg p-6">
        <h3 className="text-lg font-semibold text-primary mb-4">Usage Instructions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-primary mb-2">Slides</h4>
            <p className="text-muted-foreground">
              PDF presentations from each session. Best viewed alongside the video recordings 
              for complete context and explanations.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-primary mb-2">Code Examples</h4>
            <p className="text-muted-foreground">
              Jupyter notebooks with hands-on implementations. Run in Google Colab or your 
              local environment with the provided requirements.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-primary mb-2">Videos</h4>
            <p className="text-muted-foreground">
              Full session recordings and highlight clips. Use timestamps in descriptions 
              to navigate to specific topics of interest.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-primary mb-2">Licensing</h4>
            <p className="text-muted-foreground">
              All materials are available under open licenses. See individual files for 
              specific terms and attribution requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}