const TimeZones: Record<string, string> = {
    'utc': 'Etc/UTC',
    'est': 'America/New_York',
    'ae' : 'Asia/Dubai',
    'ba' : 'Europe/Sarajevo',
    'de' : 'Europe/Berlin',
    'dz' : 'Africa/Algiers',
    'eg' : 'Africa/Cairo',
    'es' : 'Europe/Madrid',
    'gr' : 'Europe/Athens',
    'hk' : 'Asia/Hong_Kong',
    'hr' : 'Europe/Zagreb',
    'id' : 'Asia/Jakarta',
    'in' : 'Asia/Kolkata',
    'it' : 'Europe/Rome',
    'ma' : 'Africa/Casablanca',
    'my' : 'Asia/Kuala_Lumpur',
    'pk' : 'Asia/Karachi',
    'rs' : 'Europe/Belgrade',
    'ru' : 'Europe/Moscow',
    'sa' : 'Asia/Riyadh',
    'sg' : 'Asia/Singapore',
    'si' : 'Europe/Ljubljana',
    'tn' : 'Africa/Tunis',
    'tr' : 'Europe/Istanbul',
    'za' : 'Africa/Johannesburg',
    'ar' : 'America/Argentina/Buenos_Aires',
    'br' : 'America/Sao_Paulo',
    'cl' : 'America/Santiago',
    'co' : 'America/Bogota',
    'cr' : 'America/Costa_Rica',
    'do' : 'America/Santo_Domingo',
    'ec' : 'America/Guayaquil',
    'gt' : 'America/Guatemala',
    'hn' : 'America/Tegucigalpa',
    'mx' : 'America/Mexico_City',
    'pa' : 'America/Panama',
    'pe' : 'America/Lima'
}

const getTimeZone = (country_cd: string): string => {
    return TimeZones[country_cd] ?? "";
}

export default getTimeZone;