import nodemailer from 'nodemailer';

// Email configuration
const EMAIL_CONFIG = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
};

// Create transporter
const transporter = nodemailer.createTransport(EMAIL_CONFIG);

// Email template for form submissions
export function createFormSubmissionEmail(data: {
  formType: 'contact' | 'viewing';
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
  preferredDate?: string;
  preferredTime?: string;
  propertyTitle?: string;
  propertyLocation?: string;
}) {
  const { formType, firstName, lastName, email, phone, message, preferredDate, preferredTime, propertyTitle, propertyLocation } = data;
  
  const isViewingForm = formType === 'viewing';
  const subject = isViewingForm 
    ? `New Property Viewing Request - ${firstName} ${lastName}`
    : `New Contact Form Submission - ${firstName} ${lastName}`;

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${subject}</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f8f9fa;
            }
            .container {
                background: white;
                border-radius: 12px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 30px;
                text-align: center;
            }
            .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: 600;
            }
            .header p {
                margin: 10px 0 0 0;
                opacity: 0.9;
                font-size: 16px;
            }
            .content {
                padding: 30px;
            }
            .form-type {
                background: #e3f2fd;
                color: #1976d2;
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 600;
                display: inline-block;
                margin-bottom: 20px;
            }
            .info-table {
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
                background: white;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .info-table th {
                background: #f8f9fa;
                color: #495057;
                font-weight: 600;
                padding: 15px;
                text-align: left;
                border-bottom: 2px solid #dee2e6;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            .info-table td {
                padding: 15px;
                border-bottom: 1px solid #dee2e6;
                vertical-align: top;
            }
            .info-table tr:last-child td {
                border-bottom: none;
            }
            .info-table tr:nth-child(even) {
                background-color: #f8f9fa;
            }
            .property-info {
                background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
                border-left: 4px solid #ff6b6b;
            }
            .property-info h3 {
                margin: 0 0 10px 0;
                color: #d63031;
                font-size: 18px;
            }
            .property-info p {
                margin: 5px 0;
                color: #2d3436;
            }
            .message-section {
                background: #f8f9fa;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
                border-left: 4px solid #667eea;
            }
            .message-section h3 {
                margin: 0 0 15px 0;
                color: #495057;
                font-size: 18px;
            }
            .message-content {
                background: white;
                padding: 15px;
                border-radius: 6px;
                border: 1px solid #dee2e6;
                white-space: pre-wrap;
                font-style: italic;
                color: #6c757d;
            }
            .footer {
                background: #f8f9fa;
                padding: 20px 30px;
                text-align: center;
                color: #6c757d;
                font-size: 14px;
                border-top: 1px solid #dee2e6;
            }
            .timestamp {
                color: #6c757d;
                font-size: 12px;
                text-align: right;
                margin-top: 20px;
                font-style: italic;
            }
            .highlight {
                background: #fff3cd;
                padding: 2px 6px;
                border-radius: 4px;
                font-weight: 600;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Celeste Abode</h1>
                <p>New ${isViewingForm ? 'Property Viewing Request' : 'Contact Form Submission'}</p>
            </div>
            
            <div class="content">
                <div class="form-type">
                    ${isViewingForm ? '🏠 Property Viewing Request' : '📧 Contact Form Submission'}
                </div>
                
                <table class="info-table">
                    <thead>
                        <tr>
                            <th>Field</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Full Name</strong></td>
                            <td><span class="highlight">${firstName} ${lastName}</span></td>
                        </tr>
                        <tr>
                            <td><strong>Email Address</strong></td>
                            <td><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></td>
                        </tr>
                        <tr>
                            <td><strong>Phone Number</strong></td>
                            <td><a href="tel:${phone}" style="color: #667eea; text-decoration: none;">${phone}</a></td>
                        </tr>
                        ${isViewingForm ? `
                        <tr>
                            <td><strong>Preferred Date</strong></td>
                            <td><span class="highlight">${preferredDate}</span></td>
                        </tr>
                        <tr>
                            <td><strong>Preferred Time</strong></td>
                            <td><span class="highlight">${preferredTime}</span></td>
                        </tr>
                        ` : ''}
                        <tr>
                            <td><strong>Submission Time</strong></td>
                            <td>${new Date().toLocaleString('en-IN', { 
                                timeZone: 'Asia/Kolkata',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}</td>
                        </tr>
                    </tbody>
                </table>

                ${propertyTitle && propertyLocation ? `
                <div class="property-info">
                    <h3>🏡 Property Details</h3>
                    <p><strong>Property:</strong> ${propertyTitle}</p>
                    <p><strong>Location:</strong> ${propertyLocation}</p>
                </div>
                ` : ''}

                ${message ? `
                <div class="message-section">
                    <h3>💬 Message</h3>
                    <div class="message-content">${message}</div>
                </div>
                ` : ''}

                <div class="timestamp">
                    Received on ${new Date().toLocaleString('en-IN', { 
                        timeZone: 'Asia/Kolkata',
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    })} IST
                </div>
            </div>
            
            <div class="footer">
                <p>This email was automatically generated from the Celeste Abode website.</p>
                <p>Please respond to the customer within 2 hours for the best service experience.</p>
            </div>
        </div>
    </body>
    </html>
  `;

  return { subject, html };
}

// Send email function
export async function sendFormSubmissionEmail(data: {
  formType: 'contact' | 'viewing';
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
  preferredDate?: string;
  preferredTime?: string;
  propertyTitle?: string;
  propertyLocation?: string;
}) {
  try {
    const { subject, html } = createFormSubmissionEmail(data);
    
          const mailOptions = {
            from: process.env.EMAIL_FROM || '"Celeste Abode" <celesteabode@gmail.com>',
            to: process.env.EMAIL_TO || 'celesteabode@gmail.com',
            replyTo: data.email,
            subject: subject,
            html: html,
            text: `New ${data.formType} form submission from ${data.firstName} ${data.lastName} (${data.email})`
          };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// Verify email configuration
export async function verifyEmailConfig() {
  try {
    await transporter.verify();
    console.log('Email configuration verified successfully');
    return { success: true };
  } catch (error) {
    console.error('Email configuration verification failed:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}