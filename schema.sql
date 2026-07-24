-- SQL Database Schema for Impilo Community

-- 1. Profiles Table (extends auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    full_name TEXT NOT NULL,
    role TEXT DEFAULT 'Community Member',
    avatar_url TEXT,
    location TEXT DEFAULT 'Bulawayo, Zimbabwe',
    bio TEXT DEFAULT 'Passionate community member collaborating on sustainable local projects.',
    email TEXT,
    interests TEXT[] DEFAULT '{}',
    skills TEXT[] DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for Profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to profiles" ON public.profiles
    FOR SELECT USING (true);

CREATE POLICY "Allow individual update to own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Allow individual insert to own profile" ON public.profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

-- 2. Discussions Table
CREATE TABLE IF NOT EXISTS public.discussions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    author_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    category TEXT NOT NULL DEFAULT 'General',
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for Discussions
ALTER TABLE public.discussions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to discussions" ON public.discussions
    FOR SELECT USING (true);

CREATE POLICY "Allow authenticated insert to discussions" ON public.discussions
    FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Allow author update to own discussions" ON public.discussions
    FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Allow author delete to own discussions" ON public.discussions
    FOR DELETE USING (auth.uid() = author_id);

-- 3. Discussion Replies Table
CREATE TABLE IF NOT EXISTS public.discussion_replies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    discussion_id UUID REFERENCES public.discussions(id) ON DELETE CASCADE NOT NULL,
    author_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for Replies
ALTER TABLE public.discussion_replies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to replies" ON public.discussion_replies
    FOR SELECT USING (true);

CREATE POLICY "Allow authenticated insert to replies" ON public.discussion_replies
    FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Allow author update to own replies" ON public.discussion_replies
    FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Allow author delete to own replies" ON public.discussion_replies
    FOR DELETE USING (auth.uid() = author_id);

-- 4. Discussion Likes Table
CREATE TABLE IF NOT EXISTS public.discussion_likes (
    discussion_id UUID REFERENCES public.discussions(id) ON DELETE CASCADE NOT NULL,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    PRIMARY KEY (discussion_id, user_id)
);

-- Enable RLS for Likes
ALTER TABLE public.discussion_likes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to likes" ON public.discussion_likes
    FOR SELECT USING (true);

CREATE POLICY "Allow authenticated insert to likes" ON public.discussion_likes
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Allow user to delete own likes" ON public.discussion_likes
    FOR DELETE USING (auth.uid() = user_id);

-- 5. Mentorship Requests Table
CREATE TABLE IF NOT EXISTS public.mentorship_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    requestor_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    mentor_id TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for Mentorship Requests
ALTER TABLE public.mentorship_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow read access to mentorship requests" ON public.mentorship_requests
    FOR SELECT USING (true);

CREATE POLICY "Allow user to create mentorship requests" ON public.mentorship_requests
    FOR INSERT WITH CHECK (auth.uid() = requestor_id);

-- 6. Event Registrations Table
CREATE TABLE IF NOT EXISTS public.event_registrations (
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    event_id TEXT NOT NULL,
    PRIMARY KEY (user_id, event_id)
);

-- Enable RLS for Event Registrations
ALTER TABLE public.event_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow read access to event registrations" ON public.event_registrations
    FOR SELECT USING (true);

CREATE POLICY "Allow user to register for events" ON public.event_registrations
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Allow user to cancel event registration" ON public.event_registrations
    FOR DELETE USING (auth.uid() = user_id);

-- 7. Network Connections Table
CREATE TABLE IF NOT EXISTS public.network_connections (
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    connected_id TEXT NOT NULL,
    PRIMARY KEY (user_id, connected_id)
);

-- Enable RLS for Network Connections
ALTER TABLE public.network_connections ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow read access to network connections" ON public.network_connections
    FOR SELECT USING (true);

CREATE POLICY "Allow user to establish network connection" ON public.network_connections
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Allow user to sever network connection" ON public.network_connections
    FOR DELETE USING (auth.uid() = user_id);

-- 8. User Activities Table
CREATE TABLE IF NOT EXISTS public.user_activities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    action TEXT NOT NULL,
    target TEXT NOT NULL,
    link TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for User Activities
ALTER TABLE public.user_activities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to user activities" ON public.user_activities
    FOR SELECT USING (true);

CREATE POLICY "Allow user to record activities" ON public.user_activities
    FOR INSERT WITH CHECK (auth.uid() = user_id);
