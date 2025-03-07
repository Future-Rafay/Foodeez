import { NextResponse } from 'next/server';
import { businessFormSchema } from '@/lib/validations/form-schemas';
import type { BusinessFormValues } from '@/lib/validations/form-schemas';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate the request data using Zod schema
    const validatedData = businessFormSchema.parse(data);

    // Here you would typically:
    // 1. Check if business already exists
    // 2. Create business in database
    // 3. Handle file uploads for logo
    // 4. Send confirmation email
    // For now, we'll simulate a delay and return success

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return success response
    return NextResponse.json(
      { message: 'Business registered successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Business registration error:', error);

    // If it's a validation error, return the specific error messages
    if (error instanceof Error) {
      return NextResponse.json(
        { message: error.message },
        { status: 400 }
      );
    }

    // For any other errors, return a generic error message
    return NextResponse.json(
      { message: 'Failed to register business' },
      { status: 500 }
    );
  }
} 