from fastapi import FastAPI, HTTPException
from utility.time import get_timezone, convert_time
app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello, World!"}

# @app.get("/api/v1/time-convert/")
# async def get_converted_time(src: str='UTC', trg: str='EST', src_time: str='2025-07-25 11:18:10'):
#     try:
#         if not get_timezone(src) or not get_timezone(trg):
#             raise ValueError
#         result = convert_time(src_time, get_timezone(src), get_timezone(trg))

#         return result

#     except ValueError as e:
#         return {"Error": "Invalid source or target country"}

@app.get("/api/v1/time-convert/")
async def get_converted_time(
    src: str = 'utc', 
    trg: str = 'est', 
    src_time: str = '2025-07-25 11:18:10'
):
    src_tz = get_timezone(str.upper(src))
    trg_tz = get_timezone(str.upper(trg))

    if not src_tz or not trg_tz:
        raise HTTPException(status_code=400, detail="Invalid source or target timezone")

    try:
        result = convert_time(src_time, src_tz, trg_tz)
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Time conversion error: {str(e)}")