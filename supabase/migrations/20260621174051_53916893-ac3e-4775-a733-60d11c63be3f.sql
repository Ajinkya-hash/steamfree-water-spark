
-- Replace permissive INSERT policy with validated one
DROP POLICY IF EXISTS "Anyone can submit inquiries" ON public.inquiries;

CREATE POLICY "Public can submit valid inquiries"
ON public.inquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name)) BETWEEN 1 AND 120
  AND length(btrim(email)) BETWEEN 3 AND 200
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND (company IS NULL OR length(company) <= 160)
  AND (phone IS NULL OR length(phone) <= 40)
  AND (industry IS NULL OR length(industry) <= 80)
  AND (capacity IS NULL OR length(capacity) <= 80)
  AND (solution_type IS NULL OR length(solution_type) <= 80)
  AND (message IS NULL OR length(message) <= 2000)
);

-- Explicitly deny SELECT/UPDATE/DELETE to anon and authenticated roles
CREATE POLICY "No public read of inquiries"
ON public.inquiries
FOR SELECT
TO anon, authenticated
USING (false);

CREATE POLICY "No public update of inquiries"
ON public.inquiries
FOR UPDATE
TO anon, authenticated
USING (false)
WITH CHECK (false);

CREATE POLICY "No public delete of inquiries"
ON public.inquiries
FOR DELETE
TO anon, authenticated
USING (false);
