// Email service for sending form data
export interface FormSubmissionData {
  intent: "live" | "invest" | "signature"
  step1: {
    budget?: string
    possessionWindow?: string
    location?: string[]
  }
  step2: {
    configuration?: string[]
    timeline?: string
    priorities?: string[]
  }
  step3: {
    contactInfo: {
      name: string
      email: string
      phone: string
    }
    additionalNotes?: string
  }
}

export async function sendFormSubmission(data: FormSubmissionData): Promise<boolean> {
  try {
    // Create email content
    const emailContent = createEmailContent(data)
    
    // Use the existing contact API route
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formType: 'segmented-entry',
        intent: data.intent,
        firstName: data.step3.contactInfo.name.split(' ')[0] || '',
        lastName: data.step3.contactInfo.name.split(' ').slice(1).join(' ') || '',
        email: data.step3.contactInfo.email,
        phone: data.step3.contactInfo.phone,
        message: `Segmented Entry Form - ${data.intent}`,
        formData: data,
        emailContent: emailContent
      })
    })

    return response.ok
  } catch (error) {
    console.error('Error sending email:', error)
    return false
  }
}

function createEmailContent(data: FormSubmissionData): string {
  const intentLabels = {
    live: "Buying to Live",
    invest: "Investing for Returns", 
    signature: "Luxury & Signature Residences"
  }

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2B3035; border-bottom: 2px solid #CBB27A; padding-bottom: 10px;">
        New ${intentLabels[data.intent]} Inquiry
      </h2>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #2B3035; margin-top: 0;">Contact Information</h3>
        <p><strong>Name:</strong> ${data.step3.contactInfo.name}</p>
        <p><strong>Email:</strong> ${data.step3.contactInfo.email}</p>
        <p><strong>Phone:</strong> ${data.step3.contactInfo.phone}</p>
      </div>

      <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #2B3035;">Step 1 - Basic Requirements</h3>
        <p><strong>Budget:</strong> ${data.step1.budget || 'Not specified'}</p>
        <p><strong>Possession Window:</strong> ${data.step1.possessionWindow || 'Not specified'}</p>
        <p><strong>Preferred Locations:</strong> ${data.step1.location?.join(', ') || 'Not specified'}</p>
      </div>

      <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #2B3035;">Step 2 - Specific Preferences</h3>
        <p><strong>Configuration:</strong> ${data.step2.configuration?.join(', ') || 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${data.step2.timeline || 'Not specified'}</p>
        <p><strong>Priorities:</strong> ${data.step2.priorities?.join(', ') || 'Not specified'}</p>
      </div>

      ${data.step3.additionalNotes ? `
        <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2B3035;">Additional Notes</h3>
          <p>${data.step3.additionalNotes}</p>
        </div>
      ` : ''}

      <div style="background: #CBB27A; color: white; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
        <p style="margin: 0; font-weight: bold;">Ready to provide personalized recommendations!</p>
      </div>
    </div>
  `
}