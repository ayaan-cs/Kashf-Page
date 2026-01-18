import { motion } from 'motion/react';
import { useEffect } from 'react';

interface ThankYouPageProps {
  testFlightUrl?: string;
}

export function ThankYouPage({ testFlightUrl = 'https://testflight.apple.com/join/ntKbhPTn' }: ThankYouPageProps) {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-8 py-16 bg-[#0A0A0A] relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#14B8A6]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#14B8A6]/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="max-w-md w-full relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="rounded-3xl p-8 md:p-10 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)',
            backdropFilter: 'blur(24px) saturate(200%)',
            WebkitBackdropFilter: 'blur(24px) saturate(200%)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.12)',
          }}
        >
          {/* Success Icon */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#14B8A6]/20 flex items-center justify-center border-2 border-[#14B8A6]">
              <svg
                className="w-8 h-8 text-[#14B8A6]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </motion.div>

          {/* Success Message */}
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            You're on the list!
          </motion.h1>

          {/* Instructions */}
          <motion.p
            className="text-[#CCCCCC] mb-8 text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            iOS is ready now. Tap below to open TestFlight and install the beta.
          </motion.p>

          {/* TestFlight Button */}
          <motion.a
            href={testFlightUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 hover:scale-105 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.97-3.24-1.44-1.78-.7-2.79-1.09-3.27-1.9-.5-.87-.26-2.18.5-3.9 1.1-2.5 2.74-5.78 4.9-9.84.43-.84 1.13-1.42 2.07-1.75.3-.1.62-.15.95-.15.66 0 1.22.22 1.66.65.44.44.66 1 .66 1.66 0 .33-.05.65-.15.95-.33.94-.91 1.64-1.75 2.07-4.16 2.16-7.44 3.81-9.9 4.9-1.72.76-3.02 1-3.9.5-.8-.48-1.2-1.5-1.9-3.27-.47-1.16-.94-2.15-1.44-3.24-.48-1.03-.55-2.1.4-3.08.95-.98 2.05-.88 3.08-.4 1.09.5 2.08.97 3.24 1.44 1.78.7 2.79 1.09 3.27 1.9.5.87.26 2.18-.5 3.9-1.1 2.5-2.74 5.78-4.9 9.84-.43.84-1.13 1.42-2.07 1.75-.3.1-.62.15-.95.15-.66 0-1.22-.22-1.66-.65-.44-.44-.66-1-.66-1.66 0-.33.05-.65.15-.95.33-.94.91-1.64 1.75-2.07 4.16-2.16 7.44-3.81 9.9-4.9 1.72-.76 3.02-1 3.9-.5.8.48 1.2 1.5 1.9 3.27.47 1.16.94 2.15 1.44 3.24.48 1.03.55 2.1-.4 3.08z"/>
            </svg>
            <span>Open TestFlight</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.a>

          {/* Android Message */}
          <motion.div
            className="mt-6 p-4 rounded-xl bg-[#1a1a1a]/50 border border-[#333333]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-[#999999] mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <div className="text-left">
                <p className="text-[#999999] text-sm">
                  <span className="font-medium text-white">Android users</span>
                  <br />
                  Thanks for registering. We'll email you as soon as the Android build is ready.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Register Another Email Link */}
          <motion.a
            href="/#overview"
            className="inline-block mt-6 text-[#14B8A6] hover:text-[#0D9488] text-sm transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Register another email
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
