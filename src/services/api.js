// API Service for form submissions
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    this.name = 'ApiError';
  }
}

async function handleResponse(response) {
  const data = await response.json();
  
  if (!response.ok) {
    throw new ApiError(
      data.error || 'Wystąpił nieoczekiwany błąd',
      response.status
    );
  }
  
  return data;
}

/**
 * Submit contact form
 * @param {Object} data - { name, email, company?, message }
 */
export async function submitContactForm(data) {
  const response = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  return handleResponse(response);
}

/**
 * Submit CallCenter audit request
 * @param {Object} data - { name, email, company?, teamSize?, challenges? }
 */
export async function submitLeadForm(data) {
  const response = await fetch(`${API_URL}/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  return handleResponse(response);
}

/**
 * Submit opt-out/GDPR request
 * @param {Object} data - { fullName, email, phone?, nip? }
 */
export async function submitOptOutForm(data) {
  const response = await fetch(`${API_URL}/optout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  return handleResponse(response);
}

export { ApiError };
