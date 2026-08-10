CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contact_submissions TO anon;
GRANT INSERT ON public.contact_submissions TO authenticated;
GRANT ALL ON public.contact_submissions TO service_role;

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anon can insert contact submissions"
ON public.contact_submissions
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Authenticated users can insert contact submissions"
ON public.contact_submissions
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Service role can read contact submissions"
ON public.contact_submissions
FOR SELECT
TO service_role
USING (true);