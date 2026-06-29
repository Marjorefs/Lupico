import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qcjrfaktwbjqowuavkvr.supabase.co';

const supabaseKey =
  'sb_publishable_m_gpOlvk453eX42EQOx_kw_4TXthXbE';

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);