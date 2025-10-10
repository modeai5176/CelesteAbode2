import { NextRequest, NextResponse } from 'next/server';
import { verifyEmailConfig, sendFormSubmissionEmail } from '@/lib/email-service';

export async function GET() {
  try {
    // Test email configuration
    const configResult = await verifyEmailConfig();
    
    if (!configResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email configuration failed',
          details: configResult.error 
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email configuration verified successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email test error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Send a test email
    const testResult = await sendFormSubmissionEmail({
      formType: 'contact',
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      phone: '+91 9876543210',
      message: 'This is a test email to verify the email service is working correctly.'
    });

    if (!testResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to send test email',
          details: testResult.error 
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Test email sent successfully',
        messageId: testResult.messageId 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
