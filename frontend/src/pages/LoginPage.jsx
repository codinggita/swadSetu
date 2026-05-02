import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signupBg from '../assets/signup-bg.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save user data and token to localStorage
        localStorage.setItem('userInfo', JSON.stringify(data));
        // Redirect to dashboard
        navigate('/dashboard');
      } else {
        setError(data.message || 'Login failed. Please check your credentials.');
      }
    } catch (err) {
      setError('An error occurred while connecting to the server.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-[#fffaf7] font-sans">
      {/* Left Side - Image */}
      <div 
        className="hidden md:flex flex-[1.2] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${signupBg})` }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/50 flex flex-col justify-between p-10 text-white">
          <div className="text-2xl font-bold">
            <Link to="/" className="text-white">swadSetu<span className="text-primary">.</span></Link>
          </div>
          <div className="text-[10px] tracking-[0.2em] opacity-80 uppercase">
            Modern Desi Kitchen © 2024
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-15">
        <div className="w-full max-w-[400px]">
          <h1 className="text-3xl font-bold mb-2 text-secondary">Welcome back</h1>
          <p className="text-sm text-text-light mb-10">Log in to continue your culinary journey.</p>
          
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-sm text-sm mb-6 border border-red-200">
              {error}
            </div>
          )}
          
          <form className="space-y-5" onSubmit={handleLogin}>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com" 
                className="p-3 border border-gray-200 rounded-sm text-sm outline-none focus:border-primary transition-colors bg-white"
                required 
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********" 
                className="p-3 border border-gray-200 rounded-sm text-sm outline-none focus:border-primary transition-colors bg-white"
                required 
              />
            </div>
            
            <div className="flex justify-end">
              <Link to="/forgot-password" className="text-xs text-primary font-medium hover:underline">
                Forgot password?
              </Link>
            </div>
            
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-[#f26b1d] text-white p-3.5 rounded-sm text-base font-semibold flex items-center justify-center gap-2 hover:bg-[#e05a10] transition-colors mt-2 cursor-pointer disabled:opacity-70"
            >
              {isLoading ? 'Logging in...' : 'Log In'} <span className="text-lg">→</span>
            </button>
          </form>
          
          <div className="flex items-center my-8 text-gray-300 text-[11px] font-bold tracking-widest">
            <div className="flex-1 border-b border-gray-100"></div>
            <span className="px-3">OR CONTINUE WITH</span>
            <div className="flex-1 border-b border-gray-100"></div>
          </div>
          
          <button className="w-full p-3 bg-white border border-gray-200 rounded-sm flex items-center justify-center gap-3 text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-4.5 h-4.5" />
            Continue with Google
          </button>
          
          <p className="text-center mt-6 text-sm text-text-light">
            Don't have an account? <Link to="/signup" className="text-primary font-bold">Sign up</Link>
          </p>
          
          <footer className="mt-12 text-[11px] text-gray-400 leading-relaxed text-center">
            Artisanal taste, delivered with care.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
