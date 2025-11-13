# Supabase Migrations

This directory contains Supabase database migrations.

## Structure

- Each migration file should be named with a timestamp and descriptive name
- Example: `20240101000000_create_users_table.sql`

## Usage

```bash
# Create a new migration
supabase migration new migration_name

# Apply migrations
supabase db push

# Reset database
supabase db reset
```

