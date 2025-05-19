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

export const postReview = async (obj) => {
    console.log(obj);
    try {
        const {data, error} = await supabase
            .from('reviews')
            .insert([
                {
                    city_id: obj.city_id,
                    user_name: obj.user_name,
                    rating : obj.rating,
                    comment : obj.comment,
                    air_quality_index: obj.air_quality_index,
                }
            ])
        return 'success';
    } catch (err) {
        console.log(err);
        return 'fail';
    }
}