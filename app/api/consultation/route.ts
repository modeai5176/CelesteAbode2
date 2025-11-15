import { NextRequest, NextResponse } from 'next/server';
import { sendFormSubmissionEmail } from '@/lib/email-service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, propertyType, budget, timeline, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !propertyType || !budget || !timeline) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone format
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone format' },
        { status: 400 }
      );
    }

    // Split name into first and last name
    const nameParts = name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Send email using centralized service
    const emailResult = await sendFormSubmissionEmail({
      formType: 'consultation',
      firstName: firstName,
      lastName: lastName,
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      budget: budget,
      propertyType: propertyType,
      timeline: timeline,
      message: message?.trim() || ''
    });

    if (!emailResult.success) {
      console.error('Failed to send consultation email:', emailResult.error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Consultation request submitted successfully',
        messageId: emailResult.messageId 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Consultation form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
