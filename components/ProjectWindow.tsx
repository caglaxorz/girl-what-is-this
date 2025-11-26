import React from 'react';

interface ProjectWindowProps {
  title: string;
  htmlContent: string;
  onClose: () => void;
}

const ProjectWindow: React.FC<ProjectWindowProps> = ({ title, htmlContent, onClose }) => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-4xl h-[80vh] bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-gray-800 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.5)] flex flex-col">
        
        {/* Title Bar */}
        <div className="bg-gradient-to-r from-[#000080] to-[#1084d0] p-1 flex justify-between items-center cursor-move">
          <div className="flex items-center gap-2 pl-1">
             <span className="text-white font-bold font-['Tahoma'] text-sm tracking-wide">
               🌐 Internet Explorer - {title}
             </span>
          </div>
          <button 
            onClick={onClose}
            className="bg-[#c0c0c0] w-6 h-5 flex items-center justify-center border-t border-l border-white border-b border-r border-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white"
          >
            <span className="text-black font-bold text-xs leading-none -mt-1">×</span>
          </button>
        </div>

        {/* Menu Bar Decoration */}
        <div className="flex gap-4 px-2 py-1 text-xs font-['Tahoma'] border-b border-gray-400">
           <span className="underline">F</span>ile
           <span className="underline">E</span>dit
           <span className="underline">V</span>iew
           <span className="underline">F</span>avorites
           <span className="underline">H</span>elp
        </div>

        {/* Address Bar */}
        <div className="flex items-center gap-2 p-1 border-b border-gray-400 text-sm font-['Tahoma']">
           <span>Address:</span>
           <div className="flex-1 bg-white border border-gray-500 px-1 py-0.5 truncate">
              http://www.girl-what-is-this.com/projects/{title.toLowerCase().replace(/\s/g, '-')}
           </div>
           <div className="flex gap-1">
             <span className="px-2 border border-gray-400 bg-[#c0c0c0]">Go</span>
           </div>
        </div>

        {/* Browser Content */}
        <div className="flex-1 bg-white border-2 border-inset border-gray-400 m-1 overflow-hidden relative">
            <iframe 
                srcDoc={htmlContent}
                className="w-full h-full border-none"
                title={title}
                sandbox="allow-scripts allow-modals"
            />
        </div>

        {/* Status Bar */}
        <div className="h-6 border-t border-gray-400 flex items-center px-2 gap-4 text-xs font-['Tahoma'] text-gray-600">
           <span>Done</span>
           <span className="border-l border-gray-400 pl-4 flex-1">Internet</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectWindow;
