import { useState } from 'react';
import { motion } from 'motion/react';

const TESTFLIGHT_URL = 'https://testflight.apple.com/join/ntKbhPTn';

export function BetaForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Tally form (you can also use a webhook here)
      // For now, we'll simulate submission and show success
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In production, you would submit to Tally's API or webhook here
      // Example: await fetch('YOUR_WEBHOOK_URL', { method: 'POST', body: JSON.stringify({ name, email }) });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-4 min-h-[300px]"
      >
        {/* Success Icon */}
        <motion.div
          className="flex justify-center mb-5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
            <svg
              className="w-9 h-9 text-[#14B8A6]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.h3
          className="text-2xl font-bold text-white mb-3 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          You're on the list!
        </motion.h3>

        {/* Instructions */}
        <motion.p
          className="text-[#CCCCCC] text-sm mb-6 text-center max-w-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          iOS is ready now. Tap below to open TestFlight and install the beta.
        </motion.p>

        {/* TestFlight Button */}
        <motion.a
          href={TESTFLIGHT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.97-3.24-1.44-1.78-.7-2.79-1.09-3.27-1.9-.5-.87-.26-2.18.5-3.9 1.1-2.5 2.74-5.78 4.9-9.84.43-.84 1.13-1.42 2.07-1.75.3-.1.62-.15.95-.15.66 0 1.22.22 1.66.65.44.44.66 1 .66 1.66 0 .33-.05.65-.15.95-.33.94-.91 1.64-1.75 2.07-4.16 2.16-7.44 3.81-9.9 4.9-1.72.76-3.02 1-3.9.5-.8-.48-1.2-1.5-1.9-3.27-.47-1.16-.94-2.15-1.44-3.24-.48-1.03-.55-2.1.4-3.08.95-.98 2.05-.88 3.08-.4 1.09.5 2.08.97 3.24 1.44 1.78.7 2.79 1.09 3.27 1.9.5.87.26 2.18-.5 3.9-1.1 2.5-2.74 5.78-4.9 9.84-.43.84-1.13 1.42-2.07 1.75-.3.1-.62.15-.95.15-.66 0-1.22-.22-1.66-.65-.44-.44-.66-1-.66-1.66 0-.33.05-.65.15-.95.33-.94.91-1.64 1.75-2.07 4.16-2.16 7.44-3.81 9.9-4.9 1.72-.76 3.02-1 3.9-.5.8.48 1.2 1.5 1.9 3.27.47 1.16.94 2.15 1.44 3.24.48 1.03.55 2.1-.4 3.08z"/>
          </svg>
          <span>Open TestFlight</span>
          <svg
            className="w-4 h-4"
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
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-[13px] font-medium text-white/90 mb-2">
          Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="John Doe"
          className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/50 focus:border-[#14B8A6]/50 transition-all"
          style={{
            backdropFilter: 'blur(10px)',
          }}
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-[13px] font-medium text-white/90 mb-2">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="muslim@halal.com"
          className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/50 focus:border-[#14B8A6]/50 transition-all"
          style={{
            backdropFilter: 'blur(10px)',
          }}
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-5 py-2.5 bg-[#14B8A6] hover:bg-[#0D9488] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-[#14B8A6]/20 hover:shadow-[#14B8A6]/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <span>Submit</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </>
        )}
      </motion.button>
    </form>
  );
}
