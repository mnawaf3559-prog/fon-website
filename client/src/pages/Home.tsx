import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  const links = [
    { name: "دلتا", url: "https://www.mediafire.com/file/ch3r9wwnn8io32g/FON.Delta.FON-v2.703.apk/file" },
    { name: "دلتا فتنام", url: "https://www.mediafire.com/file/b8vms6du69x09kw/Delta_VNG_v2.702.%5BFON%5D.apk/file" },
    { name: "سكيبكس", url: "#" },
    { name: "ارسيوس", url: "#" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a1929] text-white p-4 font-['Cairo']" dir="rtl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md flex flex-col items-center space-y-8"
      >
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h2 className="text-xl md:text-2xl font-medium text-gray-200">مرحبا بك في موقع</h2>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold tracking-wider drop-shadow-lg"
            animate={{ 
              color: [
                "#ef4444", // Red
                "#eab308", // Yellow
                "#3b82f6", // Blue
                "#22c55e", // Green
                "#000000", // Black
                "#ffd700", // Gold
                "#ef4444"  // Back to Red for smooth loop
              ]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            fon
          </motion.h1>
          <p className="text-[#4ade80] text-lg md:text-xl mt-4 font-medium">هاكات اندرويد</p>
        </div>

        {/* Buttons Section */}
        <div className="w-full space-y-4">
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Button 
                className="w-full h-14 text-lg font-bold bg-[#22d3ee] hover:bg-[#06b6d4] text-white rounded-xl shadow-lg hover:shadow-[#22d3ee]/20 hover:scale-[1.02] transition-all duration-300 border-none"
                onClick={() => window.open(link.url, '_blank')}
              >
                {link.name}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2025 fon SYSTEM</p>
        </div>
      </motion.div>
      
      {/* Fixed Footer Badge */}
      <div className="fixed bottom-4 right-4 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-xs text-gray-600 border border-gray-700 rounded px-2 py-1">Made with Manus</span>
      </div>
    </div>
  );
}
