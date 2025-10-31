// Email service for sending form data
export interface FormSubmissionData {
  intent: "live" | "invest" | "signature"
  step1: {
    budget?: string
    propertyType?: string // Ready to Move, Under Construction, Pre-Launch
    productCategory?: string // Flat, Villa, Penthouse, Farm House (for signature)
    area?: string // 3000 sq. ft & above (for signature)
    location?: string[]
    buyingTimeline?: string // Immediate, Within 3 Months, 3 to 6 Months
    timeframe?: string // 1 Year, 2 Years, 3 Years (for invest)
    expectedROI?: string // 15%, 20%, 25% (for invest)
    possessionWindow?: string
  }
  step2?: {
    configuration?: string[]
    timeline?: string
    priorities?: string[]
  }
  step3: {
    contactInfo: {
      name: string
      email: string
      phone: string
      whatsapp?: string
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
        ${data.step3.contactInfo.whatsapp ? `<p><strong>WhatsApp:</strong> ${data.step3.contactInfo.whatsapp}</p>` : ''}
      </div>

      <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #2B3035;">Step 1 - Basic Requirements</h3>
        ${data.step1.budget ? `<p><strong>Budget:</strong> ${data.step1.budget}</p>` : ''}
        ${data.step1.propertyType ? `<p><strong>Type of Property:</strong> ${data.step1.propertyType}</p>` : ''}
        ${data.step1.productCategory ? `<p><strong>Product Category:</strong> ${data.step1.productCategory}</p>` : ''}
        ${data.step1.area ? `<p><strong>Area (Size) of Property:</strong> ${data.step1.area}</p>` : ''}
        ${data.step1.buyingTimeline ? `<p><strong>When Planning to Buy:</strong> ${data.step1.buyingTimeline}</p>` : ''}
        ${data.step1.timeframe ? `<p><strong>Timeframe of Returns:</strong> ${data.step1.timeframe}</p>` : ''}
        ${data.step1.expectedROI ? `<p><strong>Expected ROI:</strong> ${data.step1.expectedROI}</p>` : ''}
        ${data.step1.location && data.step1.location.length > 0 ? `<p><strong>Preferred Locations:</strong> ${data.step1.location.join(', ')}</p>` : ''}
        ${data.step1.possessionWindow ? `<p><strong>Possession Window:</strong> ${data.step1.possessionWindow}</p>` : ''}
      </div>

      ${data.step2 ? `
      <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #2B3035;">Step 2 - Specific Preferences</h3>
        <p><strong>Configuration:</strong> ${data.step2.configuration?.join(', ') || 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${data.step2.timeline || 'Not specified'}</p>
        <p><strong>Priorities:</strong> ${data.step2.priorities?.join(', ') || 'Not specified'}</p>
      </div>
      ` : ''}

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