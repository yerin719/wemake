import { createClient } from "@supabase/supabase-js";
import type { MergeDeep, SetNonNullable, SetFieldType } from "type-fest";
import type { Database as SupabaseDatabase, Tables } from "database.types";

type Database = MergeDeep<
  SupabaseDatabase,
  {
    public: {
      Views: {
        community_post_list_view: {
          Row: SetFieldType<
            SetNonNullable<Tables<"community_post_list_view">>,
            "author_avatar",
            string | null
          >;
        };
        gpt_ideas_view: {
          Row: SetNonNullable<Tables<"gpt_ideas_view">>;
        };
        product_overview_view: {
          Row: SetNonNullable<Tables<"product_overview_view">>;
        };
        community_post_detail: {
          Row: SetNonNullable<Tables<"community_post_detail">>;
        };
      };
    };
  }
>;

const client = createClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export default client;
