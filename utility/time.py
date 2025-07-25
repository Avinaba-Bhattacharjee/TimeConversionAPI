from datetime import datetime
import pytz
import sys

timezones = {
    "UTC": "UTC",
    "EST": "US/Eastern",
    "IN" : "Asia/Kolkata",
    "PK" : "Asia/Karachi",
    "SA" : "Asia/Riyadh",
    "BH" : "Asia/Dubai",
    "OM" : "Asia/Dubai",
    "KW" : "Asia/Dubai",
    "AE" : "Asia/Dubai",
    "QA" : "Asia/Dubai",
    "DZ" : "Africa/Algiers",
    "MA" : "Africa/Casablanca",
    "EG" : "Africa/Cairo",
    "JO" : "Africa/Cairo",
    "HR" : "Europe/Zagreb",
    "SI" : "Europe/Ljubljana",
    "RS" : "Europe/Belgrade",
    "GR" : "Europe/Athens",
    "LB" : "Africa/Cairo",
    "TN" : "Africa/Tunis",
    "BA" : "Europe/Sarajevo",
    "ZA" : "Africa/Johannesburg",
    "KZ" : "Europe/Moscow",
    "RU" : "Europe/Moscow",
    "SG" : "Asia/Singapore",
    "MY" : "Asia/Kuala_Lumpur",
    "HK" : "Asia/Hong_Kong",
    "ID" : "Asia/Jakarta",
    "ES" : "Europe/Madrid",
    "DE" : "Europe/Berlin",
    "MX" : "America/Mexico_City",
    "BR" : "America/Sao_Paulo",
    "AR" : "America/Argentina/Buenos_Aires",
    "CO" : "America/Bogota",
    "PE" : "America/Lima",
    "CL" : "America/Santiago",
    "EC" : "America/Guayaquil",
    "HN" : "America/Tegucigalpa",
    "GT" : "America/Guatemala",
    "DO" : "America/Santo_Domingo",
    "PA" : "America/Panama",
    "CR" : "America/Costa_Rica",
    "UY" : "America/Argentina/Buenos_Aires"
}

def get_timezone(country_cd: str):
    return timezones.get(country_cd, None)


def convert_time(original_time_str, source_timezone, target_timezone):
    original_time = datetime.strptime(original_time_str, "%Y-%m-%d %H:%M:%S")

    source_timezone = pytz.timezone(source_timezone)
    localized_time = source_timezone.localize(original_time)

    target_timezone = pytz.timezone(target_timezone)
    converted_time = localized_time.astimezone(target_timezone)

    return {
        "source_timezone" : str(source_timezone),
        "target_timezone": str(target_timezone),
        "original_time": str(localized_time),
        "converted_time": str(converted_time)
    }

    #print(f"Original time ({source_timezone}): {localized_time}")
    #print(f"Converted time ({target_timezone}): {converted_time}")


def main():
    if len(sys.argv) < 3:
        source_country = input("Source Country: ")
        target_country = input("Target Country: ")
    elif len(sys.argv) == 3:
        source_country = sys.argv[1]
        target_country = sys.argv[2]

    while True:
        original_time_str = input("Enter original time: ")

        source_timezone = get_timezone(source_country)
        target_timezone = get_timezone(target_country)

        if source_timezone and target_timezone:
            result = convert_time(original_time_str, source_timezone, target_timezone)
            print(result)
        elif not source_timezone:
            print("Error: Either invalid source country or source timezone not supported")
        elif not target_timezone:
            print("Error: Either invalid target country or target timezone not supported")

if __name__ == '__main__':
    main()