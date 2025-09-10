@echo off
chcp 65001 >nul 2>&1
echo 启动本地服务器...
echo 请确保已安装 Python
echo.

REM 检查 Python 是否可用
python --version >nul 2>&1
if errorlevel 1 (
    echo 错误: 未找到 Python
    echo 请安装 Python 或使用其他方法
    echo 或者打开 index.html 点击"使用示例题目"
    pause
    exit /b 1
)

echo Python 已找到，正在启动服务器...
echo.
echo 服务器已启动！
echo.
echo 请在浏览器中访问: http://127.0.0.1:8000
echo.
echo 注意: 要停止服务器请按 Ctrl+C
echo.

REM 启动服务器
python -m http.server 8000
