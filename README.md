# AGRI-EYE

**AGRI-EYE** is a digital food traceability and B2B agrimarketplace platform that helps local farmers record harvest data, generate QR-based traceability records, and connect verified produce with business buyers.

## Product Vision

AGRI-EYE helps local farmers turn harvests into transparent, trusted, data-backed products that are ready for B2B markets.

## Core Concept

AGRI-EYE combines three main functions:

1. **Harvest Data Recording**  
   Farmers input harvest details such as commodity, harvest date, quantity, origin, photos, and expected price.

2. **QR Code Traceability**  
   Each approved harvest batch receives a QR Code that opens a public traceability page.

3. **B2B Marketplace**  
   Verified harvest batches are listed for B2B buyers such as restaurants, hotels, caterers, food MSMEs, modern vegetable stores, and distributors.

## User Roles

- **Farmer**: Creates harvest batches, uploads product data, receives QR traceability, and manages orders.
- **B2B Buyer**: Searches verified produce, checks traceability, and requests orders.
- **Admin**: Validates farmers, reviews harvest batches, assigns grade, and manages orders.

## MVP Features

- Multi-role authentication
- Farmer harvest batch submission
- Admin batch validation and grading
- QR traceability page
- B2B marketplace listing
- B2B request order flow
- Admin order status management

## Tech Stack Plan

- **Framework**: Next.js App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Auth**: Auth.js / NextAuth or Supabase Auth
- **Storage**: Supabase Storage or Cloudinary
- **QR Code**: `qrcode`
- **Deployment**: Vercel

## Repository Structure

```txt
app/                  Next.js app routes
components/           Reusable UI components
docs/                 Product and planning documents
lib/                  Utilities and shared logic
prisma/               Database schema
```

## Current Status

This repository is in the planning and MVP setup phase.
