'use client';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
const TENANT_SLUG = process.env.NEXT_PUBLIC_TENANT_SLUG || 'sneakers-cr';

export async function getTenantConfig() {
  try {
    const res = await fetch(
      `${API_URL}/api/v1/tenants/slug/${TENANT_SLUG}`
    );
    
    if (!res.ok) throw new Error('Failed to fetch tenant');
    return res.json();
  } catch (error) {
    console.error('Error fetching tenant config:', error);
    return null;
  }
}

export async function getLeads() {
  const res = await fetch(`${API_URL}/api/v1/leads`);
  return res.json();
}

export async function createLead(data: any) {
  const res = await fetch(`${API_URL}/api/v1/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}
