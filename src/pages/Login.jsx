import { useEffect } from 'react';

export default function Login() {
  useEffect(() => {
    window.location.replace('https://portal.scaleby.in/login');
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <p className="text-slate-500 text-sm">Redirecting to portal…</p>
    </div>
  );
}
