# MVP Roadmap — AGRI-EYE

## Phase 0 — Product Foundation

Goal: define what should be built before writing production code.

Tasks:

- Finalize mini PRD
- Define user roles
- Define MVP scope
- Define UI/UX direction
- Define database schema
- Define initial route structure

Deliverables:

- `docs/mini-prd.md`
- `docs/ui-ux-direction.md`
- `docs/mvp-roadmap.md`
- `prisma/schema.prisma`

## Phase 1 — Next.js Project Setup

Goal: prepare the base application structure.

Tasks:

- Initialize Next.js App Router with TypeScript
- Install Tailwind CSS
- Add shadcn/ui
- Setup base layout
- Create landing page structure
- Setup route groups for public, farmer, buyer, and admin areas

Suggested routes:

```txt
/
/login
/register
/marketplace
/marketplace/[productId]
/trace/[batchId]
/farmer/dashboard
/farmer/batches
/farmer/batches/create
/farmer/orders
/buyer/dashboard
/buyer/orders
/admin/dashboard
/admin/farmers
/admin/batches
/admin/orders
```

## Phase 2 — Database and Auth

Goal: enable user accounts and role-based access.

Tasks:

- Setup PostgreSQL
- Setup Prisma
- Run initial migration
- Implement user model
- Add role enum: FARMER, BUYER, ADMIN
- Add login/register flow
- Add protected routes
- Add role-based redirects

## Phase 3 — Farmer MVP

Goal: allow farmers to create harvest batches.

Tasks:

- Farmer profile form
- Create harvest batch form
- Harvest batch list
- Harvest batch detail page
- Batch status display
- Photo upload placeholder or storage integration

Core statuses:

- DRAFT
- PENDING_REVIEW
- APPROVED
- NEEDS_REVISION
- REJECTED
- LISTED

## Phase 4 — Admin Validation MVP

Goal: create trust layer through admin review.

Tasks:

- Admin farmer list
- Admin batch review list
- Batch detail review page
- Approve batch
- Reject batch
- Request revision
- Assign grade: A, B, C
- Add admin validation note

## Phase 5 — QR Traceability MVP

Goal: generate public traceability record for approved batches.

Tasks:

- Generate QR value from batch ID
- Create public traceability route: `/trace/[batchId]`
- Show product summary
- Show farmer and origin data
- Show grade and harvest date
- Show simple traceability timeline
- Add disclaimer: not official certification

## Phase 6 — Marketplace MVP

Goal: allow B2B buyers to browse verified produce.

Tasks:

- Marketplace listing page
- Product detail page
- Filter by commodity, location, grade, and availability
- Display traceability badge
- Request order CTA

## Phase 7 — Order Request MVP

Goal: connect buyer demand with farmer supply.

Tasks:

- Buyer request order form
- Create order record
- Farmer sees order request
- Admin monitors order
- Admin updates order status

Order statuses:

- REQUESTED
- CONFIRMED
- PROCESSING
- SHIPPED
- DELIVERED
- CANCELLED

## Phase 8 — Demo Polish

Goal: make the app ready for presentation and business plan demo.

Tasks:

- Add demo seed data
- Improve landing page copy
- Improve dashboard cards
- Add empty states
- Add loading states
- Add responsive design
- Prepare demo flow

Recommended demo flow:

1. Farmer creates chili harvest batch.
2. Admin validates and assigns Grade A.
3. QR traceability page is generated.
4. Product appears in B2B marketplace.
5. Buyer requests order.
6. Admin updates order status.
7. Buyer scans traceability page.

## Phase 9 — Future Enhancements

Potential features after MVP:

- Payment gateway
- WhatsApp notifications
- Price recommendation
- Sell readiness score
- AI-based product matching
- Distribution partner module
- Farmer group management
- Inventory forecasting
- Analytics dashboard
