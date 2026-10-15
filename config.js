
// Настройки подключения к Supabase
// Этот файл можно безопасно публиковать — ключ anon/public защищён RLS

const SUPABASE_URL = 'https://umcdedzdxmdkpathocqv.supabase.co';
const SUPABASE_KEY = 'sb_publishable_xunptSV6VNVMaP_M-8uqzg_efoMyoIt';

// Экспорт для использования в других файлах
if (typeof module !== 'undefined') {
  module.exports = { SUPABASE_URL, SUPABASE_KEY };
}
