import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, budget, propertyType, timeline, location, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !budget || !propertyType || !timeline) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Format budget for display
    const budgetLabels: { [key: string]: string } = {
      'under-50': 'Under ₹50 Lakhs',
      '50-100': '₹50 Lakhs - ₹1 Crore',
      '100-200': '₹1 Crore - ₹2 Crore',
      '200-500': '₹2 Crore - ₹5 Crore',
      '500-plus': '₹5 Crore+',
    };

    // Format timeline for display
    const timelineLabels: { [key: string]: string } = {
      'immediate': 'Immediate (0-3 months)',
      'short': 'Short term (3-6 months)',
      'medium': 'Medium term (6-12 months)',
      'long': 'Long term (1+ years)',
    };

    // Format property type for display
    const propertyTypeLabels: { [key: string]: string } = {
      'apartment': 'Apartment',
      'villa': 'Villa',
      'plot': 'Residential Plot',
      'commercial': 'Commercial Property',
      'investment': 'Investment Property',
    };

    // Email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1a1a1a; margin: 0; font-size: 24px;">New Advisory Session Request</h1>
            <p style="color: #666; margin: 10px 0 0 0;">Celeste Abode Advisory Services</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <h2 style="color: #1a1a1a; margin: 0 0 15px 0; font-size: 18px;">Client Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333; width: 30%;">Name:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Email:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Phone:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">${phone}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <h2 style="color: #1a1a1a; margin: 0 0 15px 0; font-size: 18px;">Property Requirements</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333; width: 30%;">Budget:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">${budgetLabels[budget] || budget}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Property Type:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">${propertyTypeLabels[propertyType] || propertyType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Timeline:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">${timelineLabels[timeline] || timeline}</td>
              </tr>
              ${location ? `
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Location:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">${location}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          ${message ? `
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <h2 style="color: #1a1a1a; margin: 0 0 15px 0; font-size: 18px;">Additional Requirements</h2>
            <p style="color: #666; margin: 0; line-height: 1.6;">${message}</p>
          </div>
          ` : ''}

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; margin: 0; font-size: 14px;">
              This request was submitted through the Celeste Abode website.<br>
              Please contact the client within 24 hours to schedule their advisory session.
            </p>
          </div>
        </div>
      </div>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `New Advisory Session Request - ${name}`,
      html: emailContent,
    });

    // Send confirmation email to client
    const clientEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1a1a1a; margin: 0; font-size: 24px;">Thank You for Your Interest</h1>
            <p style="color: #666; margin: 10px 0 0 0;">Celeste Abode Advisory Services</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <p style="color: #333; margin: 0 0 15px 0; font-size: 16px; line-height: 1.6;">
              Dear ${name},
            </p>
            <p style="color: #666; margin: 0; line-height: 1.6;">
              Thank you for requesting an advisory session with Celeste Abode. We have received your requirements and our expert team will review your needs.
            </p>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <h2 style="color: #1a1a1a; margin: 0 0 15px 0; font-size: 18px;">What Happens Next?</h2>
            <ul style="color: #666; margin: 0; padding-left: 20px; line-height: 1.6;">
              <li>Our team will review your requirements within 24 hours</li>
              <li>We'll contact you to schedule a personalized consultation</li>
              <li>You'll receive a tailored advisory session based on your needs</li>
            </ul>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; margin: 0; font-size: 14px;">
              For immediate assistance, please call us at <strong>+91 9818735258</strong><br>
              or visit our website at <strong>www.celesteabode.com</strong>
            </p>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Advisory Session Request Confirmation - Celeste Abode',
      html: clientEmailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
