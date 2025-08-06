
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      name,
      email,
      phone,
      company,
      jobTitle,
      serviceType,
      projectBudget,
      timeline,
      message,
      source = 'website',
    } = body

    // Validate required fields
    if (!name || !email || !serviceType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create contact record in database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        jobTitle: jobTitle || null,
        serviceType,
        projectBudget: projectBudget || null,
        timeline: timeline || null,
        message,
        source,
        status: 'new',
      },
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        contactId: contact.id 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint' },
    { status: 200 }
  )
}
