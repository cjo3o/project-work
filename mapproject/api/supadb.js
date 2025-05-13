import {SupabaseClient} from '@supabase/supabase-js';

const supabase = new SupabaseClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

export const fetchCities = async () => {
    try {
        const {data} = await supabase.from('cities')
            .select('*')
            .order('category');
        return data;
    } catch (error) {
        return [];
    }

}

export const fetchRevies = async (cityId) => {
    try {
        const {data} = await supabase.from('reviews').select().eq("city_id", cityId);
        return data;
    } catch (error) {
        return [];
    }
}