import { getTenantConfig } from '@/lib/api';

export default async function Header() {
  const tenant = await getTenantConfig();

  if (!tenant) return <header>Error cargando config</header>;

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        {tenant.config?.logo && (
          <img 
            src={tenant.config.logo} 
            alt={tenant.name} 
            className="h-12 py-4"
          />
        )}
        <h1>{tenant.name}</h1>
      </div>
    </header>
  );
}
