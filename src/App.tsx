import { ArrowRight, Check, Star, TrendingUp, Zap, Shield, Target, Sparkles, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const joinUrl = "https://www.skool.com/max-height-1596/about?ref=d66b5d82ac2e49d99a805661691414ce&fbclid=PAZXh0bgNhZW0CMTEAAaecT-o_02BPAJwM4R2_Nbgjljbt4zT83dnskGq2dt4AF_elhcb3rFvfXbTiVA_aem_wIQc-o_eTROIVoQNJogNPA";

  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-xl z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center items-center">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-glow"></div>
                <img
                  src="/f5ec3730-4ae8-44dd-8282-3f46097d0896.jpg"
                  alt="Max Everest Logo"
                  className="w-14 h-14 rounded-full relative z-10 ring-4 ring-blue-500 group-hover:ring-blue-400 transition-all transform group-hover:scale-110"
                />
              </div>
              <span className="text-3xl font-bold text-white tracking-tight">MAX EVEREST</span>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-40 pb-24 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEyIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-60"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center space-x-2 mb-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 animate-glow">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Currently On Sale - Save $19</span>
            </div>
          </div>

          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.4s' }}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none">
              <span className="block text-white">You've Wasted</span>
              <span className="block text-gradient italic">Enough Time</span>
            </h1>
          </div>

          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.6s' }}>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
              You're still stuck at your height.
            </p>
            <p className="text-3xl md:text-4xl font-bold text-white mb-12">
              That ends <span className="text-gradient italic">today</span>.
            </p>
          </div>

          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.8s' }}>
            <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              My elite science-backed heightmaxxing process{' '}
              <span className="font-bold text-blue-400 italic">guarantees noticeable results within 1 month</span>, at any age.
              The average member who joins Max Height and works with me grows{' '}
              <span className="font-black text-blue-400 text-2xl">+6 inches</span>.
            </p>
          </div>

          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '1s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href={joinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-6 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50 animate-glow"
              >
                <span>Start Growing Today</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#results"
                className="inline-flex items-center space-x-2 bg-gray-800 text-blue-400 px-10 py-6 rounded-full text-xl font-bold border-2 border-blue-400 hover:bg-gray-700 transition-all transform hover:scale-105"
              >
                <span>See Results</span>
                <TrendingUp className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400 text-sm font-medium">Join 250+ members already seeing results</p>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-blue-400" />
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4 bg-gray-800 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              The <span className="text-gradient italic">Transformation</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-all"></div>
              <img
                src="/491422424_17942147045995311_7018227786125255678_n.jpg"
                alt="Max's Transformation"
                className="relative rounded-3xl shadow-2xl border-4 border-gray-700 w-full transform group-hover:scale-105 transition-all duration-300"
              />
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-gray-600 rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-white mb-4">From <span className="text-gradient">5'7" to 6'9"</span></h3>
                <p className="text-xl text-gray-200 leading-relaxed">
                  At just <span className="font-bold">15 years old</span>, I was 5'7" and frustrated. By <span className="font-bold">18</span>, I had grown to an incredible <span className="font-bold text-blue-400 text-2xl">6'9"</span>.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-6 bg-gray-700 rounded-xl border-2 border-gray-600 hover:border-blue-400 transition-all">
                  <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-200 font-medium">Developed science-backed height maximization plans</p>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-gray-700 rounded-xl border-2 border-gray-600 hover:border-blue-400 transition-all">
                  <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-200 font-medium">Created tailored nutrition and supplement protocols</p>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-gray-700 rounded-xl border-2 border-gray-600 hover:border-blue-400 transition-all">
                  <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-200 font-medium">Designed specialized stretching and exercise routines</p>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-gray-700 rounded-xl border-2 border-gray-600 hover:border-blue-400 transition-all">
                  <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-200 font-medium">Optimized lifestyle and recovery techniques</p>
                </div>
              </div>

              <p className="text-lg text-gray-300 italic leading-relaxed">
                Now I'm helping 250+ members achieve their height goals using the exact methods that transformed my life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="paths" className="py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-60"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              Two <span className="text-gradient italic">Paths</span>
            </h2>
            <p className="text-xl text-gray-400 font-light">The choice is yours</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-3xl p-10 hover:border-red-500 transition-all duration-300">
                <div className="bg-red-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Stay Stuck</h3>
                <p className="text-gray-400 mb-6 leading-relaxed font-light">
                  Continue wishing things were different. Keep trying random advice from the internet with no results.
                </p>
                <ul className="space-y-3 mb-8 text-gray-400">
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Wasted time with no guidance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Same frustrating results</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Conflicting information everywhere</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>No community support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Watching others succeed while you don't</span>
                  </li>
                </ul>
                <div className="block w-full bg-gray-700 text-gray-500 text-center px-8 py-4 rounded-full font-bold cursor-not-allowed">
                  Stay Where You Are
                </div>
              </div>
            </div>

            <div className="relative group md:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-all animate-glow"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 border-4 border-blue-400 rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-emerald-500 text-gray-900 px-6 py-2 rounded-full text-sm font-bold shadow-xl">
                  RECOMMENDED
                </div>
                <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-2xl">
                  <TrendingUp className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Join Our Program</h3>
                <p className="text-blue-100 mb-6 leading-relaxed font-light">
                  Get proven, science-backed methods with 1:1 support. Join 250+ members seeing real results.
                </p>
                <ul className="space-y-3 mb-8 text-blue-100">
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="font-medium">Tailored plans designed for YOU</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="font-medium">Results within 1 month guaranteed</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="font-medium">1:1 access to Max for guidance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="font-medium">Elite community of winners</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="font-medium">Professional video guides & exercises</span>
                  </li>
                </ul>
                <a
                  href={joinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-green-400 to-emerald-500 text-gray-900 text-center px-8 py-4 rounded-full font-bold hover:from-green-300 hover:to-emerald-400 transition-all transform hover:scale-105 shadow-2xl"
                >
                  Start Growing Today
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-2xl text-white font-bold mb-2">The decision is simple.</p>
            <p className="text-gray-400 italic">One path leads to change. The other to regret.</p>
          </div>
        </div>
      </section>

      <section id="results" className="py-24 px-4 bg-gray-800 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              Real Results from <span className="text-gradient italic">Real People</span>
            </h2>
            <p className="text-xl text-gray-300 font-light">See what our members are saying</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-700 hover:border-blue-500 transition-all transform hover:scale-[1.02] duration-300">
            <img
              src="/bd1e9182-0d7f-41b2-b143-af83a9b0727e.jpg"
              alt="Member Testimonials"
              className="w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { name: "Pablo Zdybel", result: "1 inch in first month", quote: "I started to apply all the tips found here from Max and I was consistent with each one. I managed to grow 1 inch. I am very happy" },
              { name: "Max Porter", result: "4 cm in 1 month", quote: "I grew 4 cm in 1 month" },
              { name: "Jackson Darson", result: "1 inch taller in 2 weeks", quote: "Grew up 1 inch taller in just 2 weeks" },
              { name: "Mia Leitch", result: "5'9 to 6'0 in 2 months", quote: "I WAS 5'9 2 MONTHS AGO, I JUST MEASURED MYSELF AND IM 6,0" },
              { name: "Member", result: "5.3 to 5.6 in 1 month", quote: "I was 5,3 just one month ago I'm now 5,6" },
              { name: "Daniel Williams", result: "Incredible community", quote: "Very well organized, up to date and correct information, a quality community which is so rare nowadays" }
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-gray-600 rounded-3xl p-8 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-blue-400 text-blue-400" />
                  ))}
                </div>
                <p className="text-blue-400 font-bold mb-3 text-xl italic">{testimonial.result}</p>
                <p className="text-gray-200 mb-4 leading-relaxed font-medium">"{testimonial.quote}"</p>
                <p className="text-gray-400 font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Stop Guessing. <span className="italic">Stop Struggling.</span>
          </h2>
          <p className="text-3xl md:text-4xl text-gray-200 mb-16 font-light">
            Follow the system. <span className="text-gradient font-bold italic">Get the results.</span>
          </p>

          <div className="bg-gray-800 border-4 border-blue-500 rounded-3xl p-12 mb-12 shadow-2xl hover:shadow-blue-500/30 transition-all animate-glow">
            <p className="text-xl text-gray-200 mb-8 font-medium italic">
              Every day you wait is a day wasted.
            </p>

            <div className="flex items-center justify-center space-x-6 mb-10">
              <span className="text-5xl font-bold text-gray-500 line-through">$49</span>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-30"></div>
                <span className="text-8xl md:text-9xl font-black text-gradient relative">$30</span>
              </div>
            </div>

            <p className="text-gray-200 mb-12 text-lg max-w-2xl mx-auto font-medium">
              For the same price as a t-shirt you have the opportunity to <span className="font-bold text-blue-400 italic">change your life</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <a
                href={joinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-16 py-6 rounded-full text-2xl font-bold transition-all transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50 animate-glow"
              >
                <span>Join Max Height Now</span>
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </a>

              <a
                href="#paths"
                className="inline-flex items-center justify-center space-x-2 bg-gray-700 text-blue-400 px-12 py-6 rounded-full text-xl font-bold border-2 border-blue-400 hover:bg-gray-600 transition-all transform hover:scale-105"
              >
                <span>View All Paths</span>
                <Shield className="w-6 h-6" />
              </a>
            </div>

            <p className="text-blue-400 font-bold text-xl flex items-center justify-center space-x-2">
              <Sparkles className="w-6 h-6" />
              <span>Limited Time Sale - Save $19</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800 border-2 border-gray-700 rounded-3xl p-10 hover:border-blue-400 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-6xl font-black text-gradient mb-3">250+</div>
              <div className="text-gray-300 font-semibold text-lg">Active Members</div>
            </div>
            <div className="bg-gray-800 border-2 border-gray-700 rounded-3xl p-10 hover:border-blue-400 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-6xl font-black text-gradient mb-3">+6"</div>
              <div className="text-gray-300 font-semibold text-lg">Average Growth</div>
            </div>
            <div className="bg-gray-800 border-2 border-gray-700 rounded-3xl p-10 hover:border-blue-400 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-6xl font-black text-gradient mb-3">1 Month</div>
              <div className="text-gray-300 font-semibold text-lg">To See Results</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 border-t border-gray-700 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-50"></div>
              <img
                src="/f5ec3730-4ae8-44dd-8282-3f46097d0896.jpg"
                alt="Max Everest Logo"
                className="w-14 h-14 rounded-full relative z-10 ring-4 ring-blue-500"
              />
            </div>
            <span className="text-3xl font-bold text-white">MAX EVEREST</span>
          </div>
          <p className="text-gray-400 mb-6 text-lg font-light italic">Elite Science-Backed Height Growth Program</p>
          <a
            href="https://www.instagram.com/max_everest2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 font-bold transition-colors text-lg"
          >
            @max_everest2
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
