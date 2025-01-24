// src/components/LandingPage.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const LandingPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/dashboard');
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-indigo-600">StartupConnect</h1>
        <div className="space-x-4">
          <Button variant="outlined" color="primary" href="/login">
            Login
          </Button>
          <Button variant="contained" color="primary" href="/signup">
            Get Started
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-24">
          <h1 className="text-6xl font-bold mb-6 text-gray-900">
            Connect with Innovators
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Where ambitious startups meet passionate talent
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="/signup?role=founder"
              className="px-8 py-4"
            >
              I'm a Founder
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              href="/signup?role=job_seeker"
              className="px-8 py-4"
            >
              I'm Seeking Work
            </Button>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-12 mb-24">
          {['For Founders', 'For Talent', 'Collaboration'].map((title) => (
            <div
              key={title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-600">
                {title === 'For Founders'
                  ? 'Find skilled professionals ready to bring your vision to life'
                  : title === 'For Talent'
                  ? 'Discover exciting startups matching your skills and passions'
                  : 'Integrated tools for seamless team collaboration'}
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
