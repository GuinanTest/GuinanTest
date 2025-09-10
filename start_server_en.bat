@echo off
echo Starting local server...
echo Please make sure Python is installed
echo.
echo Trying to start server...
echo.

REM Check if Python is available
python --version >nul 2>&1
if errorlevel 1 (
    echo Error: Python not found
    echo Please install Python or use other methods to run local server
    echo.
    echo Or directly open index.html file and click "Use Sample Questions"
    pause
    exit /b 1
)

echo Python found, starting server...
echo.
echo Server started successfully!
echo Please visit in browser: http://127.0.0.1:8000
echo.
echo Note: Press Ctrl+C to stop the server
echo Closing this window will also stop the server
echo.

REM Start server (this command will block until server stops)
python -m http.server 8000
