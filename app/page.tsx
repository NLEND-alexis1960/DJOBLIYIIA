export default function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <main style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          DJOBLIYIIA
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '2rem' }}>
          IA pour tous ceux qui veulent utiliser l&apos;IA pour construire et déployer leurs sites en ligne et les applications
        </p>
        <div style={{ 
          padding: '1.5rem', 
          backgroundColor: '#f5f5f5', 
          borderRadius: '8px',
          marginTop: '2rem'
        }}>
          <p style={{ fontSize: '0.875rem', color: '#888' }}>
            🎉 Vercel Web Analytics est maintenant activé sur ce site
          </p>
        </div>
      </main>
    </div>
  );
}
